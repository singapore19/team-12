import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';
import SimpleMap from './components/Map/Map';
import ApiWrapper from './components/Map/MapLocation.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <ApiWrapper/>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
      </header>
    </div>
  );
}

export default App;
