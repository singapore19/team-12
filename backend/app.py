from flask import Flask, render_template,request,redirect,url_for # For flask implementation
from pymongo import MongoClient # Database connector
from bson.objectid import ObjectId # For ObjectId to work
from bson.errors import InvalidId # For catching InvalidId exception for ObjectId
import os
from bson.json_util import dumps
from datetime import datetime
from flask import jsonify
from find_mrt import find_mrt
from flask_cors import CORS

mongodb_host = 'localhost'
mongodb_port = 27017
client = MongoClient(mongodb_host, mongodb_port)    #Configure the connection to the database
db = client.report    #Select the database
reports = db.reports #Select the collection

app = Flask(__name__)
CORS(app)
title = "reports"
heading = "reports for homeless"
#modify=ObjectId()

@app.route('/', methods=['GET'])
def foo():
    return jsonify("hello")
# return a lsit

@app.route("/list", methods=['GET'])
def lists ():
	reports_list = reports.find()
	return dumps(reports_list)

@app.route("/create", methods=['POST'])
def create():
	req = request.json
	lat = req["lat"]
	lon = req["lon"]
	id = req["id"]
	# id = request.values.get("id")

	from datetime import datetime
	datetime = "{:%B %d, %Y}".format(datetime.now())
	print(lat, lon)
	print("&&&&&")
	# print(id)
	town = find_mrt(lat, lon)
	print(town)
	d = {"lat": lat, "lon": lon,  "datetime":datetime, "town": town, "id": id}

	reports.insert(d)
	return dumps("ok")


@app.route('/report/<page_id>', methods=['PATCH'])
def patch_report(page_id):
	req = request.json
	pageid = str(page_id)

	doc = reports.find({"id": pageid})

	gender = req["gender"]
	ageGroup = req["ageGroup"]
	additionalRemarks = req["additionalRemarks"]
	ethnicity = req["ethnicity"]
	risk = req["risk"]
	homelessCount = req["homelessCount"]
	d = { "gender": gender, "ethnicity": ethnicity,
		 "ageGroup": ageGroup, "additionalRemarks": additionalRemarks,
		 "risk": risk, "homelessCount": homelessCount}
	return dumps("patch!")



if __name__ == "__main__":
	debug = True
	app.run(host='0.0.0.0', port=5000, debug=debug)
	#app.run()
	# Careful with the debug mode..