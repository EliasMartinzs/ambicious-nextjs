import React, { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FlashcardType } from '@/types';
import { cn } from '@/lib/utils';
import { SettingsFlashcard } from './SettingsFlashcard';
import { Input } from '../ui/input';
import { updateFlashcardEdited } from '@/lib/actions/flashcard.action';

export default function Flashcard({
  flashcard,
  className,
}: {
  flashcard: FlashcardType;
  className?: string;
}) {
  const { category, color, description, title, _id } = flashcard;

  const [isEditing, setIsEditing] = useState(false);
  const [editedFlashcard, setEditedFlashcard] =
    useState<FlashcardType>(flashcard);

  const handleSave = async (e: any) => {
    e.preventDefault();

    await updateFlashcardEdited({
      author: editedFlashcard._id,
      category: editedFlashcard.category,
      color: editedFlashcard.color,
      description: editedFlashcard.description,
      title: editedFlashcard.title,
    });

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedFlashcard(flashcard);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFlashcard({
      ...editedFlashcard,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={cn(
        `w-full h-auto flex rounded-tr-3xl rounded-br-3xl shadow-inner-2 border-t text-black`,
        className,
      )}
    >
      <span className={cn(`w-2 h-full rounded-tl-full`, `bg-[${color}]`)} />
      <div className={'w-full flex-start flex-col gap-y-3 py-2 px-5'}>
        {isEditing ? (
          <form className="flex-between w-full">
            <div className="flex-start text-start flex-col gap-y-3">
              <label className="text-start">
                Título:
                <Input
                  type="text"
                  name="title"
                  value={editedFlashcard.title}
                  onChange={handleChange}
                  className="input-2 border-b"
                />
              </label>
              <label className="text-start border-b">
                Descrição:
                <Input
                  type="text"
                  name="description"
                  value={editedFlashcard.description}
                  onChange={handleChange}
                  className="input-2"
                />
              </label>
            </div>
            <div className="flex gap-x-3">
              <Button
                className={`bg-primary-500 font-black text-white hover:bg-transparent hover:border border-slate-400/30 hover:text-zinc-950 transition-colors rounded-xl`}
                onClick={handleSave}
              >
                Salvar
              </Button>
              <Button
                className={`bg-transparent border font-black text-zinc-900 hover:bg-primary-500 hover:border border-slate-400/30 hover:text-white transition-colors rounded-xl`}
                onClick={handleCancelEdit}
              >
                Cancelar
              </Button>
            </div>
          </form>
        ) : (
          <div className="w-full">
            <span
              className={cn(`w-2 h-full rounded-tl-full`, `bg-[${color}]`)}
            />
            <div className={'w-full flex-start flex-col gap-y-3 py-2 px-5'}>
              <h3
                className={
                  'max-sm:text-base text-lg font-bold w-full flex-between capitalize'
                }
              >
                <span>{title}</span>
                <SettingsFlashcard
                  id={_id}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
              </h3>
              <p className={'text-small font-extralight'}>{description}</p>
              <div
                className={`text-small font-bold text-[${color}] flex-between w-full`}
              >
                {category}

                <Button
                  className={`font-black transition-colors text-slate-900 hover:underline underline-offset-4`}
                >
                  Revisao
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
