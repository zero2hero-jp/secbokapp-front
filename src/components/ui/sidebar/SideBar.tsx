import React from 'react';
import { ListItem } from './ListItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Button } from '@Commons/Button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

type SideBarProps = {
  isClicked: boolean;
  onClick: () => void;
};

export const SideBar = ({ isClicked, onClick }: SideBarProps) => {
  return (
    <>
      {isClicked ? (
        <aside className='sidebar-clicked'>
          <div className='sidebar-contents-clicked'>
            <div className='sidebar-hamburger-menu-close-group'>
              <Button
                className='sidebar-close-icon-wrapper-clicked'
                type='button'
                onClick={onClick}
              >
                <ChevronLeftIcon className='icon-8' />
              </Button>
              <Button
                className='sidebar-home-icon-wrapper-clicked'
                type='button'
                /* onClick={homeへ遷移} */
              >
                <HomeIcon className='icon-8' />
              </Button>
            </div>
            <p className='sidebar-list-main-title'>Pages</p>
            <div className='sidebar-list-item-wrapper-clicked'>
              <ListItem isClicked />
            </div>
          </div>
        </aside>
      ) : (
        <aside className='sidebar'>
          <div className='sidebar-contents'>
            <Button className='sidebar-home-icon-wrapper' type='button'>
              <HomeIcon className='icon-8' />
            </Button>
            <p className='sidebar-list-main-title'>Pages</p>
            <div className='sidebar-list-item-wrapper'>
              <ListItem isClicked />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
