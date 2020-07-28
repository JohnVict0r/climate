import React, { FC, useEffect, useState } from 'react';

import api from '~/services/api';

import {
  Container,
  LoadButton,
  TextButton,
  Card,
  CardRow,
  CardProperty,
  CardValue,
  WeatherIcon,
} from './styles';

interface Props {
  latitude: number;
  longitude: number;
}

const ClimateData: FC<Props> = ({ latitude, longitude }) => {
  const [climate, setClimate] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadClimate() {
    setLoading(true);
    const { data } = await api.get(`/weather?lat=${latitude}&lon=${longitude}`);
    setClimate(data);
    setLoading(false);
  }
  function handlePress() {
    loadClimate();
  }

  useEffect(() => {
    loadClimate();
  }, [latitude, longitude]);

  function KelvinToCelsius(num: number) {
    return (num - 273).toFixed(2);
  }

  return (
    <Container>
      <LoadButton onPress={handlePress}>
        <TextButton> Atualizar Dados</TextButton>
      </LoadButton>
      {loading ? (
        <CardProperty>Carregando...</CardProperty>
      ) : (
        <Card>
          <CardProperty>Longitude</CardProperty>
          <CardValue>{longitude}</CardValue>
          <CardProperty>Latitude</CardProperty>
          <CardValue>{latitude}</CardValue>
          <CardProperty>Cidade</CardProperty>
          <CardValue>{climate?.name}</CardValue>
          <CardProperty>Clima</CardProperty>
          <CardRow>
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${climate?.weather[0].icon}@2x.png`,
              }}
            ></WeatherIcon>
            <CardValue>{climate?.weather[0].description}</CardValue>
          </CardRow>

          <CardProperty>Velocidade do Vento</CardProperty>
          <CardValue>{climate?.wind.speed} m/s</CardValue>
          <CardProperty>Temperatura</CardProperty>
          <CardValue>{KelvinToCelsius(climate?.main.temp)} ºc</CardValue>
          <CardProperty>Temperatura Max</CardProperty>
          <CardValue>{KelvinToCelsius(climate?.main.temp_max)} ºc</CardValue>
          <CardProperty>Temperatura Min</CardProperty>
          <CardValue>{KelvinToCelsius(climate?.main.temp_min)} ºc</CardValue>
          <CardProperty>Umidade</CardProperty>
          <CardValue>{climate?.main.humidity} %</CardValue>
        </Card>
      )}
    </Container>
  );
};

export default ClimateData;
