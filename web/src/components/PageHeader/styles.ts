import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-primary);
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  margin: 0 auto;
  padding: 1.6rem;

  color: var(--color-in-text-primary);

  > img {
    height: 1.6rem;
  }

  a {
    height: 3.2em;
    transition: opacity .2s;

    &:hover {
      opacity: .6;
    }
  }
`;

export const HeaderContent = styled.div`
  position: relative;

  width: 90%;
  margin: 3.2rem auto;

  strong {
    color: var(--color-title-in-primary);
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;

  }
`;
