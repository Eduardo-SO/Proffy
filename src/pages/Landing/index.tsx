import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import landingImage from '../../assets/images/landing.png';

const Landing: React.FC = () => {
  return (
    <Container>
      <Image source={landingImage} />
      <Title>Hello Landing!</Title>
    </Container>
  )
};

export default Landing;