import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { 
  PageLanding, 
  PageLandingContent, 
  LogoContainer, 
  HeroImage, 
  ButtonsContainer,
  StudyLink,
  GiveClassesLink,
  TotalConnections
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import HeartIcon from '../../assets/images/icons/heart.svg';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      
      setTotalConnections(total);
    })
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos"/>

        <ButtonsContainer>
          <StudyLink to="/study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </StudyLink>

          <GiveClassesLink to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </GiveClassesLink>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={HeartIcon} alt="Coração roxo"/>
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;