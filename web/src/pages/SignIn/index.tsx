import React, { useState, useEffect } from 'react';

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
  SignInButton,
  SignUpLink,
  TotalConnections,
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (email && password) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);

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
            <Input
              type="email"
              name="email"
              customClass="first-input"
              label="E-mail"
              onChange={e => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              name="password"
              customClass="last-input"
              label="Senha"
              onChange={e => setPassword(e.target.value)}
              required
            />

            <FormOptions>
              <Checkbox />

              <Link to="/forgot-password">Esqueci minha senha</Link>
            </FormOptions>

            <SignInButton isFormFilled={isFormFilled} type="submit">
              Entrar
            </SignInButton>
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
