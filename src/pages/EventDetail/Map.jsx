import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Options from './Options';
import { APIS } from '../../config';
import { useParams } from 'react-router-dom';

const containerStyle = {
  width: '550px',
  height: '300px',
};

function MyComponent() {
  const [location, setLocation] = useState({});
  const [map, setMap] = useState(null);
  const params = useParams();
  const eventId = params.id;

  useEffect(() => {
    fetch(`${APIS.events}/${eventId}`)
      .then(response => response.json())
      .then(result => setLocation(result[0]));
  }, []);

  const center = {
    lat: Number(location.latitude) || 0,
    lng: Number(location.longitude) || 0,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  const onLoad = map => {
    setMap(map);
  };

  const onUnmount = useCallback(function callback(map) {
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

      map.setCenter(center);
      map.setZoom(18);
    }
  }, [map, center]);

  return isLoaded && location.id ? (
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
