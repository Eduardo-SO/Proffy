import React from 'react';

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

import logoImg from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';

import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images/icons/give-classes.svg';
import purpleHeartIcon from '../../images/icons/purple-heart.svg';

const Landing: React.FC = () => {
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
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;