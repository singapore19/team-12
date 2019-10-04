import React from 'react';
import Map from './GMap';
import SidePanel from './SidePanel';
import { getReports } from './api';
import { Row, Col, Switch } from 'antd';
import { towns } from './api';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.loadReportsData();
    this.state = {
      reports: [],
      positions: [],
      towns: towns,
      selectedTown: '',
      townMode: false,
    }
  }

  loadReportsData = () => {
    getReports()
    .then( reports => {

      // Get positions
      let positions = reports.map( report => ({ lat: report.lat, lng: report.lon }) );
      this.setState({ positions });
      console.log('FHDHFAH', positions);
    })
    .then( console.log('data loaded into dashboard') )
    .catch( e => {
      // this.setReportsToDefault();
    })
  }

  // Fallback for if rest service fails
  setReportsToDefault = () => {
    this.setState({
      reports: [
        { lat: 1.3442, lon: 103.8203, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3242, lon: 103.8103, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3342, lon: 103.8303, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3142, lon: 103.8403, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3542, lon: 103.8213, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3431, lon: 103.8196, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
        { lat: 1.3292, lon: 103.8267, town: 'AMK', datetime: '...', gender: 'M', ethnicity: 'Chinese', ageGroup: '10-20', risk: 'critical', remarks: '...', type: 'individual' },
      ]
    });
  }

  render() {
    console.log(this.state.townMode);
    return (
      <div className="dashboard">
        <Row type="flex">
          <Col span={16}>
            <Map showMarkers={this.state.townMode} positions={ this.state.positions } onClickMarker={(townName) => this.setState({ townName }) } width="100%" height="100vh" />
          </Col>
          <Col span={8}>
            <SidePanel switch={
              <Switch onChange={(val) => this.setState({ townMode: val })} checkedChildren="开" unCheckedChildren="关" />
            }/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
