import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Label } from '../ui/label';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { FormEvent, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { Button } from '../ui/button';
import { createBodyMeasurements } from '@/lib/actions/bodyMeasurements.action';
import { BodyMeasurementsType } from '@/types';
import { formatDate } from '@/lib/utils';

type Measurements = {
  chest: number;
  bicepsLeft: number;
  bicepsRight: number;
  legLeft: number;
  legRight: number;
  waist: number;
  calfLeft: number;
  calfRight: number;
  date: Date | undefined;
};

type Props = {
  author: string | undefined;
  bodyData: BodyMeasurementsType[];
};

export default function BodyMeasurements({ author, bodyData }: Props) {
  const [measurements, setMeasurements] = useState<Measurements>({
    chest: 0,
    bicepsLeft: 0,
    bicepsRight: 0,
    legLeft: 0,
    legRight: 0,
    waist: 0,
    calfLeft: 0,
    calfRight: 0,
    date: undefined,
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await createBodyMeasurements({
      author: author,
      chest: measurements.chest,
      bicepsLeft: measurements.bicepsLeft,
      bicepsRight: measurements.bicepsRight,
      legLeft: measurements.legLeft,
      legRight: measurements.legRight,
      waist: measurements.waist,
      calfLeft: measurements.calfLeft,
      calfRight: measurements.calfRight,
      date: measurements.date,
    });
  };

  return (
    <div className="flex-center flex-col gap-y-10">
      <Table className="text-foreground">
        <TableHeader>
          <TableRow>
            <TableHead>Pei</TableHead>
            <TableHead>Bíc Esq</TableHead>
            <TableHead>Bíc Dir</TableHead>
            <TableHead>Cox Esq</TableHead>
            <TableHead>Cox Dir</TableHead>
            <TableHead>Cin</TableHead>
            <TableHead>Pan Esq</TableHead>
            <TableHead>Pan Dir</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyData.map(body => (
            <TableRow key={body._id}>
              <TableHead>{body.chest}</TableHead>
              <TableHead>{body.bicepsLeft}</TableHead>
              <TableHead>{body.bicepsRight}</TableHead>
              <TableHead>{body.legLeft}</TableHead>
              <TableHead>{body.legRight}</TableHead>
              <TableHead>{body.waist}</TableHead>
              <TableHead>{body.calfLeft}</TableHead>
              <TableHead>{body.calfRight}</TableHead>
              <TableHead>{formatDate(body.date?.toString() ?? '')}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <form onSubmit={onSubmit} className="flex flex-col w-96">
        <div className="flex-between">
          <Label>Peito:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="110"
                type="number"
                value={measurements.chest}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    chest: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    chest: prevState.chest + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    chest: prevState.chest - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Bíceps Esq:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="48"
                type="number"
                value={measurements.bicepsLeft}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsLeft: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsLeft: prevState.bicepsLeft + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsLeft: prevState.bicepsLeft - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Bíceps Dir:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="48"
                type="number"
                value={measurements.bicepsRight}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsRight: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsRight: prevState.bicepsRight + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    bicepsRight: prevState.bicepsRight - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Coxa Esq:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="88"
                type="number"
                value={measurements.legLeft}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legLeft: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legLeft: prevState.legLeft + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legLeft: prevState.legLeft - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Coxa Dir:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="88"
                type="number"
                value={measurements.legRight}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legRight: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legRight: prevState.legRight + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    legRight: prevState.legRight - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Cintura:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="65"
                type="number"
                value={measurements.waist}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    waist: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    waist: prevState.waist + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    waist: prevState.waist - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Pantu Esq:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="32"
                type="number"
                value={measurements.calfLeft}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfLeft: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfLeft: prevState.calfLeft + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfLeft: prevState.calfLeft - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-between">
          <Label>Pantu Dir:</Label>
          <div className="flex-center">
            <div className="relative w-full">
              <Input
                className="input-3 text-lg w-52"
                placeholder="32"
                type="number"
                value={measurements.calfRight}
                onChange={e =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfRight: +e.target.value,
                  }))
                }
              />
              <small className="absolute top-0 right-0 p-5 text-slate-700">
                cm
              </small>
            </div>
            <div className="flex-center text-white gap-x-2">
              <Plus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfRight: prevState.calfRight + 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
              <Minus
                onClick={() =>
                  setMeasurements(prevState => ({
                    ...prevState,
                    calfRight: prevState.calfRight - 1,
                  }))
                }
                className="bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </div>

        <Label className="mt-4">
          Data da avaliação:
          <DatePicker
            date={measurements.date}
            setDate={newDate =>
              setMeasurements(prevMeasurements => ({
                ...prevMeasurements,
                date: newDate,
              }))
            }
          />
        </Label>

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
