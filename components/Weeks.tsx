import { weekly } from '@/constants';
import Monday from './cards/Monday';

export default function Weeks() {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-10">
      {weekly.map(week => (
        <div key={week.name} className="w-full">
          <Monday dayOfWeek={week.title} key={week.name} />
        </div>
      ))}
    </section>
  );
}
