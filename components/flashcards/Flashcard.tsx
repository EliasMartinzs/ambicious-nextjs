import { Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { fetchFlashcards } from '@/lib/actions/flashcard.action';

type FlashcardProps = {
  title: string;
  description: string;
  color: string;
  category: string;
};

export default function Flashcard() {
  const [flashcard, setFlashcard] = useState<FlashcardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFlashcards();

      setFlashcard(data);
    };
    fetchData();
  }, []);

  return (
    <div className={'w-full h-auto flex'}>
      <span
        className={'w-2 h-full bg-primary-500 rounded-tr-3xl rounded-br-3xl'}
      />
      <div className={'w-full flex-start flex-col gap-y-3 py-7 px-5'}>
        <h3
          className={'max-sm:text-base text-lg font-medium w-full flex-between'}
        >
          <span>Algum Input Do Usuario </span>
          <Settings2 />
        </h3>
        <p className={'text-small'}>Alguma descricao</p>
        <p className={'text-small border-b'}>Categoria</p>
        <Button
          className={
            'border border-primary-500 rounded-full transition-colors hover:bg-primary-500 hover:text-white hover:shadow-xl'
          }
        >
          Revisao
        </Button>
      </div>
    </div>
  );
}
