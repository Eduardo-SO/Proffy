import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-primary);

  @media(min-width: 700px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  margin: 0 auto;
  padding: 1.6rem;

  color: var(--color-in-text-primary);

  > img {
    height: 1.6rem;
  }

  a {
    height: 3.2em;
    transition: opacity .2s;

    &:hover {
      opacity: .6;
    }
  }

  @media(min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  position: relative;

  width: 90%;
  margin: 3.2rem auto;

  strong {
    color: var(--color-title-in-primary);
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
  }

  @media(min-width: 700px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    max-width: 740px;

    margin: 0 auto;
    padding-bottom: 48px;

    strong {
      max-width: 450px;
    }
  }
`;
