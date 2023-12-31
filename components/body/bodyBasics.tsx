import * as z from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { BodyBasicsType } from '@/types';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Interrogration from './Interrogration';
import { calculateIMC } from '@/lib/utils';
import { createBodyBasics } from '@/lib/actions/bodyBasics.action';

type Props = {
  author: string | undefined;
  bodyBasics: BodyBasicsType[];
};

const BasicsSchema = z.object({
  height: z.string().refine(val => !isNaN(Number(val)) && val.length === 4, {
    message: 'Por favor, insira uma altura válida ex: 1.80.',
  }),
  weight: z.coerce.number(),
  age: z.coerce.number(),
});

type BasicsValidation = z.infer<typeof BasicsSchema>;

export default function bodyBasics({ author, bodyBasics }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicsValidation>({
    resolver: zodResolver(BasicsSchema),
  });

  const onSubmit: SubmitHandler<BasicsValidation> = async values => {
    await createBodyBasics({
      age: values.age,
      author: author,
      height: +values.height,
      weight: values.weight,
      imc: calculateIMC({
        height: +values.height,
        weight: values.weight,
      }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-center flex-col gap-y-10"
    >
      <Table className="text-foreground">
        <TableHeader>
          <TableRow>
            <TableHead>Peso</TableHead>
            <TableHead>Altura</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead className="flex-center gap-x-2">
              IMC
              <Interrogration />
            </TableHead>
            <TableHead>Condição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyBasics.map(body => (
            <TableRow key={body._id}>
              <TableCell>{body.height}</TableCell>
              <TableCell>{body.weight}</TableCell>
              <TableCell>{body.age}</TableCell>
              <TableCell>{body.imc.imc.toFixed(2)}</TableCell>
              <TableCell>{body.imc.condition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="w-full flex-center flex-col gap-y-3">
        <div className="flex-between w-full">
          <Label>Altura:</Label>
          <div className="relative flex-center flex-col text-center">
            <Controller
              control={control}
              name="height"
              render={({ field }) => (
                <Input
                  className="input-3 text-lg w-52"
                  placeholder="ex: 1.80"
                  required={true}
                  type="number"
                  {...field}
                />
              )}
            />
            <small className="absolute top-0 right-0 p-5">cm</small>
            <small>{errors.height && errors.height.message}</small>
          </div>
        </div>

        <div className="flex-between w-full">
          <Label>Peso:</Label>
          <div className="relative flex-center flex-col text-center">
            <Controller
              control={control}
              name="weight"
              render={({ field }) => (
                <Input
                  className="input-3 text-lg w-52"
                  placeholder="ex: 95"
                  required={true}
                  type="number"
                  {...field}
                />
              )}
            />
            <small className="absolute top-0 right-0 p-5">kg</small>
          </div>
        </div>

        <div className="flex-between w-full">
          <Label>Idade:</Label>
          <div className="relative flex-center flex-col text-center">
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <Input
                  className="input-3 text-lg w-52"
                  placeholder="ex: 19"
                  required={true}
                  type="number"
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>

      <Button
        className="bg-primary-500 w-full font-black text-white hover:bg-primary-700 hover:shadow-xl hover:rounded-xl transition-colors"
        type="submit"
      >
        Salvar
      </Button>
    </form>
  );
}
