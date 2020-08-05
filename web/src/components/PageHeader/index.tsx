import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';
import backIcon from '../../images/icons/back.svg';

import { 
  Container,
  TopBarContainer,
  HeaderContent
} from './styles';

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
        <TopBarContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </TopBarContainer>

        <HeaderContent>
          <strong>{title}</strong>
          {children}
        </HeaderContent>
      </Container>
  );
}

export default PageHeader;