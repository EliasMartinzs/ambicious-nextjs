import { categoriesMeta } from '@/constants';
import { Button } from '../ui/button';
import { Dispatch, SetStateAction } from 'react';

import { MetaInfoProps } from './StepByStep';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  onNext: () => void;
  metaInfo: {
    category?: string;
    meta?: string;
    description?: string;
  };
  setMetaInfo: Dispatch<SetStateAction<MetaInfoProps>>;
};

const Step1 = ({ onNext, metaInfo, setMetaInfo }: Props) => {
  const onChangeMeta = (field: string, value: string) => {
    setMetaInfo(currentContact => ({
      ...currentContact,
      [field]: value,
    }));
  };

  const nextStep = () =>
    metaInfo.category && metaInfo.category.length >= 1 ? onNext() : null;

  return (
    <>
      <div className="flex-center w-full my-5 gap-x-5">
        <span className="w-3 h-3 rounded-full bg-primary-500" />
        <span className="w-3 h-3 rounded-full bg-slate-300/40" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-start gap-5 transition-colors">
        {categoriesMeta.map(cat => (
          <Button
            key={cat.title}
            onClick={() => onChangeMeta('category', cat.title)}
            className={cn(
              'w-full flex-between gap-x-3 text-start font-bold hover:bg-primary-700 py-7 rounded-full shadow-inner',
              metaInfo?.category === cat.title && 'bg-primary-700'
            )}
          >
            <span>{cat.title}</span>
            <span className="max-w-[40px] max-h-[40px] flex-center bg-white rounded-full relative">
              <Image
                alt={cat.title}
                width={50}
                height={50}
                src={cat.icon}
                className="object-contain p-2 rounded-full"
              />
            </span>
          </Button>
        ))}
        <Button
          className="border-b font-bold hover:bg-white hover:font-black hover:shadow-2xl hover:text-primary-600"
          type="submit"
          onClick={nextStep}
        >
          Proxímo
        </Button>
      </div>
    </>
  );
};

export default Step1;
