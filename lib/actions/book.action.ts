'use server';

import { revalidatePath } from 'next/cache';
import Book from '../models/book.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

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
    const books = await Book.find();

    return books;
  } catch (error: any) {
    throw new Error(`failed to fecth books ${error}`);
  }
};

export const deleteBook = async ({
  author,
  path,
}: {
  author: string;
  path: string;
}) => {
  try {
    await Book.deleteOne({ _id: author });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed to delete book ${error}`);
  }
};
