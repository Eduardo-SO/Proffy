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
