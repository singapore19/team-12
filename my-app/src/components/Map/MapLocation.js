import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

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
  
      let data = new FormData();
      const userInfo = {
          userLat: this.state.userLocation.lat,
          userLng: this.state.userLocation.lng,
          userDate: new Date()
      };
      data.append("myjsonkey", JSON.stringify(userInfo));
      
      fetch('http://54.169.146.186:5000/create', {
          method: 'POST',
          body: data
      })
      return <Map google={google} initialCenter={userLocation} zoom={10} />;
    }
  }

const ApiWrapper = GoogleApiWrapper({
    apiKey: "AIzaSyBZHNoU7fFhiF-1CcjoDJvZFz0FVzaULiI"
  })(MapContainer);

  export default ApiWrapper;