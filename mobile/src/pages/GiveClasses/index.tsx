import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
   Container,
   Content,
   Title,
   Description,
   OkButton,
   OkButtonText,
  } from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Ipsam magni corporis delectus quis consectetur officiis animi, maiores tempora laudantium ex!
        </Description>

      </Content>

        <OkButton onPress={handleGoBack}>
          <OkButtonText>Tudo bem</OkButtonText>
        </OkButton>
    </Container>
  )
};

export default GiveClasses;