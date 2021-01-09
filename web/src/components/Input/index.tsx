import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
} 

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}/>
    </Container>
  );
}

export default Input;