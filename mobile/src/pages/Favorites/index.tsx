import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { 
  Container,
  StyledTeacherList
} from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />

      <StyledTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </StyledTeacherList>
    </Container>
  );
}

export default Favorites;
