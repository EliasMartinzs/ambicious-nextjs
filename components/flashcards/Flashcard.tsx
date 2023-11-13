import * as React from 'react';
import { Dot, Settings, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlashcardType } from '@/types';
import { cn } from '@/lib/utils';

export default function Flashcard({
  flashcard,
  className,
}: {
  flashcard: FlashcardType;
  className?: string;
}) {
  const { category, color, description, title } = flashcard;

  return (
    <div
      className={cn(
        `w-full h-auto flex rounded-tr-3xl rounded-br-3xl shadow-inner-2 border-t text-black`,
        className,
      )}
    >
      <span className={cn(`w-2 h-full rounded-tl-full`, `bg-[${color}]`)} />
      <div className={'w-full flex-start flex-col gap-y-3 py-2 px-5'}>
        <h3
          className={
            'max-sm:text-base text-lg font-bold w-full flex-between capitalize'
          }
        >
          <span>{title}</span>
          <Settings className="w-4 h-4" />
        </h3>
        <p className={'text-small font-extralight'}>{description}</p>
        <p
          className={`text-small font-bold text-[${color}] p-2 border-b border-slate-500`}
        >
          {category}
        </p>
        <Button
          className={`border rounded-full border-slate-500/40 hover:border-black font-black transition-colors`}
        >
          Revisao
        </Button>
      </div>
    </div>
  );
}
