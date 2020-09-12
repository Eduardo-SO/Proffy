import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 7.2rem;
  padding: 1.4rem 1.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;

  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);

  label {
    position: absolute;

    width: 100%;

    pointer-events: none;
    transition: all 0.4s ease;
  }

  input {
    background: none;
    border: none;

    font: 1.6rem Archivo;
    transition: all 0.4s ease;
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

  ${props =>
    props.isFilled &&
    css`
      label {
        opacity: 0;
      }

      &:focus-within {
        input {
          transform: translateY(0);
        }
      }
    `}
`;
