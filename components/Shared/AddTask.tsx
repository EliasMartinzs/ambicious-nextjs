'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
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

type DayCardProps = {
  dayOfWeek: string;
  author: string | undefined;
};

export default function AddTask({ dayOfWeek, author }: DayCardProps) {
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: '',
    },
  });

  const sumbitTask = async (values: z.infer<typeof taskSchema>) => {
    await createTasks({
      author: author,
      path: '/',
      text: values.task,
      day: dayOfWeek,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="hover:bg-primary-300/50 p-0 w-5 h-5"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle>Adicionar Tarefas</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(sumbitTask)} className="space-y-8">
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Tarefas</FormLabel>
                  <FormControl>
                    <Input placeholder="....." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Toast dialog="Tarefa Adicionada." textButton="Salvar" />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
