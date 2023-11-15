import { useState } from 'react';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import { z } from 'zod';

import { Tabs, TabsContent } from '../ui/tabs';
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Exercise from './Exercise';
import Diet from './Diet';

type Props = {
  day: string;
  author: string | undefined;
};

export default function CreateRoutine({ day, author }: Props) {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setToggleModal(!toggleModal)}
        className="font-bold border-b-2 border-primary-500 hover:border-primary-700 hover:shadow-lg transition-colors"
      >
        <Plus className="w-4 h-5 " />
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

        <Tabs defaultValue="exercise" className="w-full flex-center flex-col">
          <TabsList className="title flex-center gap-10">
            <TabsTrigger
              value="exercise"
              className="data-[state=active]:border-b-2 border-primary-500 data-[state=active]:font-black"
            >
              Exercicios
            </TabsTrigger>
            <TabsTrigger
              value="diet"
              className="data-[state=active]:border-b-2 border-primary-500 data-[state=active]:font-black"
            >
              Dieta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="exercise">
            <Exercise day={day} author={author} />
          </TabsContent>
          <TabsContent value="diet">
            <Diet day={day} author={author} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
