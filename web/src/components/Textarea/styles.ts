import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    resize: vertical;

    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;

    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);

    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: '';
    bottom: 0.7rem;

    position: absolute;
    left: 1.6rem;
    right: 1.6rem;

    width: calc(100% - 3.2rem);
    height: 2px;

    background: var(--color-primary-light);
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 0rem;
    }
  }
`;
