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
`;

export const TeacherItem = styled.article`
  overflow: hidden;

  margin-top: 2.4rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: .8rem;

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
      margin-top: .4rem;
      font-size: 1.6rem;
    }
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

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 20rem;
    height: 5.6rem;
    border: 0;
    border-radius: 0.8rem;

    background: var(--color-secundary);
    color: var(--color-button-text);

    font: 700 1.4rem Archivo;
    cursor: pointer;

    transition: .2s;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;
