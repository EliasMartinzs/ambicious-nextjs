'use client';

import { deleteCourse } from '@/lib/actions/course.action';
import { X } from 'lucide-react';

export default function DeleteCourse({ author }: { author: string }) {
  const removeCourse = async () => {
    await deleteCourse({ author, path: '/' });
  };

  return (
    <X
      onClick={removeCourse}
      className="cursor-pointer w-4 h-4 absolute inset-y-0 right-0"
    />
  );
}
