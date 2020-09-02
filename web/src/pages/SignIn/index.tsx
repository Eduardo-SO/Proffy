import React from 'react';
import { Link } from 'react-router-dom';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logo from '../../assets/images/logo.svg'

import { 
  Container,
  LogoSection,
  LogoContainer,
  FormSection,
  FormContainer,
  Footer,
  SignUpLink,
  TotalConnections 
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoSection>
        <LogoContainer>
          <img src={logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>
      </LogoSection>
      <FormSection>
        <span></span>
        <FormContainer>
          <h1>Fazer login</h1>

          <form action="">
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Senha"/>

            <div>
              <span>
                <input type="checkbox" id="rememberPassword" />
                <label htmlFor="rememberPassword">Lembrar-me</label>
              </span>

              <Link to="/">Esqueci minha senha</Link>
            </div>

            <button type="submit">Entrar</button>
          </form>
        </FormContainer>
        <Footer>
          <SignUpLink>
            <p>Não tem conta?</p>
            <Link to="/">Cadastre-se</Link>
          </SignUpLink>

          <TotalConnections>
            É de graça
            <img src={purpleHeartIcon} alt="Coração roxo"/>
          </TotalConnections>
        </Footer>
      </FormSection>
    </Container>
  );
}

export default SignIn;