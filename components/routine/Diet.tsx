import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Toast from '../Shared/Toast';
import { useState } from 'react';
import Time from './Time';
import { CreateDiet } from '@/lib/actions/diet.actions';

const tableSchema = z.object({
  food: z.string(),
  quantity: z.string(),
  athlet: z.enum(['Antes do Treino', 'Durante o Treino', 'Depois do Treino']),
  obs: z.string(),
});

type TableValidation = z.infer<typeof tableSchema>;

type Props = {
  day: string;
  author: string | undefined;
};

export default function Diet({ day, author }: Props) {
  const { control, handleSubmit, reset } = useForm<TableValidation>({
    resolver: zodResolver(tableSchema),
  });
  const [selectedTime, setSelectedTime] = useState<string>('12:00');

  const onSubmit: SubmitHandler<TableValidation> = async values => {
    await CreateDiet({
      author: author,
      athlet: values.athlet,
      day: day,
      food: values.food,
      obs: values.obs,
      quantity: values.quantity,
      time: selectedTime,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-center flex-col gap-y-8 mt-5 paddings"
    >
      <Label className="font-semibold w-96 text-lg">
        Horário:
        <Time selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Comida:
        <Controller
          name="food"
          control={control}
          render={({ field }) => (
            <Input
              required={true}
              placeholder="Ex: Arroz Integral"
              className="input-3"
              {...field}
            />
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Quantidade De Comida:
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <Input
              required={true}
              type="number"
              placeholder="Ex: 300g"
              className="input-3"
              {...field}
            />
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Atletas:
        <Controller
          name="athlet"
          control={control}
          render={({ field }) => (
            <select {...field} className="input-3">
              <option value="" disabled>
                Escolha
              </option>
              <option value="Antes do Treino">Antes do Treino</option>
              <option value="Durante o Treino">Durante o Treino</option>
              <option value="Depois do Treino">Depois do Treino</option>
            </select>
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Observação:
        <Controller
          name="obs"
          control={control}
          render={({ field }) => (
            <Input
              required={true}
              type="text"
              placeholder="Ex: Algo que fez ou gostaria"
              className="input-3"
              {...field}
            />
          )}
        />
      </Label>
      <Toast dialog="Dieta Adicionada." textButton="Salvar" />
    </form>
  );
}
