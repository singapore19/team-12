import React, { Component } from 'react';
import { Card, Col, Row , Button, Radio, Form, Icon, Input, Upload, Rate, Switch, message} from 'antd';
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}


class thirdPage extends Component {
  state = {
    loading: false,
  };

  render() {

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div style={{ height: '50vh', width: '100%'}}>
          <Form layout="inline">
      <div style={{ marginTop: 16 }}>

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
    </div>
    <div style={{ marginTop: 16 }}>
      <Input placeholder="Other details" />
      </div>

      <div style={{ marginTop: 16 }}>
      <Link to="/home">

          <Button type="primary"  block size="large" htmlType="submit">
            Submit
          </Button>
          </Link>
        </div>
   </Form>
      </div>
    );
  }
}

export default thirdPage;