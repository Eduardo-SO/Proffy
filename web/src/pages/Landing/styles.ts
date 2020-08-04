import styled from 'styled-components';

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
`;

export const HeroImage = styled.img`
  width: 100%;
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

    transition: background-color .3s;

    font: 700 2rem Archivo;
    text-decoration: none;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: .6rem;
    }
  }
`;

export const StudyAnchor = styled.a`
  background-color: var(--color-primary-lighter);

  &:hover {
    background-color: var(--color-primary-light);
  }
  `;

export const GiveClassesAnchor = styled.a`
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
    margin-left: .8rem;
  }
`;
