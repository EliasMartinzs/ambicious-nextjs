import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="w-full h-screen bg-[url('/bg-1.jpg')]">
      <header className="paddings w-full h-full flex-center flex-col gap-y-10 relative overflow-hidden">
        <div>
          <h3 className="text-4xl md:text-9xl italic text-white font-black drop-shadow-2xl">
            Ambicious
          </h3>
          <h5 className="title text-white">Acelere sua produtividade</h5>
        </div>

        <div className="flex gap-x-5 text-white">
          <Link href="/sign-in">
            <Button className="paragraph border bg-white text-black shadow-inner font-black hover:text-white transition-colors">
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="paragraph border bg-tranaparent text-white  shadow-inner font-black hover:text-black hover:bg-white transition-colors">
              Cadastra-se
            </Button>
          </Link>
        </div>

        <div className="text-white flex-center gap-x-3 absolute bottom-0 p-10">
          Criado com
          <Heart className="text-red-500 border-red-500 fill-red-500" /> por
          Elias Martins
        </div>
      </header>
    </main>
  );
}
