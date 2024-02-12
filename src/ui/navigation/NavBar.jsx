'use client';
import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link as NextUiLink
} from '@nextui-org/react';
import React from 'react';
import Search from '../Searchbar';

const Link = (props) => <NextUiLink {...props} onClick={(e) => e.preventDefault()} />;

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll className='max-w-[100%] bg-[var(--spotify-black)]' >
      <NavbarContent justify='start' className='hidden sm:flex items-center space-x-4 max-w-[100%] justify-center'>
        <NavbarItem>
          <Link href='#' className='flex rounded-full bg-neutral-800 p-1 m-1'>
            <ChevronLeftIcon className='w-6 h-6'/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' className='flex rounded-full bg-neutral-800 p-1 m-1'>
            <ChevronRightIcon className='w-6 h-6'/>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='center'>
        <Search />
      </NavbarContent>
      
      <NavbarContent className='sm:flex gap-4' justify='end'>
        <NavbarItem className='hidden md:flex'>
          <Button as={NextUiLink} href='http://localhost:3000/login' className='bg-neutral-800/80'>
            <BellIcon className='w-6 h-6 text-slate-500 hover:text-white'/>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NextUiLink className='bg-neutral-800/80' href='http://localhost:3000/api/auth/signin' variant='flat'>
            <UserCircleIcon className='w-6 h-6 text-slate-500 hover:text-white'/>
          </NextUiLink>
        </NavbarItem>      
      </NavbarContent>
    </Navbar>
  );
}
