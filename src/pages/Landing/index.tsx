import React from 'react';
import { Image } from 'react-native';

import {
   Container,
   Banner,
   Title,
   TitleBold,
  } from './styles';

import landingImage from '../../assets/images/landing.png';

const Landing: React.FC = () => {
  return (
    <Container>
      <Banner source={landingImage} />
      <Title>
        Seja bem-vindo! {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
    </Container>
  )
};

export default Landing;