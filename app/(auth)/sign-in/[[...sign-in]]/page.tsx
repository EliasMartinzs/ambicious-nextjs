import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="w-full h-screen flex-center bg-[#19191a]">
      <SignIn />
    </main>
  );
}
