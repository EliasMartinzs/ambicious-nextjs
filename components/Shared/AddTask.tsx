'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

import { createTasks } from '@/lib/actions/task.action';
import Toast from './Toast';

const taskSchema = z.object({
  task: z
    .string()
    .min(2, {
      message: 'A tarefa tem que conter no minimo 2 caracteres',
    })
    .max(50),
});

type ValidationSchema = z.infer<typeof taskSchema>;

type DayCardProps = {
  dayOfWeek: string;
  author: string | undefined;
};

export default function AddTask({ dayOfWeek, author }: DayCardProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    await createTasks({
      author: author,
      path: '/',
      text: values.task,
      day: dayOfWeek,
    });

    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="p-0 w-5 h-5">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle>Adicionar Tarefas</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="font-extralight py-2">Titulo</p>
          <Input
            type="text"
            placeholder="Ex: Javascript begginer"
            className="input-2"
            {...register('task')}
          />
          <Toast
            dialog="Tarefa Adicionada."
            classname="bg-primary-500 hover:bg-primary-600 rounded-2xl mt-3"
            textButton="Salvar"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
