import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
} 

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <Container className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option disabled hidden value="">Selecione uma opção</option>

        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </ select>
    </Container>
  );
}

export default Select;