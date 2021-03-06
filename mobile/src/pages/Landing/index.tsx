import React, { useCallback, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
   Container,
   Banner,
   Title,
   TitleBold,
   ButtonsContainer,
   Button,
   ButtonText,
   TotalConnections
  } from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  
  const { navigate } = useNavigation();
  
  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, []);
 
  const handleNavigateToStudyPages = useCallback(() => {
    navigate('Study');
  }, []);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total)
    });
  }, []);

  return (
    <Container>
      <Banner source={landingImage} resizeMode="contain" />
      <Title>
        Seja bem-vindo! {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button primary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  )
};

export default Landing;