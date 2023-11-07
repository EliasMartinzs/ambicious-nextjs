import BackImage from '@/components/Shared/BackImage';
import Calendary from '@/components/Shared/Calendary';
import Clock from '@/components/Shared/Clock';
import Navigation from '@/components/Shared/Navigation';
import Separator from '@/components/Shared/Separator';
import Tools from '@/components/Shared/Tools';
import Weather from '@/components/Shared/Weather';
import Weeks from '@/components/Weeks';
import Inspirations from '@/components/cards/Inspirations';
import FlashcardSpec from '@/components/flashcards/FlashcardSpec';
import Flashcards from '@/components/flashcards/Flashcards';
import Pomorodo from '@/pomodoro/Pomodoro';
import { PomodoroSpecs } from '@/pomodoro/PomodoroSpecs';

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <h3 className="title font-bold paddings mt-5" id="plan">
        Planejamento
      </h3>
      <Separator pad />
      <Inspirations />
      <section className="flex max-sm:flex-col max-sm:items-center paddings gap-x-20 pt-5">
        <div className="max-sm:flex gap-y-5 flex-col max-sm:items-center">
          <Clock />
          <Calendary />
        </div>
        <Weeks />
      </section>
      <section className="w-full grid md:grid-cols-2 gap-x-20 gap-5 mt-10 xl:mt-20 paddings">
        <Weather />
        <div className="">
          <BackImage />
        </div>
      </section>
      <section className="paddings mt-10 xl:mt-20">
        <h3 className="title font-bold mt-5">Stay Focused</h3>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
          <div className="order-2 md:order-1 max-sm:my-10">
            <Pomorodo />
          </div>
          <div className="order-1 md:order-2">
            <PomodoroSpecs />
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
            <FlashcardSpec />
            <div className="max-sm:my-10">
              <Flashcards />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 xl:mt-20">
        <h3 className="paddings text-2xl font-bold">Ferramentas</h3>
        <Separator pad={true} />
        <Tools />
      </section>
    </main>
  );
}
