'use client';
import { useState } from 'react';
import Separator from '../Shared/Separator';
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '../ui/select';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BodyMeasurements from './BodyMeasurements';
import { BodyMeasurementsType } from '@/types';
import BodyBasics from './bodyBasics';

type Props = {
  author: string | undefined;
  bodyData: BodyMeasurementsType[];
};

export default function Body({ author, bodyData }: Props) {
  const [toggleBody, setToggleBody] = useState('medidas do corpo');

  return (
    <section className="pb-20">
      <h3 className="title font-bold">Corpo</h3>
      <Separator />
      <div className="grid grid-cols-2">
        <div className="flex-center flex-col gap-y-10">
          <Select value={toggleBody} onValueChange={setToggleBody}>
            <SelectTrigger className="w-auto border-b-2 border-primary-500 flex-center font-semibold text-slate-900/80">
              <SelectValue
                placeholder="Dados corporais"
                className="placeholder:font-black"
              />
            </SelectTrigger>
            <SelectContent className="border-none bg-white">
              <SelectGroup>
                <SelectItem value="medidas do corpo">
                  Medidas do corpo
                </SelectItem>
                <SelectItem value="dados Básicos de corpo">
                  Dados Básicos de corpo
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {toggleBody === 'medidas do corpo' ? (
            <BodyMeasurements author={author} bodyData={bodyData} />
          ) : (
            <BodyBasics author={author} bodyData={bodyData} />
          )}
        </div>
      </div>
    </section>
  );
}
