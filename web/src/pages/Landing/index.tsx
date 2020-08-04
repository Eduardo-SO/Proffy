import React from 'react';

import { 
  PageLanding, 
  PageLandingContent, 
  LogoContainer, 
  HeroImage, 
  ButtonsContainer,
  StudyAnchor,
  GiveClassesAnchor,
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
          <StudyAnchor href="">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </StudyAnchor>

          <GiveClassesAnchor href="">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </GiveClassesAnchor>
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