import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 7.2rem;
  padding: 1.4rem 1.6rem;
  margin-top: .8rem;
  border-radius: .8rem;

  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);

  label {
    position: absolute;

    width: 100%;

    pointer-events: none;
    transition: all .4s ease; 
  }

  input {
    background: none;
    border: none;

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
    
    background: var(--color-secondary);
  }

  &:focus-within {
    label {
      font-size: 1.2rem; 

      transform: translateY(-1rem);
    }

    input {
      transform: translateY(1rem);
    }
  }
`;