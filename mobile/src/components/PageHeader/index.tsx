import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { 
  Container,
  TopBar,
  Title
} from './styles';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, []);

  return (
    <Container>
        <TopBar>
          <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} resizeMode="contain"/>
          </BorderlessButton>

          <Image source={logoImg} resizeMode="contain"/>
        </TopBar>

        <Title>{title}</Title>
      </Container>
  );
}

export default PageHeader;