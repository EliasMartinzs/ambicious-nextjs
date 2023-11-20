'use client';

import { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitcher';

import { SignOutButton, auth, useAuth, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navigation from '../Shared/Navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.action';
import { UserType } from '@/types';
import Image from 'next/image';

export default function ProSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [userData, setUserData] = useState<UserType | null>();
  const router = useRouter();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await fetchUser({ userId });

      setUserData(user);
    };

    fetchUserData();
  }, [userId]);

  const removeJWTFromLocalStorage = () => {
    localStorage.removeItem('clerk-db-jwt');

    router.push('/');
  };

  return (
    <aside className="overflow-y-auto h-auto">
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
        <div className="flex-center flex-col gap-y-2 text-foreground overflow-y-auto h-auto">
          <div className="w-20 h-20 relative rounded-full shadow-inner shadow-inner-2">
            <Image
              src={userData?.image ?? ''}
              alt="fsafas"
              fill
              className="rounded-full object-contain object-center shadow-inner shadow-inner-2"
            />
          </div>
          <h3>
            {userData?.name} {userData?.username}
          </h3>
          <SignOutButton signOutCallback={removeJWTFromLocalStorage}>
            <Button className="text-lg hover:underline underline-offset-4 hover:text-red-500">
              Sair
            </Button>
          </SignOutButton>
        </div>

        <ThemeSwitch />

        <Navigation />
      </div>
      <main className="flex absolute inset-y-0 right-0 z-50 p-5">
        <Button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <X /> : <MenuIcon />}
        </Button>
      </main>
    </aside>
  );
}
