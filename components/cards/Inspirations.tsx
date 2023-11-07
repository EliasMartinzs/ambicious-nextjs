import pensador from 'pensador-promise';
import SwiperInspiration from '../Shared/SwiperInspiration';

export default async function Inspirations() {
  const inspiration = await pensador({
    term: 'Albert Einsten',
    max: 30,
  });

  const { phrases } = inspiration;

  return (
    <>
      <h3 className="w-full title font-medium flex-center text-center">
        Inspirações
      </h3>
      <SwiperInspiration phrases={phrases} />
    </>
  );
}
