'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ptBR } from 'date-fns/locale';

type Props = {
  date: Date | undefined;
  setDate: (newDate: Date | undefined) => void;
};

export function DatePicker({ date, setDate }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'default'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Escolha uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          required={true}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
}
