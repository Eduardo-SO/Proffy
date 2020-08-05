import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;

  @media(min-width: 700px) {
    max-width: 100%;
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media(min-width: 700px) {
    position: absolute;
    bottom: -28px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }
`;

export const InputBlock = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;

    margin-top: .8rem;
    padding: 0 1.6rem;
    border-radius: .8rem;

    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);

    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: '';

    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    
    width: calc(100% - 3.2rem);
    height: 2px;
    
    background: var(--color-primary-light);
  }

  @media(min-width: 700px) {
    & + div {
      margin-top: 0rem;
    }
  }
`;

export const Content = styled.main`
  width: 90%;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    max-width: 740px;

    margin: 0 auto;
    padding: 3.2rem 0;
  }
`;
