import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row , Button, Radio, Form, Icon, Input, Upload} from 'antd';
import renderEmpty from '../node_modules/antd/lib/config-provider/renderEmpty';


function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class App extends Component {

  state = {
    loading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  
  render(){
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={12}>
       <Button type="primary" block size="large">
      Register
    </Button>
      </Col>


      <Col span={12}>
      <Button type="primary" block size="large">
      Notify Now
    </Button>
    <Card size="large" style={{ width: "100%" }}>

    MAP HERE
    </Card>
    <Button type="primary" block size="large">
      Locate Me
    </Button>


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
        {/* <Form.Item> */}
          <Button type="primary"  block size="large" htmlType="submit">
            More
          </Button>
        {/* </Form.Item> */}
        </div>
      </Form>

    <div style={{ marginTop: 16 }}>
   <Form layout="inline">
    <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
   </Form>
</div>

      </Col>
    </Row>
  </div>
  );
}
}

export default App;
