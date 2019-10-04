import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import Time from 'react-time';

export class MapContainer extends React.Component {
    state = { userLocation: { lat: 32, lng: 32 }, loading: true };
  
    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { lat: latitude, lng: longitude },
            loading: false
          });
          
        },
        () => {
          this.setState({ loading: false });
        }
      );
    }
  
    render() {
      const { loading, userLocation } = this.state;
      const { google } = this.props;
  
      if (loading) {
        return null;
      }
      console.log(this.state.userLocation.lat,this.state.userLocation.lng,new Date());
      return <Map google={google} initialCenter={userLocation} zoom={10} />;
    }
  }

const ApiWrapper = GoogleApiWrapper({
    apiKey: "AIzaSyBZHNoU7fFhiF-1CcjoDJvZFz0FVzaULiI"
  })(MapContainer);

  export default ApiWrapper;