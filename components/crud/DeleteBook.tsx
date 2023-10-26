'use client';

import { deleteBook } from '@/lib/actions/book.action';
import { X } from 'lucide-react';

export default function DeleteBook({ author }: { author: string }) {
  const removeBook = async () => {
    await deleteBook({ author, path: '/' });
  };

  return <X onClick={removeBook} className="cursor-pointer w-4 h-4 " />;
}
