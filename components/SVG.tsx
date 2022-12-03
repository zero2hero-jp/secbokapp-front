import React from 'react';
type SVGProps = {
  d: string;
  strokeWidth: string;
  stroke: string;
  className: string;
};

export const SVG = ({ d, strokeWidth, stroke, className }: SVGProps) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width={strokeWidth}
        stroke={stroke}
        className={className}
      >
        <path stroke-linecap='round' stroke-linejoin='round' d={d} />
      </svg>
    </>
  );
};
