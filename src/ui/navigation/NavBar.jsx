'use client';
import {
    HomeIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUiLink,
  LinkProps,
  Button,
  Input,
} from '@nextui-org/react';
import SpotifyIcon from '../SpotifyIcon';
import Search from '../Search';
// import { SearchIcon } from '../Search';

const Link = (props) => <NextUiLink {...props} onClick={(e) => e.preventDefault()} />;

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll className='bg-black' justify='center'>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <SpotifyIcon />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='center'>
        <Search />
        {/* <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<MagnifyingGlassIcon/>}
          type='search'
        /> */}
      </NavbarContent>
      <NavbarContent className=' sm:flex gap-4' justify='end'>
        <NavbarItem className='hidden md:flex'>
          <Button as={Link} href='#' variant='flat'>
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
