import { SVG } from '@Commons/SVG';
import React from 'react';

export const SideBar = () => {
  return (
    <aside className='md:w-0 lg:w-20 xl:w-64 bg-gray-500 h-screen md:p-4 '>
      <ul className='flex flex-col'>
        <li className='sr-only md:not-sr-only'>
          <SVG
            variant='solid'
            name='users'
            dWithRule='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z'
            className='icon-5'
          />
        </li>
      </ul>
    </aside>
  );
};
