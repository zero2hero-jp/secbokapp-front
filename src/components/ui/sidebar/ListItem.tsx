import { SVG } from '@Commons/SVG';
import { InboxArrowDownIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

type SidebarIcons = {
  title: string;
  icon: JSX.Element;
}[];

const size = 'icon-7';
const sidebarIcons: SidebarIcons = [
  {
    icon: <UserCircleIcon className={size} />,
    title: 'Dashboard',
  },
  {
    icon: <InboxArrowDownIcon className={size} />,
    title: 'Inbox',
  },
];
type ListITemProps = {
  isClicked: boolean;
};
export const ListItem = ({ isClicked }: ListITemProps) => {
  return (
    <>
      {sidebarIcons.map((item) => (
        <ul
          className={`${
            isClicked ? 'sidebar-list-item-clicked' : 'sidebar-list-item'
          }`}
          key={item.title}
        >
          <li>
            <ul className='sidebar-list-item-title'>
              <li
                className={`${
                  item.title === 'Dashboard'
                    ? 'sidebar-main-icon-wrapper'
                    : 'sidebar-icon-wrapper'
                }`}
              >
                {item.icon}
              </li>
              <li className='sidebar-list-item-text'>{item.title}</li>
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
          {/* TODO:ここにドロップダウンメニューがはいります */}
        </ul>
      ))}
    </>
  );
};
