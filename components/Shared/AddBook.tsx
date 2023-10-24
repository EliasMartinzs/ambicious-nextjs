'use client';

import * as z from 'zod';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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
import { ChangeEvent, useState } from 'react';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { createBook } from '@/lib/actions/book.action';

const bookSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Titulo deve conter no minimo 2 caracteres',
    })
    .max(50),
  avaliation: z
    .string()
    .min(1, { message: 'A avaliacao tem que conter um numero 1 ate 5' })
    .max(3),
  thumbs: z.string(),
});

type ValidationSchema = z.infer<typeof bookSchema>;

export default function AddBook({ user }: { user: string }) {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing('media');
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(bookSchema),
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async e => {
        const imageDataUrl = e.target?.result?.toString() || '';

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    const blob = values.thumbs;

    const hasImageChanged = isBase64Image(blob);

    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      // or fileUrl
      if (imgRes && imgRes[0].url) {
        values.thumbs = imgRes[0].url;
      }

      await createBook({
        author: user,
        path: '/',
        title: values.title,
        avaliation: +values.avaliation,
        thumbs: values.thumbs,
      });
    }

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
          <p className="font-extralight py-2 mt-2">Avaliacao</p>
          <Input
            type="text"
            placeholder="Ex: 3.3"
            className="border-b rounded-2xl border-slate-400/20 text-slate-400/70"
            {...register('avaliation')}
          />
          <p className="font-extralight py-2 mt-2">Escolha a capa do livro</p>
          <Controller
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                placeholder="Capa do livro"
                onChange={e => handleImage(e, field.onChange)}
                className="pb-3"
              />
            )}
            name="thumbs"
            control={control}
          />
          <Toast
            dialog="Curso Adicionada."
            classname="bg-primary-500 hover:bg-primary-600 rounded-2xl mt-3"
            textButton="Salvar"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
