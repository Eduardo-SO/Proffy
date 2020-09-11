import React from 'react';

import { Link } from 'react-router-dom';

import HeartIcon from '../../assets/images/icons/heart.svg';
import logo from '../../assets/images/logo.svg';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

import {
  Container,
  LogoSection,
  LogoContainer,
  FormSection,
  FormContainer,
  FormOptions,
  Footer,
  SignUpLink,
  TotalConnections,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoSection>
        <LogoContainer>
          <img src={logo} alt="Proffy" />

          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>
      </LogoSection>

      <FormSection>
        <span />

        <FormContainer>
          <h1>Fazer login</h1>

          <form action="">
            <Input type="email" name="email" label="E-mail" required />

            <Input type="password" name="password" label="Senha" required />

            <FormOptions>
              <Checkbox />

              <Link to="/forgot-password">Esqueci minha senha</Link>
            </FormOptions>

            <button type="submit">Entrar</button>
          </form>
        </FormContainer>

        <Footer>
          <SignUpLink>
            <p>Não tem conta?</p>

            <Link to="signup">Cadastre-se</Link>
          </SignUpLink>

          <TotalConnections>
            É de graça
            <img src={HeartIcon} alt="Coração roxo" />
          </TotalConnections>
        </Footer>
      </FormSection>
    </Container>
  );
};

export default SignIn;
