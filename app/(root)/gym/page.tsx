import Separator from '@/components/Shared/Separator';
import Routine from '@/components/routine/Routine';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Gym',
  description: 'Shape Vem?',
};

export default function Page() {
  return (
    <main>
      <h3 className="title font-bold paddings mt-5" id="gym">
        Exercícios e Dieta
      </h3>
      <Separator pad />
      <Routine />
    </main>
  );
}
