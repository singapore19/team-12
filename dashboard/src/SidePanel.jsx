import React from 'react';
import { Row, Col } from 'antd'; 
import Chart from './Chart';
import GroupedChart from './GroupedChart';

class SidePanel extends React.Component {
  
  render(){
    return (
      <div style={{ marginTop: '10px' }}>
        <Row>
          <Col>
            {this.props.switch}
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart options={{ 
                title: {
                  text: 'Rough Sleepers Count Over Time'
                },
                series: [{
                  data: [1, 2, 3]
                }]
             }}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <GroupedChart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SidePanel;
