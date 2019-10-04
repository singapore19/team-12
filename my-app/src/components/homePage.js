import React, { Component } from 'react';
import { Card, Col, Row , Button, PageHeader} from 'antd';
import ApiWrapper from './Map/MapLocation.js'
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class homePage extends Component {

  render() {
      return(
        <div style={{ marginTop: 16, marginBottom:16 ,width:"100%", height:"50vh", }}>
        <div type="flex" justify="space-around" align="middle">
        <PageHeader title="New Hope Community Services" />
        <img height="200" width="200" src={require('./nhwc.jpg')} />

     <div style={{ marginTop: 16 }}>
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
    </div>
      )
  }
}

export default homePage;