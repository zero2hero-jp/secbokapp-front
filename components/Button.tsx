import React from 'react';
type ButtonProps = {
  children: React.ReactNode;
  className: string;
};
export const Button = ({ children, className }: ButtonProps) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
};
