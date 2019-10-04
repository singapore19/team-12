import React, { Component } from 'react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class thirdPage extends Component {


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%'}}>
          
            {"third page"}
      </div>
    );
  }
}

export default thirdPage;