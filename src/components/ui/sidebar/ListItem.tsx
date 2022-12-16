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
    title: 'AboutUs',
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
            isClicked
              ? 'w-[200px] flex items-center justify-between'
              : 'lg:w-[200px] flex items-center justify-between'
          }`}
          key={item.title}
        >
          <li>
            <ul className='flex items-center gap-x-3'>
              <li
                className={`${
                  item.title === 'Dashboard'
                    ? 'flex text-indigo-500'
                    : 'flex text-slate-400'
                }`}
              >
                {item.icon}
              </li>
              <li className='text-slate-200 text-sm'>
                {item.arrowDirection === 'right' ? (
                  <Link href={item.href}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </li>
            </ul>
          </li>
          <li className='text-slate-400 flex items-center'>
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
