import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Row , Button, Radio, Form, Icon, Input, Upload, Rate, Switch} from 'antd';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
// import thirdPage from './components/thirdPage.js'

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class secondPage extends Component {
  render() {
    return (
      <div style={{height:"100%", width: '100%'}}>
   <Form layout="inline">
          <div style={{ marginTop: 16 }}>
        <Form.Item label="Gender">
        <Radio.Group buttonStyle="solid">
        <Radio.Button value="male">Male</Radio.Button>
        <Radio.Button value="female" >Female </Radio.Button>
        <Radio.Button value="unsure">Unsure</Radio.Button>
      </Radio.Group>
        </Form.Item>
        </div>

        <div style={{ marginTop: 16 }}>
        <Form.Item label="Ethnicity">
        <Radio.Group buttonStyle="solid">
        <Radio.Button value="chinese">Chinese</Radio.Button>
        <Radio.Button value="malay" >Malay </Radio.Button>
        <Radio.Button value="indian">Indian</Radio.Button>
        <Radio.Button value="others">Others</Radio.Button>
        </Radio.Group>
        </Form.Item>
        </div>

        <div style={{ marginTop: 16 }}>
        <Form.Item label="Appearance of health">
        <Rate  allowHalf defaultValue={2.5}/>
        </Form.Item>
    </div>

        <div style={{ marginTop: 16 }}>
        <Form.Item label="Nunber of belongings">
        <Rate  allowHalf defaultValue={2.5}/>
        </Form.Item>
    </div>



     <div style={{ marginTop: 16 }}>
     <Form.Item label="Any young children">
  <Switch defaultChecked onChange={onChange} />
        </Form.Item>
        </div>

        <div style={{ marginTop: 16 }}>

        <Link to="/third">
       < Button type="primary" block size="large">
         More
      </Button>
        </Link>
      </div>

      </Form>
      </div>
      // </Router>
    );
  }
}

export default secondPage;