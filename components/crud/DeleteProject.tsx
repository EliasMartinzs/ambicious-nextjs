'use client';

import { deleteQuestion } from '@/lib/actions/question.action';
import { X } from 'lucide-react';

export default function DeleteProject({ author }: { author: string }) {
  const removeQuestion = async () => {
    await deleteQuestion({ author, path: '/' });
  };

  return (
    <X
      onClick={removeQuestion}
      className="cursor-pointer w-4 h-4 absolute inset-y-0 right-0"
    />
  );
}
