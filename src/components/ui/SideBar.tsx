import { SVG } from '@Commons/SVG';
import React from 'react';
import { ListItem } from './ListItem';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { InboxArrowDownIcon } from '@heroicons/react/20/solid';
export const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-list-item-wrapper'>
        <ListItem />
        {/* <ul className='sidebar-list-item'>
          <li>
            <ul className='sidebar-list-item-title'>
              <li className='sidebar-main-icon-wrapper'>
                <SVG
                  variant='solid'
                  name='arrow'
                  dWithRule='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                  className='icon-6'
                />
              </li>
              <li className='sidebar-list-item-text'>Dashboard</li>
            </ul>
          </li>
          <li className='sidebar-icon-open-close'>
            <SVG
              variant='outline'
              name='chevron-down'
              d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
              className='icon-3'
              strokeWidth='2'
              stroke='currentColor'
            />
          </li>
         
        </ul> */}
      </div>
    </aside>
  );
};
