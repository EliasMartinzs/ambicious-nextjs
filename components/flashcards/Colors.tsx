import { cn } from '@/lib/utils';

type Props = {
  color: string;
  setColor: (prevState: string) => void;
};

export default function Colors({ color, setColor }: Props) {
  return (
    <ul className="flex overflow-x-auto max-w-[400px]">
      <span onClick={() => setColor('black')} className={cn(`bg-black p-10`)} />
      <span
        onClick={() => setColor('blue-500')}
        className={cn(`bg-blue-500 p-10`)}
      />
      <span
        onClick={() => setColor('red-500')}
        className={cn(`bg-red-500 p-10`)}
      />
      <span
        onClick={() => setColor('yello-500')}
        className={cn(`bg-yellow-500 p-10`)}
      />
      <span
        onClick={() => setColor('orange-500')}
        className={cn(`bg-orange-500 p-10`)}
      />
      <span
        onClick={() => setColor('primary-500')}
        className={cn(`bg-primary-500 p-10`)}
      />
      <span
        onClick={() => setColor('secondary-500')}
        className={cn(`bg-secondary-500 p-10`)}
      />
    </ul>
  );
}
