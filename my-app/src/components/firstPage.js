import React, { Component } from 'react';
import {Col, Row , Button} from 'antd';
import ApiWrapper from './Map/MapLocation.js'
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class firstPage extends Component {
  render() {
      return(

    <Row gutter={24}>
      <Col span={24}>
      <Row>
        <Col>
        <div style={{ marginTop: 16, marginBottom:16 ,width:"100%", height:"50vh", }}>
          <ApiWrapper/>    
        </div>
      </Col>
        </Row>
        <div style={{ marginTop: 100 ,width:"100%", height:"50vh", }}>

    <Link to="/second">
     <Button type="primary" block size="large">
     Locate Me
    </Button>
    </Link>
    </div>
      </Col>
    </Row>
      )
  }
}

export default firstPage;