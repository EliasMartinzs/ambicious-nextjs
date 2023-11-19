import AccountProfile from '@/components/forms/AccountProfile';
import { fetchUser } from '@/lib/actions/user.action';
import { auth, currentUser } from '@clerk/nextjs';

export default async function page() {
  const currentUserData = await currentUser();
  const { userId } = auth();
  const userDb = await fetchUser({ userId });

  const userDB = JSON.parse(JSON.stringify(userDb));

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h3 className="text-2xl font-black">Perfil</h3>
      <section className="bg-dark-2 p-10">
        <AccountProfile
          bio=""
          id={currentUserData?.id}
          username={currentUserData?.username ?? ''}
          image={currentUserData?.imageUrl ?? ''}
          name={currentUserData?.firstName ?? ''}
          onboarded={userDb?.onboarded ?? false}
          userDb={userDB}
        />
      </section>
    </main>
  );
}
