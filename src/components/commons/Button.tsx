import React from 'react';
type ButtonProps = {
  children: React.ReactNode;
  className: string;
  type: 'button' | 'submit' | 'reset';
  value?: string;
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
};
export const Button = ({
  children,
  className,
  type,
  onClick,
  value,
  form,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      value={value}
      form={form}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
