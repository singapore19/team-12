import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";


export class MapContainer extends React.Component {
    state = { userLocation: { id : 8888 , lat: 32, lng: 32 }, loading: true };
  
    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { id : "8888" , lat: latitude, lng: longitude },
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
          id:  this.state.userLocation.id,
          lat: this.state.userLocation.lat,
          lon: this.state.userLocation.lng,
          // userDate: new Date()
      };

      console.log(userInfo)
      xhr(userInfo);
      return <Map google={google} initialCenter={userLocation} zoom={10} />;
    }
  }

  async function xhr(userInfo) {try {
    const response = await fetch('http://54.169.146.186:5000/create', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userInfo), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log('Success:', JSON.stringify(json));
  } catch (error) {
    console.error('Error:', error);
  }}

const ApiWrapper = GoogleApiWrapper({
    apiKey: "AIzaSyBZHNoU7fFhiF-1CcjoDJvZFz0FVzaULiI"
  })(MapContainer);

  export default ApiWrapper;