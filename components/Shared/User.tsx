'use client';
import { cn } from '@/lib/utils';
import { SignOutButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  user: any;
  classname: string;
};

export default function User({ classname, user }: Props) {
  const router = useRouter();

  console.log(user);

  return (
    <div className={cn(classname)}>
      {/* <Image
        src={userInfo.image}
        width={70}
        height={70}
        alt={userInfo.fullname}
        className="object-cover object-center saturate-200 rounded-full"
      /> */}
      <div className="flex flex-col items-start justify-center">
        <h3></h3>
        <SignOutButton signOutCallback={() => router.push('/')}>
          Sair
        </SignOutButton>
      </div>
    </div>
  );
}
