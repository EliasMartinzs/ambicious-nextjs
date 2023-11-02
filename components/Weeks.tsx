import { weekly } from '@/constants';
import Monday from './cards/Monday';

export default function Weeks() {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden px-5 md:px-0 max-md:gap-x-5 gap-x-5 gap-y-2
    "
    >
      {weekly.map(week => (
        <div key={week.name} className="w-full">
          <Monday dayOfWeek={week.title} key={week.name} />
        </div>
      ))}
    </section>
  );
}
