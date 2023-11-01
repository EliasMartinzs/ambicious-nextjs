'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ptBR } from 'date-fns/locale';
import { MetaInfoProps } from '../steps/StepByStep';
import { Dispatch, SetStateAction } from 'react';

type DatePickerProps = {
  metaInfo: MetaInfoProps;
  setMetaInfo: Dispatch<SetStateAction<MetaInfoProps>>;
  className?: React.HTMLAttributes<HTMLDivElement>;
};

export function DatePickerWithRange({
  metaInfo,
  setMetaInfo,
  className,
}: DatePickerProps) {
  const onSelectDate = (e: DateRange | undefined) => {
    setMetaInfo(prevState => ({
      ...prevState,
      date: {
        from: e?.from,
        to: e?.to,
      },
    }));
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'ghost'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !metaInfo?.date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {metaInfo?.date?.from ? (
              metaInfo?.date.to ? (
                <>
                  {format(metaInfo?.date.from, 'LLL dd, y')} -{' '}
                  {format(metaInfo?.date.to, 'LLL dd, y')}
                </>
              ) : (
                format(metaInfo?.date.from, 'LLL dd, y')
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 m-0 border-none bg-primary-500 shadow-2xl"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            locale={ptBR}
            defaultMonth={metaInfo?.date?.from}
            selected={metaInfo?.date}
            onSelect={e => onSelectDate(e)}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
