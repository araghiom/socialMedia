import { Navbar, NavbarItem, NavbarContent, Input } from '@nextui-org/react';
import HeaderAuth from './header-auth';
import { SearchInput } from './ui/search-input';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <Navbar className="py-4  ">
        <NavbarContent justify="start">
          <NavbarItem>
            <h1 className="text-xl">Social media</h1>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <Suspense>
              <SearchInput />
            </Suspense>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </>
  );
}
