'use client';

import z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { categoriesProblems, difficultyProblems } from '@/constants';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { createQuestion } from '@/lib/actions/question.action';

const questionSchema = z.object({
  question: z
    .string()
    .min(2, { message: 'A questao deve conter no minimo 2 caractere' })
    .max(100),
  category: z.string(),
  input: z.string(),
  output: z.string(),
  code: z.string(),
  difficulty: z.string(),
});

type ValidationSchema = z.infer<typeof questionSchema>;

export default function AddQuestion({ user }: { user: string }) {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(questionSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    await createQuestion({
      author: user,
      category: values.category,
      code: values.code,
      input: values.input,
      output: values.output,
      question: values.question,
      difficulty: values.difficulty,
    });

    reset();
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger>
          <PlusCircle />
        </DialogTrigger>
        <DialogContent className="border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle>Insira sua questao abaixo</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="font-extralight py-2">Questao</p>
            <Input
              type="text"
              placeholder="Ex: Questao"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('question')}
            />

            <select
              defaultValue=""
              className="block w-full my-5 focus:ring-slate-900 hover:bg-background bg-background text-foreground"
              {...register('category', { required: true })}
            >
              <option
                value=""
                disabled
                className="font-extralight py-2 bg-background"
              >
                Selecione a categoria
              </option>
              {categoriesProblems.map(category => (
                <option
                  key={category.value}
                  value={category.value}
                  className="hover:bg-background"
                >
                  {category.label}
                </option>
              ))}
            </select>

            <select
              defaultValue=""
              className="block w-full my-5 focus:ring-slate-900 hover:bg-background bg-background text-foreground"
              {...register('difficulty', { required: true })}
            >
              <option
                value=""
                disabled
                className="font-extralight py-2 bg-background"
              >
                Selecione a dificuldade
              </option>
              {difficultyProblems.map(category => (
                <option
                  key={category.value}
                  value={category.value}
                  className="hover:bg-background"
                >
                  {category.label}
                </option>
              ))}
            </select>
            <p className="font-extralight py-2">Entrada</p>
            <Input
              type="text"
              placeholder="Ex: Entrada da questao"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('input')}
            />
            <p className="font-extralight py-2">Saida</p>

            <Input
              type="text"
              placeholder="Ex: Saida"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('output')}
            />
            <p className="font-extralight py-2">Codigo</p>
            <Textarea
              cols={30}
              placeholder="Ex: Codigo"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('code')}
            />
            <Button type="submit">Salvar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
