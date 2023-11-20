import AccountProfile from '@/components/forms/AccountProfile';
import { fetchUser } from '@/lib/actions/user.action';
import { auth, currentUser } from '@clerk/nextjs';

export default async function page() {
  const currentUserData = await currentUser();
  const { userId } = auth();
  const userDb = await fetchUser({ userId });

  const userDB = JSON.parse(JSON.stringify(userDb));

  return (
    <main className="w-full h-screen flex-center bg-[url('/themes/login.jpg')]">
      <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 bg-[#191a19] shadow-2xl">
        <h3 className="text-2xl font-black text-white pb-5">Perfil</h3>
        <AccountProfile
          bio=""
          id={currentUserData?.id}
          username={currentUserData?.username ?? ''}
          image={currentUserData?.imageUrl ?? ''}
          name={currentUserData?.firstName ?? ''}
          onboarded={userDb?.onboarded ?? false}
          userDb={userDB}
        />
      </div>
    </main>
  );
}
