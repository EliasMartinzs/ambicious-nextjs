'use client';

import { deleteTask } from '@/lib/actions/task.action';
import { Trash, X } from 'lucide-react';

export default function DeleteTask({ author }: { author: string }) {
  const removeTask = async () => {
    await deleteTask({ author, path: '/' });
  };

  return <X onClick={removeTask} className="cursor-pointer w-4 h-4" />;
}
