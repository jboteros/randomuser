import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import styles from './styles';
import {ApplicationStyles, Metrics} from '../../Themes';
const mapStyle = require('../../Config/mapStyle.json');

const ASPECT_RATIO = Metrics.screenWidth / Metrics.screenHeight;

const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default data => {
  const {coordinates} = data;

  return (
    <TouchableOpacity
      onPress={() => data.action()}
      pointerEvents={'none'}
      style={[styles.mapContainer, ApplicationStyles.shadown]}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: parseFloat(coordinates.latitude),
          longitude: parseFloat(coordinates.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker.Animated
          coordinate={{
            latitude: parseFloat(coordinates.latitude),
            longitude: parseFloat(coordinates.longitude),
          }}
        />
      </MapView>
    </TouchableOpacity>
  );
};
