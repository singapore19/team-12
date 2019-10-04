from flask import Flask, render_template,request,redirect,url_for # For flask implementation
from pymongo import MongoClient # Database connector
from bson.objectid import ObjectId # For ObjectId to work
from bson.errors import InvalidId # For catching InvalidId exception for ObjectId
import os
from bson.json_util import dumps
from datetime import datetime
from flask import jsonify

mongodb_host = 'localhost'
mongodb_port = 27017
client = MongoClient(mongodb_host, mongodb_port)    #Configure the connection to the database
db = client.report    #Select the database
reports = db.reports #Select the collection

app = Flask(__name__)
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

	lat = request.values.get("lat")
	lon = request.values.get("lon")
	town = request.values.get("town")
	from datetime import datetime
	datetime = "{:%B %d, %Y}".format(datetime.now())
	gender = request.values.get("gender")
	ethnicity = request.values.get("lon")
	ageGroup = request.values.get("ageGroup")
	additionalRemarks = request.values.get("additionalRemarks")
	risk = request.values.get("risk")
	homelessCount = request.values.get("homelessCount")
	d = {"lat": lat, "lon": lon, "town":town, "datetime":datetime, "gender":gender, "ethnicity": ethnicity, "ageGroup":ageGroup, "additionalRemarks":additionalRemarks,
		 "risk":risk, "homelessCount":homelessCount}

	reports.insert(d)
	return dumps("ok")


if __name__ == "__main__":
	debug = True
	app.run(host='0.0.0.0', port=5000, debug=debug)
	#app.run()
	# Careful with the debug mode..