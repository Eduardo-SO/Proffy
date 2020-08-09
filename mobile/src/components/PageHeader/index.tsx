import React, { useCallback, ReactNode } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { 
  Container,
  TopBar,
  Header,
  Title
} from './styles';

interface Props {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<Props> = ({ children, title, headerRight }) => {
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

        <Header>
          <Title>{title}</Title>

          {headerRight}
        </Header>

        {children}
      </Container>
  );
}

export default PageHeader;