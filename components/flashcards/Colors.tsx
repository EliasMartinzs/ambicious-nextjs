import { cn } from '@/lib/utils';

type Props = {
  color: string;
  setColor: (prevState: string) => void;
};

export default function Colors({ color, setColor }: Props) {
  return (
    <ul className="flex max-sm:w-full overflow-x-auto max-w-[400px]">
      <span
        onClick={() => setColor('#000000')}
        className={cn(
          `bg-[#000000] w-full h-20 md:p-10`,
          '#000000' === color && 'scale-x-150',
        )}
      />
      <span
        onClick={() => setColor('#0000FF')}
        className={cn(
          `bg-[#0000FF] w-full h-20 md:p-10`,
          '#0000FF' === color && 'scale-x-150',
        )}
      />
      <span
        onClick={() => setColor('#FF0000')}
        className={cn(
          `bg-[#FF0000] w-full h-20 md:p-10`,
          '#FF0000' === color && 'scale-x-150',
        )}
      />
      <span
        onClick={() => setColor('#FFFF00')}
        className={cn(
          `bg-[#FFFF00] w-full h-20 md:p-10`,
          '#FFFF00' === color && 'scale-x-150',
        )}
      />
      <span
        onClick={() => setColor('#FFA500')}
        className={cn(
          `bg-[#FFA500] w-full h-20 md:p-10`,
          '#FFA500' === color && 'scale-x-150',
        )}
      />
    </ul>
  );
}
