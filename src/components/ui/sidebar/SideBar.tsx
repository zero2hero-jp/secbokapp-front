import React from 'react';
import { ListItem } from './ListItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Button } from '@Commons/Button';
export const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-contents'>
        <Button className='sidebar-home-icon-wrapper' type='button'>
          <HomeIcon className='icon-8' />
        </Button>
        <p className='sidebar-list-main-title'>Pages</p>
        <div className='sidebar-list-item-wrapper'>
          <ListItem />
        </div>
      </div>
    </aside>
  );
};
