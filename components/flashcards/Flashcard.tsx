import { Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlashcardType } from '@/types';
import { cn } from '@/lib/utils';

export default function Flashcard({ flashcard }: { flashcard: FlashcardType }) {
  const { category, color, description, title } = flashcard;

  console.log(color);

  return (
    <div className={'w-full h-auto flex border rounded-2xl shadow-inner'}>
      <span
        className={cn(
          `w-2 h-full rounded-tr-3xl rounded-br-3xl`,
          `bg-[${color}]`,
        )}
      />
      <div className={'w-full flex-start flex-col gap-y-3 py-7 px-5'}>
        <h3
          className={'max-sm:text-base text-lg font-medium w-full flex-between'}
        >
          <span>{title}</span>
          <Settings2 />
        </h3>
        <p className={'text-small'}>{description}</p>
        <p className={'text-small border-b'}>{category}</p>
        <Button
          className={`border border-${color}-500 font-semibold hover:text-background hover:font-bold hover:shadow-lg transition-colors rounded-full`}
        >
          Revisao
        </Button>
      </div>
    </div>
  );
}
