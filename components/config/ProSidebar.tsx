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
import Image from 'next/image';
import { Button } from '../ui/button';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ProSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className="">
      <div
        className={cn(
          showSidebar ? 'absolute inset-0 w-full h-full bg-black/40 z-50' : null
        )}
      />
      <div
        className={cn(
          'top-0 right-0 flex gap-y-5 flex-col  max-md:w-1/2 p-5 md:p-10 w-72 shadow-2xl bg-background text-white fixed h-full ease-in-out duration-300 z-50',
          showSidebar ? 'translate-x-0' : 'translate-x-full'
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

        <div className="flex flex-col gap-y-5">
          <Link href="/" className="flex gap-x-2 items-center text-sm">
            <Image
              alt="planning"
              width={30}
              height={30}
              src="/sidebar/planning.png"
            />
            Planejamento
          </Link>
          <Link href="/" className="flex gap-x-2 items-center text-sm">
            <Image
              alt="planning"
              width={30}
              height={30}
              src="/sidebar/gym2.png"
            />
            Academia
          </Link>
        </div>

        <ThemeSwitch />
      </div>
      <main className="flex absolute inset-y-0 right-0 z-50 p-5">
        <Button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <X /> : <MenuIcon />}
        </Button>
      </main>
    </aside>
  );
}
