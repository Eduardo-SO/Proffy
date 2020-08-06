import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../images/icons/warning.svg';

import { 
  Container,
  Content,
  Footer
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

        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante!"/>
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </Footer>
      </Content>
    </Container>
  );
}

export default TeacherForm;