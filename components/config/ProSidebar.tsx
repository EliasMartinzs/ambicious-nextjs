'use client';

import { useState } from 'react';
import ThemeSwitch from './ThemeSwitcher';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from '@clerk/nextjs';
import { Button } from '../ui/button';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navigation from '../Shared/Navigation';

export default function ProSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className="">
      <div
        className={cn(
          showSidebar
            ? 'absolute inset-0 w-full h-full bg-black/40 z-50'
            : null,
        )}
      />
      <div
        className={cn(
          'top-0 right-0 flex gap-y-5 flex-col max-md:w-1/2 p-5 md:p-10 w-72 shadow-2xl bg-background text-white fixed h-full ease-in-out duration-300 z-50',
          showSidebar ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex-center pb-5">
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>

        <ThemeSwitch />

        <Navigation />
      </div>
      <main className="flex absolute inset-y-0 right-0 z-50 p-5">
        <Button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <MenuIcon className="w-7 h-7 text-white" />
          )}
        </Button>
      </main>
    </aside>
  );
}
