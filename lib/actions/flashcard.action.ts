'use server';

import { connectToDB } from '@/lib/mongodb';
import Flashcard from '@/lib/models/flashcard.model';
import { revalidatePath } from 'next/cache';

connectToDB();

interface CreateFlashcardProps {
  title: string;
  description: string;
  color: string;
  category: string | undefined;
  author: string | undefined;
}

export async function createFlashcard({
  title,
  description,
  color,
  category,
  author,
}: CreateFlashcardProps) {
  try {
    const create = Flashcard.create({
      title,
      description,
      color,
      category,
    });

    await Flashcard.findByIdAndUpdate(author, {
      $push: { flashcards: create },
    });

    revalidatePath('/');
  } catch (error: any) {
    throw new Error(`failed to create flashcard ${error}`);
  }
}

export async function deleteFlashcard(author: string) {
  try {
    await Flashcard.deleteOne({ _id: author });

    revalidatePath('/');
  } catch (error) {}
}

export async function fecthFlashcard() {
  try {
    const flashcard = await Flashcard.find();

    return JSON.parse(JSON.stringify(flashcard));
  } catch (error: any) {
    throw new Error(`failed to fetch flashcard ${error}`);
  }
}
