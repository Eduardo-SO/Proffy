import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageHeader
        title="Que incrivel que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
    </Container>
  );
}

export default TeacherForm;