import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="w-full h-screen flex-center flex-col text-black">
      <div className="flex-center flex-col py-10">
        <h3 className="title font-black">Ambicious</h3>
        <p>Criar uma conta para ter acesso a plataforma</p>
      </div>
      <SignUp />
    </main>
  );
}
