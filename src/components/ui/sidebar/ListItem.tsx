import { SVG } from '@Commons/SVG';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { InboxArrowDownIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

const arrowDirection = {
  down: 'down',
  right: 'right',
} as const;

type SidebarIcons = {
  title: string;
  icon: JSX.Element;
  arrowDirection: keyof typeof arrowDirection;
  href: string;
}[];

const size = 'icon-7';
const sidebarIcons: SidebarIcons = [
  {
    icon: <UserCircleIcon className={size} />,
    title: 'Dashboard',
    arrowDirection: 'down',
    href: '',
  },
  {
    icon: <InboxArrowDownIcon className={size} />,
    title: 'Inbox',
    arrowDirection: 'down',
    href: '',
  },
  {
    icon: <InboxArrowDownIcon className={size} />,
    title: 'About',
    arrowDirection: 'right',
    href: '/about',
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
              <li className='sidebar-list-item-text'>
                {item.arrowDirection === 'right' ? (
                  <Link href={item.href}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </li>
            </ul>
          </li>
          <li className='sidebar-icon-open-close'>
            {item.arrowDirection === 'down' ? (
              <ChevronDownIcon className='icon-3 font-bold' />
            ) : (
              <ChevronRightIcon className='icon-3 font-bold' />
            )}
          </li>
          {/* TODO:ここにアコーディオンメニューがはいります */}
        </ul>
      ))}
    </>
  );
};
