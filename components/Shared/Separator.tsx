import { cn } from '@/lib/utils';

export default function Separator({ pad }: { pad?: boolean }) {
  return (
    <div className={cn('my-5 md:my-10', pad ? 'paddings' : null)}>
      <div className="w-full h-[1px] bg-slate-300/40" />
    </div>
  );
}
