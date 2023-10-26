'use client';

import * as z from 'zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircleIcon } from 'lucide-react';
import { createCourse } from '@/lib/actions/course.action';
import { Input } from '../ui/input';
import Toast from './Toast';

const courseSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Titulo deve conter no minimo 2 caracteres',
    })
    .max(50),
  avaliation: z
    .string()
    .max(3, { message: 'A avaliação deve ser entre 1 e 5, ou 3.3 etc' }),
  review: z.string(),
});

type ValidationSchema = z.infer<typeof courseSchema>;

export default function AddCourse({ user }: { user: string }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    await createCourse({
      author: user,
      avaliation: +values.avaliation,
      title: values.title,
      review: values.review,
      path: '/',
    });

    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircleIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle>Adicionar Cursos</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <p className="font-extralight py-2">Titulo</p>
          <Input
            type="text"
            placeholder="Ex: Javascript begginer"
            className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
            {...register('title')}
          />
          <p className="font-extralight py-2">Avaliação</p>
          <Input
            type="number"
            placeholder="Ex: Javascript begginer"
            className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
            {...register('avaliation')}
          />
          <p className="font-extralight py-2">Revisão</p>
          <Input
            type="text"
            placeholder="Ex: Javascript begginer"
            className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
            {...register('review')}
          />
          <Toast
            dialog="hklashfkjlashfjklahjkfhajkflas Adicionada."
            classname="bg-primary-500 hover:bg-primary-600 rounded-2xl mt-3"
            textButton="Salvar"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
