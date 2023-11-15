import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { CreateExercise } from '@/lib/actions/exercise.action';
import Toast from '../Shared/Toast';
import { Muscle } from '@/constants';

const tableSchema = z.object({
  exercise: z.string(),
  reps: z.string(),
  series: z.string(),
  peso: z.string(),
  muscle: z.enum([
    'Bíceps',
    'Tríceps',
    'Peito',
    'Ombro',
    'Dorsal',
    'Pernas',
    'Abdõmen',
    'Antebraço',
    'Panturrilha',
  ]),
});

type TableValidation = z.infer<typeof tableSchema>;

type Props = {
  day: string;
  author: string | undefined;
};

export default function Exercise({ day, author }: Props) {
  const { control, handleSubmit, reset } = useForm<TableValidation>({
    resolver: zodResolver(tableSchema),
  });

  const onSubmit: SubmitHandler<TableValidation> = async values => {
    await CreateExercise({
      day: day,
      exercise: values.exercise,
      reps: +values.reps,
      series: +values.series,
      cardio: values.peso,
      author: author,
      muscle: values.muscle,
    });

    console.log(values);

    reset({
      series: '',
      peso: '',
      exercise: '',
      reps: '',
      muscle: 'Bíceps',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-center flex-col gap-y-8 mt-5 paddings"
    >
      <Label className="font-semibold w-96 text-lg">
        Membro:
        <Controller
          name="muscle"
          control={control}
          render={({ field }) => (
            <select {...field} className="input-3">
              {Muscle.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
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
      <Label className="font-semibold w-96 text-lg">
        Quantas Repetições:
        <Controller
          name="reps"
          control={control}
          render={({ field }) => (
            <Input
              required={true}
              placeholder="Ex: 15"
              className="input-3"
              type="number"
              {...field}
            />
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Quantas Séries:
        <Controller
          name="series"
          control={control}
          render={({ field }) => (
            <Input
              type="number"
              required={true}
              placeholder="Ex: 4"
              className="input-3"
              {...field}
            />
          )}
        />
      </Label>
      <Label className="font-semibold w-96 text-lg">
        Peso:
        <Controller
          name="peso"
          control={control}
          render={({ field }) => (
            <Input
              type="number"
              required={true}
              placeholder="Ex: 4"
              className="input-3"
              {...field}
            />
          )}
        />
      </Label>
      <Toast dialog="Exercisio Adicionado." textButton="Salvar" />
    </form>
  );
}
