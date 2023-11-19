'use client';
import { SignIn, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    isSignedIn ? router.replace('/home') : null;
  }, [router]);

  return (
    <>
      <main className="w-full h-screen bg-[url('/themes/login-blur.jpg')] saturate-150 overflow-hidden flex-center">
        <div className="w-[80%] h-[80%] bg-[url('/themes/login.jpg')]">
          <div className="w-96 h-full flex-center bg-[#19191A] shadow-inner-2">
            <SignIn />
          </div>
        </div>
      </main>
    </>
  );
}
