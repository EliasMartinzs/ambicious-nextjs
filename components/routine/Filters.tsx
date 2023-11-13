'use client';

import { FormEvent, Fragment, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import WeekRoutine from './WeekRoutine';
import CreateRoutine from './CreateRoutine';
import { TableType } from '@/types/index';

const daysRoutine = [
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
];

export default function Filters() {
  const [filtered, setFiltered] = useState('Segunda-Feira');
  const [table, setTable] = useState<TableType[]>([]);

  return (
    <>
      <div className="flex-center">
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
        <CreateRoutine day={filtered} table={table} setTable={setTable} />
      </div>

      <h3 className="text-start paragraph font-bold my-5">
        {filtered} / Peito
      </h3>

      {filtered && <WeekRoutine day={filtered} table={table} />}
    </>
  );
}
