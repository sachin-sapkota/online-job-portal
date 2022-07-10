import MapGL, {
  GeolocateControl,
  NavigationControl,
  Marker,
} from 'react-map-gl';

import { MdLocationOn } from 'react-icons/md';

import React, { useState, useCallback, useEffect } from 'react';
const TOKEN = process.env.MAPBOX_API;
const Maps = ({ setpoint }) => {
  const [viewPort, setViewPort] = useState({
    longitude: 85.333336,
    latitude: 27.700001,
    zoom: 13,
  });

  const [marker, setMarker] = useState({
    latitude: 27.700001,
    longitude: 85.333336,
  });
  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
  }, []);

  const geoLocateControlRef = useEffect((ref) => {
    if (ref) {
      ref.trigger();
    }
  }, []);
  console.log(marker);
  useEffect(() => {
    setpoint({
      latitude: marker.latitude,
      longitude: marker.longitude,
    });
  }, [marker]);

  return (
    <div className="w-full h-full  text-gray-500 dark:text-white ">
      <MapGL
        initialViewState={{ ...viewPort }}
        mapboxAccessToken="pk.eyJ1Ijoic2FjaGluOTg3OSIsImEiOiJjbDRmcDZjbW0wNWdzM2pxcXR1M21xaDFrIn0.Ez11RFErZnsAkcDDY5wRxQ"
        mapStyle="mapbox://styles/sachin9879/cl5dqroo9000714qo951jyrxn"
        onClick={(e) =>
          setMarker({
            longitude: e.lngLat.lng,
            latitude: e.lngLat.lat,
          })
        }
      >
        <GeolocateControl
          ref={geoLocateControlRef}
          trackUserLocation={true}
          showUserHeading={true}
        />
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <MdLocationOn className="w-9 h-9 text-white" />
        </Marker>

        <NavigationControl />
      </MapGL>
    </div>
  );
};
export default Maps;
