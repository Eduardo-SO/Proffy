import React from 'react';

import PageHeader from '../../components/PageHeader';

import { 
  Container, 
  Title,
} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

      <Title>
        Teacher list
      </Title>
    </Container>
  );
}

export default TeacherList;
