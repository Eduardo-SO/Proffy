import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg'

import { 
  Container,
  LogoSection,
  LogoContainer,
  FormSection,
  FormContainer,
  Footer,
  SignInLink,
} from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <FormSection>
        <span></span>
        <FormContainer>
          <h1>Cadastro</h1>

          <p>Preencha os dados abaixo para começar</p>

          <form action="">
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Sobrenome"/>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha"/>

            <button type="submit">Concluir cadastro</button>
          </form>
        </FormContainer>
        <Footer>
          <SignInLink>
            <p>Já é cadastrado?</p>
            <Link to="/">Fazer login</Link>
          </SignInLink>
        </Footer>
      </FormSection>
      <LogoSection>
        <LogoContainer>
          <img src={logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>
      </LogoSection>
    </Container>
  );
}

export default SignUp;