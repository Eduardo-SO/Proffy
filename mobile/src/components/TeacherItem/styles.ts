import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteProps {
  favorited?: boolean;
}

export const Container = styled.View`
  overflow: hidden;

  margin-bottom: 16px;
  border: 1px solid #e6e6f0;
  border-radius: 8px;

  background-color: #fff;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;

  border-radius: 32px;
  
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264d;
  
  font-family: 'Archivo_700Bold';
  font-size: 20px;
`;

export const Subject = styled.Text`
  margin-top: 4px;
  color: #32264d;
  
  font-family: 'Poppins_400Regular';
  font-size: 12px;
`;

export const Bio = styled.Text`
  margin: 0 24px 24px;
  color: #6a6180;
  
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
`;


 export const Footer = styled.View`
  align-items: center;
  margin-top: 24px;
  padding: 24px;
  background-color: #fafafc;
 `;

 export const Price = styled.Text`
  color: #6a6186;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
 `;

 export const PriceValue = styled.Text`
  color: #6a6186;

  font-family: 'Archivo_700Bold';
  font-size: 16px;
 `;

 export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
 `;

 export const FavoriteButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;

  margin-right: 8px;
  border-radius: 8px;

  background-color: ${(props: FavoriteProps) => props.favorited ? '#e33d3d' : '#8257e5'}
 `;

 export const ContactButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;

  margin-right: 8px;
  border-radius: 8px;

  background-color: #04d361;
 `;

 export const ContactButtonText = styled.Text`
  color: #fff;
  
  margin-left: 16px;

  font-family: 'Archivo_700Bold';
  font-size: 16px;
 `;

