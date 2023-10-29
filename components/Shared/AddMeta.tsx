'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import Toast from './Toast';
import { Input } from '../ui/input';
import { categoriesMeta } from '@/constants';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';

const courseSchema = z.object({
  goals: z
    .string()
    .min(2, {
      message: 'Titulo deve conter no minimo 2 caracteres',
    })
    .max(50),
  description: z.string(),
  category: z.string(),
});

type ValidationSchema = z.infer<typeof courseSchema>;

export default function AddMeta() {
  const month = new Date().getMonth();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, month + 1, 20),
    to: addDays(new Date(2023, month + 1, 20), 20),
  });
  const [showDate, setShowDate] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async values => {
    console.log(values, date);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <PlusCircle />
      </DialogTrigger>
      <DialogContent className="border-none shadow-2xl max-w-xl px-5">
        <DialogHeader>
          <DialogTitle>Adicionar Meta</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <p className="font-extralight py-2">Objetivo</p>
          <Input
            type="text"
            placeholder="Ex: Colocar o shape esse ano"
            className="input"
            {...register('goals')}
          />
          <p className="font-extralight py-2">
            Por que esse objetivo é importante?
          </p>
          <Input
            type="text"
            placeholder="Ex: para poder pegar as minas"
            className="input"
            {...register('description')}
          />
          <select
            defaultValue=""
            className="block w-full my-3 focus:ring-slate-900 hover:bg-background bg-background text-foreground"
            {...register('category', { required: true })}
          >
            <option
              value=""
              disabled
              className="font-extralight py-2 bg-background"
            >
              Selecione a categoria
            </option>
            {categoriesMeta.map(category => (
              <option
                key={category.title}
                value={category.title}
                className="hover:bg-background"
              >
                {category.title}
              </option>
            ))}
          </select>

          <p className="font-extralight py-2">Inicio e data limite</p>
          <div className="w-auto p-0 bg-background border-none">
            <Button
              id="date"
              variant={'ghost'}
              className={cn(
                'justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
              onClick={() => setShowDate(!showDate)}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Escolha uma data</span>
              )}
            </Button>

            {showDate && (
              <Calendar
                initialFocus
                mode="range"
                locale={ptBR}
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            )}
          </div>
          <button type="submit">salvar</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

{
  /* <div className="w-auto p-0 bg-background border-none">
<Button
  id="date"
  variant={'ghost'}
  className={cn(
    'justify-start text-left font-normal',
    !date && 'text-muted-foreground'
  )}
  onClick={() => setShowDate(!showDate)}
>
  <CalendarIcon className="mr-2 h-4 w-4" />
  {date?.from ? (
    date.to ? (
      <>
        {format(date.from, 'LLL dd, y')} -{' '}
        {format(date.to, 'LLL dd, y')}
      </>
    ) : (
      format(date.from, 'LLL dd, y')
    )
  ) : (
    <span>Escolha uma data</span>
  )}
</Button> */
}

// {showDate && (
//   <div className={cn('grid gap-2 p-0')}>
{
  /* <Calendar
  initialFocus
  mode="range"
  locale={ptBR}
  defaultMonth={date?.from}
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
/> */
}
//   </div>
// )}
// </div>
