import React, { Component } from 'react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class secondPage extends Component {


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%'}}>
          
            {"second page"}
      </div>
    );
  }
}

export default secondPage;