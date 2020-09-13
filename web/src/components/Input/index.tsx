import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import seePassword from '../../assets/images/icons/see-password.svg';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  customClass?: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  customClass,
  type,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);

    if (isVisible) {
      setInputType('text');
      return;
    }

    setInputType('password');
  }, [isVisible]);

  return (
    <Container
      className={customClass}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <div className="input-block">
        <label htmlFor={name}>{label}</label>

        <input
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          id={name}
          ref={inputRef}
          type={inputType}
          {...rest}
        />
      </div>

      {type === 'password' && (
        <button type="button" onClick={toggleVisibility}>
          <img src={seePassword} alt="Ver senha" />
        </button>
      )}
    </Container>
  );
};

export default Input;
