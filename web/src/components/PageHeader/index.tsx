import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, TopBarContainer, HeaderContent } from './styles';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, description, children }) => {
  return (
    <Container>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
