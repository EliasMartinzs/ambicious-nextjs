'use client';

import { useState } from 'react';
import { Calendar } from '../ui/calendar';
import { ptBR } from 'date-fns/locale';

export default function Calendary() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border-none capitalize p-0"
      locale={ptBR}
    />
  );
}
