import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: var(--color-text-complement);

  label {
    cursor: pointer;
  }

  #checkmark {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;
    border-radius: 8px;

    background-color: var(--color-box-base);

    transition: background-color .6s;

    &::after {
      content: '';

      width: .4rem;
      height: .7rem;

      border-right: 3px solid var(--color-box-base);
      border-bottom: 3px solid var(--color-box-base);
      opacity: 0;

      transform: rotateZ(40deg) scale(10);

      transition: all .4s;
    }
  };

  #check:checked ~ #checkmark {
    background-color: var(--color-secondary);

    &::after {
      transform: rotateZ(40deg) scale(1);
      opacity: 1;
    }
  };
`;
