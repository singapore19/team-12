import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row , Button, Radio, Form, Icon, Input, Upload, Rate, Switch} from 'antd';
import ApiWrapper from './components/Map/MapLocation.js'
import homePage from './components/homePage.js'
import firstPage from './components/firstPage.js'
import secondPage from './components/secondPage.js'
import thirdPage from './components/thirdPage.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
  return (
    <div style={{ padding: '30px', height:"100%", width:"100%" }}>
      <Router>
        <Route path = "/home" component={homePage}/>
        <Route path ="/first" component={firstPage}/>
        <Route path="/second" component={secondPage} />
        <Route path="/third" component={thirdPage} />
    </Router>

  </div>
  );
}
}

export default App;
