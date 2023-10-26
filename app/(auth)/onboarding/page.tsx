import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

export default async function page() {
  const user = await currentUser();

  const userData = {
    id: user?.id,
    username: user?.username,
    name: user?.firstName,
    bio: '',
    image: user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h3 className="text-2xl font-black">Perfil</h3>
      <p className="mt-3 text-base-regular text-slate-300">
        Complete seu perfil para ter acesso a plataforma
      </p>
      <section className="bg-dark-2 p-10">
        {/* @ts-ignore */}
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}
