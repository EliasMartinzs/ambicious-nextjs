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
  const [filteredFlashcards, setFilteredFlashcards] = useState('Todos');

  return (
    <>
      <Button
        onClick={() => setToggleModal(!toggleModal)}
        className="rounded-2xl hover:bg-foreground p-20 transition-colors text-foreground hover:text-background"
      >
        <Plus className="w-7 h-7 " />
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
                className="p-3 text-base text-black data-[state=active]:bg-white data-[state=active]:border-b data-[state=active]:font-bold border-black"
              >
                Criar Flashcard
              </TabsTrigger>
              <TabsTrigger
                value="views"
                className="p-3 text-base text-black data-[state=active]:bg-white data-[state=active]:border-b data-[state=active]:font-bold border-black"
              >
                Meus Flashcards
              </TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="w-full flex-center">
              <CreateFlashcard user={user} />
            </TabsContent>
            <TabsContent value="views">
              <div className="overflow-x-auto paddings pt-5 pb-10 text-black">
                {Array.isArray(flashcard) ? (
                  <div className="flex">
                    <Button
                      className={cn(
                        'flex gap-x-5 border-b border-primary-500 font-medium',
                        filteredFlashcards === 'Todos' &&
                          'border-black shadow-sm font-bold border-b-2',
                      )}
                      onClick={() => setFilteredFlashcards('Todos')}
                    >
                      Todos
                    </Button>
                    {flashcard.map((card: FlashcardType) => (
                      <Button
                        key={card.title}
                        className={cn(
                          'flex gap-x-5 border-b border-primary-500 shadow-sm font-medium',
                          filteredFlashcards === card.category &&
                            'border-black font-bold border-b-2',
                        )}
                        onClick={() => setFilteredFlashcards(card.category)}
                      >
                        {card.category}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <>inutil</>
                )}
              </div>
              <div className="w-full flex-center">
                {filteredFlashcards === 'Todos' ? (
                  <>
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
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 paddings">
                              {flashcard.map((card: FlashcardType) => (
                                <Flashcard key={card.title} flashcard={card} />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {Array.isArray(flashcard) ? (
                      <>
                        {flashcard
                          .filter(
                            (card: FlashcardType) =>
                              card.category === filteredFlashcards,
                          )
                          .map((card: FlashcardType) => (
                            <>
                              <div
                                key={card.title}
                                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 paddings"
                              >
                                <Flashcard key={card.title} flashcard={card} />
                              </div>
                            </>
                          ))}
                      </>
                    ) : null}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
