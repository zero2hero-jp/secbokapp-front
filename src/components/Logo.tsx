import React from 'react';
import { Button } from '@Commons/Button';
import { SVG } from '@Commons/SVG';

export const Logo = () => {
  return (
    <>
      <div>
        <Button className='header-button'>
          <SVG
            d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            strokeWidth='2'
            stroke='currentColor'
            className='w-4 h-4'
          />
        </Button>
      </div>
      <h1>application name</h1>
    </>
  );
};
