import React from 'react';
// import GoogleMapReact from 'google-map-react';


export default class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        hi
      </div>
    );
  }






}
