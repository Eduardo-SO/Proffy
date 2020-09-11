import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import {
  Container,
  LogoSection,
  LogoContainer,
  FormSection,
  FormContainer,
  Footer,
  SignInLink,
} from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <FormSection>
        <span />

        <FormContainer>
          <h1>Eita, esqueceu sua senha?</h1>
          <p>Não esquenta, vamos dar um jeito nisso.</p>

          <form action="">
            <input type="email" required placeholder="E-mail" />

            <button type="submit">Enviar</button>
          </form>
        </FormContainer>

        <Footer>
          <SignInLink>
            <p>Lembrei a senha!</p>

            <Link to="/">Fazer login</Link>
          </SignInLink>
        </Footer>
      </FormSection>

      <LogoSection>
        <LogoContainer>
          <img src={logo} alt="Proffy" />

          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>
      </LogoSection>
    </Container>
  );
};

export default ForgotPassword;
