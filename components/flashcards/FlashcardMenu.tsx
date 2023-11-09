'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateFlashcard from './CreateFlashcard';
import { FlashcardType } from '@/types';
import Flashcard from './Flashcard';

export default function FlashcardMenu({
  user,
  flashcard,
}: {
  user: string | undefined;
  flashcard?: FlashcardType;
}) {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setToggleModal(!toggleModal)}
        className="p-0 font-bold title "
      >
        Flashcard <Plus />
      </Button>
      <div
        className={cn(
          toggleModal && 'absolute inset-0 w-full h-full z-50 overflow-hidden',
        )}
      />
      <div
        className={cn(
          'inset-0 fixed h-full ease-out duration-300 z-50 bg-white mt-10',
          toggleModal ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        <Button
          className="w-full h-10 backdrop-blur-3xl -translate-y-10"
          onClick={() => setToggleModal(!toggleModal)}
        >
          <X />
        </Button>
        <div className="w-full h-full text-background">
          <Tabs defaultValue="create">
            <TabsList className="flex gap-x-10">
              <TabsTrigger
                value="create"
                className="p-3 text-base data-[state=active]:bg-white data-[state=active]:text-background data-[state=active]:border-b data-[state=active]:font-bold border-black"
              >
                Criar Flashcard
              </TabsTrigger>
              <TabsTrigger
                value="views"
                className="p-3 text-base data-[state=active]:bg-white data-[state=active]:text-background data-[state=active]:border-b data-[state=active]:font-bold border-black"
              >
                Meus Flashcards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="w-full flex-center">
              <CreateFlashcard user={user} />
            </TabsContent>
            <TabsContent value="views">
              {Array.isArray(flashcard) && (
                <>
                  {flashcard.length === 0 ? (
                    <div className="w-full flex-center my-20">
                      <h2 className="title font-semibold">
                        Até o momento não foi criado nenhum flashcard
                      </h2>
                    </div>
                  ) : (
                    <>
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 paddings">
                        {flashcard.map((card: FlashcardType) => (
                          <Flashcard key={card.title} flashcard={card} />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
