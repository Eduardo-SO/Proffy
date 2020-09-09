import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
} 

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <input required id={name} {...rest}/>
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}

export default Input;