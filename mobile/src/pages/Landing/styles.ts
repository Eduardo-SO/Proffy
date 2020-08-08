import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

interface ButtonProps {
  primary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 40px;

  background-color: #8257e5;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  margin-top: 80px;

  color: #fff;

  font-family: 'Poppins_400Regular';
  font-size: 20px;
  line-height: 30px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
`;

export const Button = styled(RectButton)`
  justify-content: space-between;

  height: 150px;
  width: 48%;

  padding: 24px;
  border-radius: 0;

  background: ${(props: ButtonProps) => props.primary ? '#9871f5' : '#04d361'};
`;

export const ButtonText = styled.Text`
  color: #fff;

  font-family: 'Archivo_700Bold';
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  max-width: 140px;
  margin-top: 40px;
  
  color: #d4c2ff;
  
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  line-height: 20px;
`;
