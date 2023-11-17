'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { deleteFlashcard } from '@/lib/actions/flashcard.action';
import { Delete, Edit, Settings } from 'lucide-react';

type Props = {
  id: string;
};

export function SettingsFlashcard({ id }: Props) {
  const removeFlashcard = async () => {
    await deleteFlashcard(id);
  };

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Settings className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent className="bg-white border w-auto p-2 flex-center shadow-inner-2 text-black">
        <div className="flex-start flex-col">
          <Button
            className="hover:border-b border-slate-500 flex gap-x-3"
            onClick={removeFlashcard}
          >
            <Delete /> <span>Deletar</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
