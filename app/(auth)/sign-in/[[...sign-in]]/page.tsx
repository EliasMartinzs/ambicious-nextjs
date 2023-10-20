import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="w-full grid place-items-center h-screen relative">
      <h2 className="text-6xl font-black flex items-center justify-center z-50 text-slate-600 bg-white/20 rounded-lg p-2">
        Ambicious
      </h2>
      <SignIn />;
    </section>
  );
}
