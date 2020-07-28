import styled, { css } from 'styled-components/native';
import { primaryColor } from '~/styles/colors';
import { opacify } from 'polished';

const shadow = css`
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;
`;

export const Container = styled.View`
  flex-direction: column;
  position: absolute;

  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
`;

export const LoadButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 50px;
  border-radius: 25px;
  background-color: ${primaryColor.active};

  ${shadow}
`;

export const TextButton = styled.Text`
  color: ${primaryColor.text};
  font-size: 16px;
  text-align: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;

  color: ${primaryColor.text};
  background-color: ${opacify(-0.2, primaryColor.bg)};
  font-size: 16px;

  ${shadow}
`;

export const Card = styled.View`
  width: 55%;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 16px;
  z-index: 5;
  ${shadow}
`;

export const CardRow = styled.View`
  flex-direction: row;
`;

export const CardProperty = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const CardValue = styled.Text`
  flex-direction: row;
  margin-top: 8px;
  font-size: 14px;
  margin-bottom: 15px;
  color: #000;
  font-weight: 700;
`;

export const WeatherIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
