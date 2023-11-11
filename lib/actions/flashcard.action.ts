'use server';

import { connectToDB } from '@/lib/mongodb';
import Flashcard from '@/lib/models/flashcard.model';
import { revalidatePath } from 'next/cache';

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
    await connectToDB();

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

export async function fecthFlashcard() {
  try {
    await connectToDB();

    const flashcard = await Flashcard.find();

    return JSON.parse(JSON.stringify(flashcard));
  } catch (error: any) {
    throw new Error(`failed to fetch flashcard ${error}`);
  }
}

export async function deleteFlashcard(id: string) {
  try {
    connectToDB();

    await Flashcard.deleteOne({ _id: id });

    revalidatePath('/');
  } catch (error) {
    throw new Error(`failed to remove flashcard ${error}`);
  }
}

export async function updateFlashcardEdited({
  title,
  description,
  color,
  category,
  author,
}: CreateFlashcardProps) {
  try {
    await connectToDB();

    await Flashcard.findOneAndReplace(
      { author },
      {
        title,
        description,
        color,
        category,
        author,
      },
    );

    revalidatePath('/');
  } catch (error: any) {
    throw new Error(`failed to update flashcard edited ${error}`);
  }
}
