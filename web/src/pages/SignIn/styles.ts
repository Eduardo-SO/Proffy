import styled from 'styled-components';
import background from '../../assets/images/background.svg';

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

  width: 50vw;
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
  
  width: 50vw;
  height: 100%;

  background-color: var(--color-box-footer);
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

    input[type=text] {
      height: 7.2rem;
      width: 100%;

      padding: 2.4rem;
      border: 2px solid var(--color-line-in-white);

      &:first-child {
        border-radius: 8px 8px 0 0;
      }

      &:nth-child(2) {
        border-top: none;
        border-radius: 0 0 8px 8px;
      }
    }

    div {
      display: flex;
      justify-content: space-between;

      span {
        color: var(--color-text-complement);
      }

      a {
        color: var(--color-text-complement);
        text-decoration: none;
      }
    }

    button {
      height: 5.6rem;

      margin-top: 4rem;
      border: none;

      background-color: #DCDCE5;

    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 35.2rem;
`;

export const SignUpLink = styled.a`
  display: flex;
  flex-direction: column;
  color: var(--color-primary);

  a {
    color: var(--color-primary);
    font-weight: 700;
  }
`;

export const TotalConnections = styled.div`
  img {
    margin-left: .8rem;
  }
`;
