import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    display: grid;

    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    max-width: 1100px;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;
  text-align: center;

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
    grid-area: logo;
    align-self: center;
    margin: 0;

    text-align: initial;

    h2 {
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;

    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    color: var(--color-button-text);

    transition: background-color 0.3s;

    font: 700 2rem Archivo;
    text-decoration: none;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 0.6rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const StudyLink = styled(Link)`
  background-color: var(--color-primary-lighter);

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

export const GiveClassesLink = styled(Link)`
  background-color: var(--color-secondary);

  &:hover {
    background-color: var(--color-secondary-dark);
  }
`;

export const TotalConnections = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
