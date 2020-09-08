import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  height: 5.6rem;
  padding: 0 1.6rem;
  margin-top: .8rem;
  border-radius: .8rem;

  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);

  & + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    position: absolute;
    height: 100%;
    width: 100%;

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

    label {
      font-size: 30px;
    }
  }
`;