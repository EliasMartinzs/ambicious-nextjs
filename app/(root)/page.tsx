import CentralImage from '@/components/CentralImage';
import BackImage from '@/components/Shared/BackImage';
import Calendary from '@/components/Shared/Calendary';
import Clock from '@/components/Shared/Clock';
import Navigation from '@/components/Shared/Navigation';
import Separator from '@/components/Shared/Separator';
import Weather from '@/components/Shared/Weather';
import Weeks from '@/components/Weeks';
import Inspirations from '@/components/cards/Inspirations';
import MenuOptions from '@/components/config/MenuOptions';

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <CentralImage />
      <h3 className="text-2xl font-bold paddings mt-5">Planejamento</h3>
      <Separator />
      <Inspirations />
      <div className="absolute top-5 right-5">
        <MenuOptions />
      </div>
      <section className="main-grid">
        <div className="clock-grid">
          <Clock />
          <br />
          <Calendary />
        </div>
        <div className="weeks-grid">
          <Weeks />
        </div>
        <div className="calendar-grid">
          <div className="calendar-container">
            <Navigation />
          </div>
        </div>
      </section>
      <section className="w-full grid md:grid-cols-2 gap-x-20 gap-5 mt-5 paddings">
        <Weather />
        <div className="">
          <BackImage />
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-bold paddings mt-5">Stay Focused</h3>
        <Separator />
      </section>
    </main>
  );
}
