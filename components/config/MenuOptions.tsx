import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MoreVertical } from 'lucide-react';
import ThemeSwitch from './ThemeSwitcher';

import { SignOutButton, UserButton, auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import Image from 'next/image';

export default async function MenuOptions() {
  const { userId } = auth();
  const user = await fetchUser({ userId });

  return (
    <Sheet>
      <SheetTrigger>
        <MoreVertical className="h-8 w-8 text-foreground bg-[#191a19] rounded-full p-1 shadow-inner" />
      </SheetTrigger>
      <SheetContent className="bg-[#191a19] border-l border-primary-500">
        <SheetHeader>
          <SheetTitle className="text-center text-3xl border-b border-primary-500/40 pb-4 mb-4">
            Ambicious
          </SheetTitle>
          <SheetDescription className="w-full gap-y-5 flex-start flex-col">
            <div className="w-full flex-start gap-x-4">
              <UserButton afterSignOutUrl="/" userProfileMode="navigation" />
              <div className="flex flex-col items-start justify-center">
                <h3 className="capitalize font-bold text-lg my-1">
                  {user?.username}
                </h3>
                <SignOutButton>Sair</SignOutButton>
              </div>
            </div>
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
