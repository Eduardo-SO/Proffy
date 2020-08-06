import styled from 'styled-components';

export const Container = styled.div`
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