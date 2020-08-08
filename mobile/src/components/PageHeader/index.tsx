import React from 'react';
import { Image } from 'react-native';
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

const PageHeader: React.FC<Props> = ({ title, description, children }) => {
  return (
    <Container>
        <TopBar>
          <BorderlessButton>
            <Image source={backIcon} resizeMode="contain"/>
          </BorderlessButton>

          <Image source={logoImg} resizeMode="contain"/>
        </TopBar>

        <Title>{title}</Title>
      </Container>
  );
}

export default PageHeader;