'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { deleteFlashcard } from '@/lib/actions/flashcard.action';
import { Delete, Edit, Settings } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import Spinner from '../config/Spinner';
import { useDispatch, useSelector } from '@/redux/store';
import { setLoading } from '@/redux/slices/loading/loading.slice';
import { selectorLoading } from '@/redux/slices/selector';

type Props = {
  id: string;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export function SettingsFlashcard({ id, isEditing, setIsEditing }: Props) {
  const dispatch = useDispatch();
  const removeFlashcard = async () => {
    dispatch(setLoading(true));
    await deleteFlashcard(id);
    dispatch(setLoading(false));
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
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit /> <span>Editar</span>
          </Button>
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
