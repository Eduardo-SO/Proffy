import styled, { css } from 'styled-components';

import background from '../../assets/images/background.svg';

interface SignInButtonProps {
  isFormFilled: boolean;
}

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60vw;
  height: 100%;

  color: var(--color-text-in-primary);
  background: center no-repeat url(${background}), var(--color-primary);
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 33.5rem;

  img {
    height: 10rem;
  }

  h2 {
    margin-top: 0.8rem;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
  }

  @media (min-width: 1100px) {
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 40vw;
  height: 100%;

  background-color: var(--color-background);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 36rem;

  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 4rem;

    .first-input {
      border-bottom: 0;
      border-radius: 8px 8px 0 0;
    }

    .last-input {
      margin-top: 0;
      border-radius: 0 0 8px 8px;
    }
  }
`;

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.4rem;

  a {
    color: var(--color-text-complement);
    text-decoration: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 35.2rem;
`;

export const SignInButton = styled.button<SignInButtonProps>`
  height: 5.6rem;

  margin-top: 4rem;
  border: none;
  border-radius: 0.8rem;

  background: var(--color-disabled);
  color: var(--color-text-complement);
  font: 700 1.6rem Archivo;

  transition: all 0.3s;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-button-text);

    cursor: pointer;
  }

  ${props =>
    props.isFormFilled
      ? undefined
      : css`
          &:hover {
            background: var(--color-disabled);
            color: var(--color-text-complement);

            cursor: not-allowed;
          }
        `}
`;

export const SignUpLink = styled.a`
  display: flex;
  flex-direction: column;

  color: var(--color-text-complement);

  a {
    color: var(--color-secondary);
    font-weight: 700;
  }
`;

export const TotalConnections = styled.div`
  color: var(--color-text-complement);

  img {
    margin-left: 0.8rem;
  }
`;
