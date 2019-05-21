import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'


export default class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 39.73,
      lng: -104
    },
    zoom: 4
  };

  mapmarkers = () => this.props.sightings.splice(0,30).map(sighting => <MapMarker lat={sighting.incident_lat + (Math.floor(Math.random() * 80) - 60)} lng={sighting.incident_long + (Math.floor(Math.random() * 40) - 30)} key={sighting.id}/>)

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDCGPYjf2Dn57fgjNy-eakFcNgUEqgHFrg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker lat={39.73} lng={-104} />
          <MapMarker lat={40} lng={-105}/>
          <MapMarker lat={50} lng={-89} />
          {this.mapmarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}
