import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Label } from '../ui/label';

import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import { BodyMeasurementsType } from '@/types';
import Interrogration from './Interrogration';
import { calculateIMC } from '@/lib/utils';

type Basics = {
  weight: number;
  height: number;
  age: number;
  imc: number;
};

type Props = {
  author: string | undefined;
  bodyData: BodyMeasurementsType[];
};

export default function BodyBasics({ author, bodyData }: Props) {
  const [measurements, setMeasurements] = useState<Basics>({
    weight: 90,
    age: 18,
    height: 1.75,
    imc: 0,
  });

  const handleHeightBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 3) {
      const formattedHeight = `${value[0]}.${value.slice(1)}`;
      setMeasurements(prevState => ({
        ...prevState,
        height: +formattedHeight,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imc = calculateIMC({
      height: measurements.height,
      weight: measurements.weight,
    });

    setMeasurements(prevState => ({
      ...prevState,
      imc: imc,
    }));

    console.log(measurements);
  };

  return (
    <div className="flex-center flex-col gap-y-10">
      <Table>
        <TableHeader className="text-slate-700">
          <TableRow>
            <TableHead>Peso</TableHead>
            <TableHead>Altura</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead className="flex-center">
              IMC
              <Interrogration />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black">
          {bodyData.map(body => (
            <TableRow key={body._id}>
              <TableHead>{body.chest}</TableHead>
              <TableHead>{body.bicepsLeft}</TableHead>
              <TableHead>{body.bicepsRight}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <form onSubmit={handleSubmit} className="flex flex-col w-96">
        <div className="flex-between">
          <Label>Peso:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="90"
                type="number"
                value={measurements.weight}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    weight: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                kg
              </small>
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Altura:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="1.75"
                name="height"
                value={measurements.height}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    height: +e.target.value,
                  }))
                }
                onBlur={handleHeightBlur}
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Idade</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="18"
                type="number"
                value={measurements.age}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    age: +e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        <Button
          className="bg-primary-500 mt-5 font-black text-white hover:bg-primary-700 hover:shadow-xl hover:rounded-xl transition-colors"
          type="submit"
        >
          Salvar
        </Button>
      </form>
    </div>
  );
}
