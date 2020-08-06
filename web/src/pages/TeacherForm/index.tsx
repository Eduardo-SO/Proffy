import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import { 
  Container,
  Content,
 } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageHeader
        title="Que incrivel que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Content>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" type="text" />
          <Input name="avatar" label="Avatar" type="text" />
          <Input name="whatsapp" label="Whatsapp" type="text" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" type="text" />
          <Input name="cost" label="Custo da sua hora por aula" type="text" />
        </fieldset>
      </Content>
    </Container>
  );
}

export default TeacherForm;