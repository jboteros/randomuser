import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';

import styles from './styles';
import {ApplicationStyles} from '../../Themes';
const mapStyle = require('../../Config/mapStyle.json');

const screen = Dimensions.get('window');
// const ASPECT_RATIO = (screen.width * 0.8) / screen.height;
// const LATITUDE_DELTA = 0.01;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default data => {
  const {coordinates} = data;

  return (
    <View
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
    </View>
  );
};
