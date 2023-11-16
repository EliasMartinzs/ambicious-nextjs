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
import { BodyBasicsType, BodyMeasurementsType } from '@/types';
import BodyBasics from './bodyBasics';

type Props = {
  author: string | undefined;
  bodyData: BodyMeasurementsType[];
  bodyBasics: BodyBasicsType[];
};

export default function Body({ author, bodyData, bodyBasics }: Props) {
  const [toggleBody, setToggleBody] = useState('medidas do corpo');

  return (
    <section className="">
      <div className="">
        <div className="flex-center flex-col gap-y-10">
          <Select value={toggleBody} onValueChange={setToggleBody}>
            <SelectTrigger className="w-auto border-b-2 border-primary-500 flex-center font-medium title">
              <SelectValue
                placeholder="Dados corporais"
                className="placeholder:text-foreground"
              />
            </SelectTrigger>
            <SelectContent className="border-none bg-background text-foreground">
              <SelectGroup>
                <SelectItem className="paragraph" value="medidas do corpo">
                  Medidas do corpo
                </SelectItem>
                <SelectItem
                  className="paragraph"
                  value="dados Básicos de corpo"
                >
                  Dados Básicos de corpo
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {toggleBody === 'medidas do corpo' ? (
            <BodyMeasurements author={author} bodyData={bodyData} />
          ) : (
            <BodyBasics author={author} bodyBasics={bodyBasics} />
          )}
        </div>
      </div>
    </section>
  );
}
