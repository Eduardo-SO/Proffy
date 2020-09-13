import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 7.2rem;
  padding: 1.4rem 1.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;

  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);

  .input-block {
    flex: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: all 0.4s ease;

    label {
      position: absolute;
      width: 100%;

      transition: all 0.4s ease;
    }

    input {
      border: none;
      background: none;

      font: 1.6rem Archivo;
    }
  }

  button {
    border: none;
    background: none;

    cursor: pointer;
  }

  &:focus-within::after {
    content: '';

    position: absolute;
    left: 0;
    top: 1.6rem;
    bottom: 1.6rem;

    width: 2px;
    height: calc(100% - 3.2rem);

    background: var(--color-secondary);
  }

  &:focus-within {
    label {
      font-size: 1.2rem;
      transform: translateY(-1rem);
    }

    input {
      opacity: 1;
      transform: translateY(1rem);
    }
  }

  ${props =>
    props.isFilled &&
    css`
      label {
        font-size: 1.2rem;
        transform: translateY(-1rem);
      }

      input {
        opacity: 1;
        transform: translateY(1rem);
      }
    `}
`;
