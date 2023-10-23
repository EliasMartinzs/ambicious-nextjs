'use client';
import { Button } from '../ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { createCourse } from '@/lib/actions/course.action';

type Props = {
  user: string;
  avaliation: number;
  title: string;
  review: string;
};

export default async function CreateCourse({ user }: Props) {
  const createNewCourse = async () => {
    await createCourse({
      author: user,
      avaliation: 3,
      title: 'vamos testar esse curso',
      review: 'ta bao ue',
      path: '/',
    });
  };
  return (
    <Button onClick={createNewCourse}>
      <PlusCircleIcon />
    </Button>
  );
}
