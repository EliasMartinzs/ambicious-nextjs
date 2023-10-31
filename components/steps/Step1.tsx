import { categoriesMeta } from '@/constants';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  onNext: () => void;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const Step1 = ({ onNext, category, setCategory }: Props) => {
  const [noCategory, setNoCategory] = useState('');

  const nextStep = () => {
    category
      ? onNext()
      : setNoCategory('Por favor selecione uma categoria !!!');
  };

  return (
    <>
      <div className="w-full flex-center gap-x-3 pt-3">
        <span className="w-8 h-1 rounded-full bg-primary-500 shadow-2xl" />
        <span className="w-8 h-1 rounded-full bg-white" />
        <span className="w-8 h-1 rounded-full bg-white" />
      </div>
      <h4 className="font-black text-primary-500 py-8">
        Selecione uma categoria
      </h4>
      <div className="w-full grid grid-cols-2 gap-3 transition-colors">
        {categoriesMeta.map(cat => (
          <Button
            variant={'ghost'}
            className={cn(
              'flex-between w-full text-start hover:bg-black/30 px-5 py-7 hover:rounded-xl',
              cat.title === category && 'border rounded-2xl border-primary-500'
            )}
            onClick={() => setCategory(cat.title)}
          >
            <span>{cat.title}</span>
            <span className="bg-primary-500 w-[35px] h-[35px] rounded-xl flex-center">
              <Image
                src={cat.icon}
                width={20}
                height={20}
                alt={cat.title}
                className=""
              />
            </span>
          </Button>
        ))}
      </div>

      <div className="w-full flex-between">
        <Button className="steps-button" onClick={nextStep}>
          Próximo
        </Button>
        {noCategory}
      </div>
    </>
  );
};

export default Step1;
