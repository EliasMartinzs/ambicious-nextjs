import { Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Flashcard() {
  return (
    <div className={'w-full h-auto flex'}>
      <span
        className={'w-2 h-full bg-primary-500 rounded-tr-3xl rounded-br-3xl'}
      />
      <div className={'w-full flex-start flex-col gap-y-3 py-7 px-5'}>
        <h3 className={'title font-medium w-full flex-between'}>
          <span>Algum Input Do Usuario </span>
          <Settings2 />
        </h3>
        <p className={'paragraph'}>Alguma descricao</p>
        <p>Categoria</p>
        <Button
          className={
            'border border-primary-500 rounded-full transition-colors hover:bg-primary-500 hover:text-white hover:shadow-xl'
          }
        >
          Revisao
        </Button>
      </div>
    </div>
  );
}
