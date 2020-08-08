import React from 'react';

import PageHeader from '../../components/PageHeader';

import { 
  Container, 
  Title,
} from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />

      <Title>
        Favorites
      </Title>
    </Container>
  );
}

export default Favorites;
