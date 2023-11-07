import React from 'react';
import Flashcard from './Flashcard';

export default function Flashcards() {
  return (
    <>
      <h3 className="md:text-center title font-medium flex items-center md:justify-center gap-x-2">
        Novo <Flashcard />
      </h3>
    </>
  );
}
