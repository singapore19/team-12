import React, { Fragment } from 'react';

const InfoWindow = (props) => {
  const { town } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        { town.name }
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        COUNT: 10
      </div>
    </div>
  );
};

const Marker = (props) => {
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: props.show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <Fragment>
      <div style={markerStyle} onClick={props.onClick}/>
      {/* { props.show && <InfoWindow town={props.town} />} */}
    </Fragment>
  );
};

export default Marker;