'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import WeekRoutine from './WeekRoutine';
import CreateRoutine from './CreateRoutine';
import { DietType, TableType } from '@/types/index';

const daysRoutine = [
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
];

type Props = {
  author: string | undefined;
  exercises: TableType[];
  diets: DietType[];
};

export default function Filters({ author, exercises, diets }: Props) {
  const [filtered, setFiltered] = useState('Segunda-Feira');

  return (
    <>
      <div className="flex-center max-sm:grid grid-cols-2 place-items-center">
        {daysRoutine.map(day => (
          <Button
            onClick={() => setFiltered(day)}
            className={cn(
              '',
              filtered === day &&
                'font-bold border-b-2 border-primary-500 hover:border-primary-700 hover:shadow-lg transition-colors',
            )}
            key={day}
          >
            {day}
          </Button>
        ))}
        <CreateRoutine day={filtered} author={author} />
      </div>

      {filtered && (
        <WeekRoutine day={filtered} exercises={exercises} diets={diets} />
      )}
    </>
  );
}
