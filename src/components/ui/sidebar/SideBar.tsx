import React from 'react';
import { ListItem } from './ListItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Button } from '@Commons/Button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

type SideBarProps = {
  isClicked: boolean;
  onClick: () => void;
};

export const SideBar = ({ isClicked, onClick }: SideBarProps) => {
  const router = useRouter();

  const routingPage = () => {
    router.push({ pathname: '/' });
  };
  return (
    <>
      {isClicked ? (
        <aside className='not-sr-only absolute z-30 lg:static'>
          <div className='w-64 bg-slate-800 h-screen p-4 flex ease-out duration-200 flex-col relative'>
            <div className='flex justify-between lg:justify-start w-[200px] lg:w-full'>
              <Button
                className='text-slate-400 mb-10 flex items-start pl-3 not-sr-only lg:sr-only'
                type='button'
                onClick={onClick}
              >
                <ChevronLeftIcon className='icon-8' />
              </Button>
              <Button
                className='text-indigo-500 mb-10 flex items-start pl-3'
                type='button'
                onClick={routingPage}
              >
                <HomeIcon className='icon-8' />
              </Button>
            </div>
            <p className='pl-3 pb-3 text-slate-400 text-sm'>Pages</p>
            <div className='flex flex-col gap-y-4 items-center'>
              <ListItem isClicked />
            </div>
          </div>
        </aside>
      ) : (
        <aside className='sr-only lg:not-sr-only z-30'>
          <div className='md:w-0 lg:w-64 bg-slate-800 h-screen lg:p-4 flex ease-out duration-200 flex-col relative'>
            <Button
              className='flex text-indigo-500 mb-10 items-start pl-3'
              type='button'
              onClick={routingPage}
            >
              <HomeIcon className='icon-8' />
            </Button>
            <p className='pl-3 pb-3 text-slate-400 text-sm'>Pages</p>
            <div className='flex flex-col gap-y-4 items-center'>
              <ListItem isClicked />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
