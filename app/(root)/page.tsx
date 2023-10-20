import CentralImage from '@/components/CentralImage';
import Calendary from '@/components/Shared/Calendary';
import Clock from '@/components/Shared/Clock';
import Navigation from '@/components/Shared/Navigation';
import Plan from '@/components/Shared/Plan';
import Projects from '@/components/Shared/Projects';
import Weather from '@/components/Shared/Weather';
import Weeks from '@/components/Weeks';
import Inspirations from '@/components/cards/Inspirations';
import MenuOptions from '@/components/config/MenuOptions';

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <CentralImage />
      <Plan />
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
      <div className="w-full grid md:grid-cols-2 mt-10 gap-5 paddings">
        <div>
          <Weather />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </main>
  );
}
