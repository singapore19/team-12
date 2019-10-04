import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HoverMarker from './HoverMarker'; 
import { towns } from './api';

const Marker = ({ text }) => (
  <div>{text}</div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.3442,  // Fix it at singapore's centre
      lng: 103.8203 
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    
    this.state = {
      positions: [],
      towns: towns,
    }
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      positions: newProps.positions
    })
  }

  // TODO: toggle heat map on off, switch to marker mode

  render() {

    let heatMapData = {    
      positions: this.state.positions,
      options: {   
        radius: 40,   
        opacity: 0.6,
      }
    };

    console.log('💥', heatMapData);
    const onClickMarker = this.props.onClickMarker;

    return (
      // Important! Always set the container height explicitly

      <div style={{ height: this.props.height || '100vh', width: this.props.width || '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC3jx7SEEnmBtmqPts_94H8oEGlz-L9uZY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}          
          heatmap={heatMapData}
        >
          {this.state.towns.map( town => <HoverMarker show={false} town={town.name} lat={town.lat} lng={town.lng} onClick={() => onClickMarker(town.name)}/> )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;