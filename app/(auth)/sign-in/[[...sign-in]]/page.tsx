import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="w-full h-screen flex-center flex-col text-black">
      <div className="flex-center flex-col py-10">
        <h3 className="title font-black">Ambicious</h3>
        <p>Faca login para ter acesso a plataforma</p>
      </div>
      <SignIn />
    </main>
  );
}
