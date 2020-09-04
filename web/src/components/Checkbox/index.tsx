import React from 'react';

import { Container } from './styles';

const Checkbox: React.FC = () => {
  return (
    <Container>
      <input type="checkbox" id="check" hidden/>
      <label htmlFor="check" id="checkmark"/>
      <label htmlFor="check" id="text">Lembrar-me</label>
    </Container>
  );
}

export default Checkbox;