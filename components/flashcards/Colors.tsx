import { cn } from '@/lib/utils';
import { colors } from '@/constants';

type Props = {
  color: string;
  setColor: (prevState: string) => void;
};

export default function Colors({ color, setColor }: Props) {
  return (
    <ul className="flex overflow-x-auto max-w-[400px]">
      {colors.map(cor => (
        <span
          key={cor}
          onClick={() => setColor(cor)}
          className={cn(`bg-[${cor}] p-10`, cor === color && 'scale-x-150')}
        />
      ))}
    </ul>
  );
}
