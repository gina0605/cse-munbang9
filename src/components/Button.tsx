import React, { ButtonHTMLAttributes, FC } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  text,
  to,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={`button ${className}`}
      onClick={to ? () => navigate(to) : onClick}
      {...props}
    >
      {text ?? children}
    </button>
  );
};
