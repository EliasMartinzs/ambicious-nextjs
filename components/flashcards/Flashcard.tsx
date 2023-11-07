'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateFlashcard from './CreateFlashcard';

export default function Flashcard() {
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
          toggleModal && 'absolute inset-0 w-full h-full z-50 overflow-hidden'
        )}
      />
      <div
        className={cn(
          'inset-0 fixed h-full ease-out duration-300 z-50 bg-white mt-10',
          toggleModal ? 'translate-y-0' : 'translate-y-full'
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
              <CreateFlashcard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
