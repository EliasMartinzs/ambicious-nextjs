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

import { createQuestion } from '@/lib/actions/question.action';
import Toast from './Toast';

const questionSchema = z.object({
  question: z
    .string()
    .min(2, { message: 'A questao deve conter no minimo 2 caractere' })
    .max(100),
  description: z.string().min(2).max(1000),
  category: z.string(),
  input: z.string(),
  output: z.string(),
  code: z.string(),
  difficulty: z.string(),
  explanation: z.string(),
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
      description: values.description,
      explanation: values.explanation,
      path: '/',
    });

    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <PlusCircle />
        </DialogTrigger>
        <DialogContent className="border-none shadow-2xl max-h-96 overflow-y-auto scroll">
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
            <p className="font-extralight py-2">Descricao</p>
            <Input
              type="text"
              placeholder="Ex: Questao"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('description')}
            />
            <p className="font-extralight py-2">Explicacao</p>
            <Input
              type="text"
              placeholder="Ex: Questao"
              className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
              {...register('explanation')}
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
            <Toast
              dialog="Question Adicionada."
              classname="bg-primary-500 hover:bg-primary-600 rounded-2xl mt-3"
              textButton="Salvar"
            />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
