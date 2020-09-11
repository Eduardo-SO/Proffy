import styled from 'styled-components';

export const Container = styled.article`
  overflow: hidden;

  margin-top: 2.4rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;

  background: var(--color-box-base);

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
`;

export const ItemHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 3.2rem 2rem;

  img {
    width: 8rem;
    height: 8rem;

    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      display: block;
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
    }

    span {
      display: block;
      margin-top: 0.4rem;
      font-size: 1.6rem;
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const ItemFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.2rem;
  padding: 3.2rem 2rem;
  border-top: 1px solid var(--color-line-in-white);

  background: var(--color-box-footer);

  p {
    strong {
      display: block;

      color: var(--color-primary);
      font-size: 1.6rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 20rem;
    height: 5.6rem;
    border: 0;
    border-radius: 0.8rem;

    background: var(--color-secondary);
    color: var(--color-button-text);

    text-decoration: none;
    font: 700 1.4rem Archivo;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: var(--color-secondary-dark);
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    p {
      strong {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    button {
      justify-content: center;

      width: 24.5rem;
      font-size: 1.6rem;

      img {
        margin-right: 1.6rem;
      }
    }
  }
`;
