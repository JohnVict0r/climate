import React, { FC, useEffect, useState } from 'react';
import { Region } from 'react-native-maps';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import ClimateData from '~/components/ClimateData';

import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const Main: FC<Props> = ({}) => {
  const [currentRegion, setCurrentRegion] = useState<Region>(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  function handleRegionChanged(region: Region) {
    setCurrentRegion(region);
  }

  return (
    <>
      <Container
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
      ></Container>
      <ClimateData
        latitude={currentRegion?.latitude}
        longitude={currentRegion?.longitude}
      />
    </>
  );
};

export default Main;
