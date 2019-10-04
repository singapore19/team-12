import React, { Component } from 'react';
import { Card, Col, Row , Button, Radio, Form, Icon, Input, Upload, Rate, Switch, message} from 'antd';
import ApiWrapper from './Map/MapLocation.js'
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class homePage extends Component {

  render() {
      return(
        <div style={{ marginTop: 16, marginBottom:16 ,width:"100%", height:"50vh", }}>
        <div type="flex" justify="space-around" align="middle">
    <Row gutter={16}>
      <Col span={12}>
       <Button type="primary" block size="large">
      Register
    </Button>
      </Col>
      <Col span={12}>
        
        <Link to="/first">
        <Button type="primary" block size="large">
          Notify Now
          </Button>
        </Link>
      </Col>
    </Row>
    </div>
    </div>
      )
  }
}

export default homePage;