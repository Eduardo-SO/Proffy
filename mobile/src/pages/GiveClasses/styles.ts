import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 40px;

  background-color: #8257e5;
`;

export const Content = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  max-width: 180px;

  color: #fff;

  font-family: 'Archivo_700Bold';
  font-size: 32px;
  line-height: 37px;
`;

export const Description = styled.Text`
  max-width: 240px;
  margin-top: 24px;

  color: #d4c2ff;

  font-family: 'Poppins_400Regular';
  font-size: 16px;
  line-height: 26px;
`;

export const OkButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 58px;
  margin: 40px 0;
  border-radius: 8px;

  background: #04d361;
`;

export const OkButtonText = styled.Text`
  color: #fff;

  font-family: 'Archivo_700Bold';
  font-size: 16px;
`;
