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

// import { SignOutButton, auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import Image from 'next/image';

export default async function MenuOptions() {
  // const { userId } = auth();
  // const user = await fetchUser({ userId });

  return (
    <Sheet>
      <SheetTrigger className="">
        <MoreVertical className="h-8 w-8 text-foreground bg-[#191a19] rounded-full p-1 shadow-inner" />
      </SheetTrigger>
      <SheetContent className="bg-[#191a19] border-l border-primary-500">
        <SheetHeader>
          <SheetTitle className="text-center text-3xl border-b border-primary-500/40 pb-2">
            Ambicious
          </SheetTitle>
          <SheetDescription className="w-full gap-y-5 flex-start flex-col">
            <div className="w-full flex-start gap-x-4">
              {/* <Image
                src={user?.image || ''}
                width={70}
                height={70}
                alt={user?.name || ''}
                className="object-cover object-center saturate-200 rounded-full"
              /> */}
              <div className="flex flex-col items-start justify-center">
                {/* <h3 className="capitalize">{user?.username}</h3> */}
                {/* <SignOutButton>Sair</SignOutButton> */}
              </div>
            </div>
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
