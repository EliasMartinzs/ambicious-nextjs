import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TableType } from '@/types';

const tableSchema = z.object({
  exercise: z.string(),
  reps: z.string(),
  series: z.string(),
  cardio: z.enum(['Sim', 'Não']),
});

type TableValidation = z.infer<typeof tableSchema>;

type Props = {
  day: string;
  table: TableType[];
  setTable: Dispatch<SetStateAction<TableType[]>>;
};

export default function CreateRoutine({ day, setTable, table }: Props) {
  const [toggleModal, setToggleModal] = useState(false);
  const { control, handleSubmit, reset } = useForm<TableValidation>({
    resolver: zodResolver(tableSchema),
  });

  const onSubmit: SubmitHandler<TableValidation> = async values => {
    setTable([...table, values]);
  };
  return (
    <div>
      <Button
        onClick={() => setToggleModal(!toggleModal)}
        className="cursor-pointer"
      >
        <Plus className="w-4 h-5 " />
      </Button>
      <div
        className={cn(
          toggleModal && 'absolute inset-0 w-full h-full z-50 overflow-hidden',
        )}
      />
      <div
        className={cn(
          'inset-0 fixed h-full ease-out duration-300 z-50 bg-white mt-10',
          toggleModal ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        <Button
          className="w-full h-10 backdrop-blur-3xl -translate-y-10"
          onClick={() => setToggleModal(!toggleModal)}
        >
          <X />
        </Button>
        <div className="w-full flex-center">
          <h3 className="title font-bold">Criar Exercisio para {day}</h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex-center flex-col gap-y-8 md:min-w-[400px] mt-5"
        >
          <Label className="font-semibold">
            Nome Do Exercísio:
            <Controller
              name="exercise"
              control={control}
              render={({ field }) => (
                <Input
                  required={true}
                  placeholder="Ex: Supino Inclinado"
                  className="input-3"
                  {...field}
                />
              )}
            />
          </Label>
          <Label>
            Quantas Repetições:
            <Controller
              name="reps"
              control={control}
              render={({ field }) => (
                <Input
                  required={true}
                  placeholder="Ex: 15"
                  className="input-3"
                  {...field}
                />
              )}
            />
          </Label>
          <Label>
            Quantas Séries:
            <Controller
              name="series"
              control={control}
              render={({ field }) => (
                <Input
                  required={true}
                  placeholder="Ex: 4"
                  className="input-3"
                  {...field}
                />
              )}
            />
          </Label>
          <Label>
            Terá Cardio:
            <Controller
              name="cardio"
              control={control}
              render={({ field }) => (
                <select {...field} className="input-3">
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              )}
            />
          </Label>
          <Button type="submit">salvar</Button>
        </form>
      </div>
    </div>
  );
}
