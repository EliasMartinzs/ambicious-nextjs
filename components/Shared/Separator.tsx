import { cn } from '@/lib/utils';

export default function Separator({ pad }: { pad?: boolean }) {
  return (
    <div className={cn('my-5 md:my-6', pad ? 'paddings' : null)}>
      <div className="w-full h-[1px] bg-foreground" />
    </div>
  );
}
