'use server';

import { revalidatePath } from 'next/cache';
import Book from '../models/book.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

interface IBook {
  title: string;
  avaliation?: number;
  thumbs?: string;
  author: string;
  path: string;
}

export const createBook = async ({
  title,
  avaliation,
  thumbs,
  author,
  path,
}: IBook) => {
  try {
    connectToDB();

    const createdBook = Book.create({
      title,
      avaliation,
      thumbs,
    });

    await User.findByIdAndUpdate(author, {
      $push: { books: createdBook },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed to create book ${error}`);
  }
};

export const getBooks = async () => {
  try {
    connectToDB();

    const books = await Book.find();

    return books;
  } catch (error: any) {
    throw new Error(`failed to fecth books ${error}`);
  }
};
