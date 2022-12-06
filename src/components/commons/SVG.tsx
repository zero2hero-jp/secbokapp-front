import React from 'react';

type SVGProps =
  | {
      variant: 'solid';
      dWithRule: string /* filRuleがある方のpathのd */;
      d?: string /* filRuleがない方のpathのd */;
      className: string;
      name: string /* 他のアイコンと区別するための名前 */;
    }
  | {
      variant: 'outline';
      d: string;
      strokeWidth: string;
      stroke: string;
      className: string;
      name: string /* 他のアイコンと区別するための名前 */;
    };

export const SVG = (props: SVGProps) => {
  return (
    <>
      {props.variant === 'solid' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={props.className}
        >
          <path d={props.d} />
          <path fillRule='evenodd' d={props.dWithRule} clipRule='evenodd' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={props.strokeWidth}
          stroke={props.stroke}
          className={props.className}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d={props.d} />
        </svg>
      )}
    </>
  );
};
