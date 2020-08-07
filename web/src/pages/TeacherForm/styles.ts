import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .header-content {
    margin-bottom: 6.4rem;
  }
`;

export const Content = styled.main`
  overflow: hidden;

  width: 100%;
  max-width: 74rem;

  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  border-radius: 0.8rem;

  background: var(--color-box-base);

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    legend {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;

      border-bottom: 1px solidvar(--color-line-in-white);

      color: var(--color-text-title);

      font: 700 2.4rem Archivo;
    }

    .input-block + .textarea-block,
    .select-block + .input-block {
      margin-top: 2.4rem;
    }
  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  @media (min-width: 700px) {
    max-width: 740px;

    margin: 0 auto;
    padding: 3.2rem 0;
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  margin-top: 6.4rem;
  border-top: 1px solid var(--color-line-in-white);
  background: var(--color-box-footer);

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-text-complement);

    font-size: 1.4rem;
    line-height: 2.4rem;

    img {
      margin-right: 2rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5.6rem;

    margin-top: 3.2rem;
    border: 0;
    border-radius: 0.8rem;

    background: var(--color-secondary);
    color: var(--color-button-text);

    text-decoration: none;
    font: 700 1.6rem Archivo;

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background: var(--color-secondary-dark);
    }
  }
  
`
