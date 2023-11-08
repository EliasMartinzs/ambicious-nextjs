import React, { useState } from 'react';
import Select from 'react-select';
import { z } from 'zod';
import { Label } from '../ui/label';
import { Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import Colors from './Colors';
import { createFlashcard } from '@/lib/actions/flashcard.action';

const FlashcardSchema = z.object({
  title: z.string(),
  description: z.string(),
});

interface CategoryOption {
  value: string;
  label: string;
}

type ValidationSchema = z.infer<typeof FlashcardSchema>;

export default function CreateFlashCard({
  user,
}: {
  user: string | undefined;
}) {
  const { handleSubmit, reset, control } = useForm<ValidationSchema>({
    resolver: zodResolver(FlashcardSchema),
  });

  const options: CategoryOption[] = [];

  const [selectedCategories, setSelectedCategories] = useState<CategoryOption>({
    value: '',
    label: '',
  });
  const [newCategory, setNewCategory] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const handleAddNewCategory = (e: any) => {
    e.preventDefault();

    if (newCategory.trim() === '') {
      setError('O nome da categoria não pode estar vazio.');
      return;
    }

    const newCategoryOption: CategoryOption = {
      value: newCategory,
      label: newCategory,
    };
    setSelectedCategories(newCategoryOption);
    setNewCategory('');
    setError('');
  };

  const handleCategoryChange = (selectedOptions: any) => {
    if (selectedOptions) {
      setSelectedCategories(selectedOptions);
    }
  };

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    await createFlashcard({
      title: values.title,
      description: values.description,
      color: color,
      category: selectedCategories.label,
      author: user,
    });

    reset({
      title: '',
      description: '',
    });

    setSelectedCategories({
      value: '',
      label: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[400px] flex-start flex-col"
    >
      <Label className="text-base font-light mt-5">Titulo</Label>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            required={true}
            placeholder="Ex: Prova de geografia"
            className="w-full h-10 bg-white border-b border-slate-600/40 shadow-sm focus:border focus:rounded-lg focus:shadow-sm outline-none placeholder:text-sm placeholder:text-slate-800/60"
            {...field}
          />
        )}
      />
      <Label className="text-base font-light mt-5">Descrição</Label>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            required={true}
            placeholder="Ex: prova foi chata"
            className="w-full h-10 bg-white border-b border-slate-600/40 shadow-sm focus:border focus:rounded-lg focus:shadow-sm outline-none placeholder:text-sm placeholder:text-slate-800/60"
            {...field}
          />
        )}
      />
      <br />
      <Label className="text-base font-light">Selecione uma categoria</Label>
      <Select
        isMulti
        options={options}
        value={selectedCategories}
        onChange={handleCategoryChange}
        isSearchable
        required={true}
        className="react-select-3-input"
        placeholder="Selecione ou adicione uma categoria..."
      />
      {error && <small className="text-sm text-red-500">{error}</small>}

      <br />

      <Label className="text-base font-light text-start">
        Criar uma categoria
      </Label>
      <div className="relative w-full">
        <Input
          type="text"
          value={newCategory}
          className="w-full h-10 bg-white border-b border-slate-600/40 shadow-sm focus:border focus:rounded-lg focus:shadow-sm outline-none placeholder:text-sm placeholder:text-slate-800/60"
          onChange={e => {
            setNewCategory(e.target.value);
            setError('');
          }}
          placeholder="Nova categoria"
        />
        <button
          onClick={handleAddNewCategory}
          className="absolute top-3 right-3"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <br />
      <Label className="text-base font-light">
        Selecione a cor do seu flashcard
      </Label>
      <Colors color={color} setColor={setColor} />
      <br />
      <Button
        type={'submit'}
        className={
          'border rounded-full border-primary-500 text-slate-950 hover:bg-primary-500 hover:text-white hover:font-bold'
        }
      >
        Salvar{' '}
      </Button>
    </form>
  );
}