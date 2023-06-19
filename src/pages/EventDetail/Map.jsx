import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Options from './Options';

const containerStyle = {
  width: '550px',
  height: '300px',
};

function MyComponent() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch('/data/DetailSample.json')
      .then(response => response.json())
      .then(result => {
        setLocation(result[0]);
      });
  }, []);

  const center = {
    lat: location.length > 0 ? location.latitude : 0,
    lng: location.length > 0 ? location.longitude : 0,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      const contentString = `
        <div style="color: black;">
       ${location.name}
        </div>
      `;

      const tooltip = new window.google.maps.InfoWindow({
        content: contentString,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        map: map,
      });

      marker.addListener('mouseover', () => {
        tooltip.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        tooltip.close();
      });
    }
  }, [map]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={Options}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
