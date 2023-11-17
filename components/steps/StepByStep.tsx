'use client';

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

export type MetaInfoProps = {
  category?: string;
  meta?: string;
  description?: string;
  date?: DateRange | undefined;
};

const StepByStep = ({ author }: { author: string | undefined }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const month = new Date().getMonth();
  const [metaInfo, setMetaInfo] = useState<MetaInfoProps>({
    category: '',
    description: '',
    meta: '',
    date: {
      from: new Date(2023, month + 1, 20),
      to: addDays(new Date(2023, month + 1, 20), 20),
    },
  });

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <Step1
          onNext={handleNext}
          metaInfo={metaInfo}
          setMetaInfo={setMetaInfo}
        />
      )}
      {currentStep === 2 && (
        <Step2 metaInfo={metaInfo} setMetaInfo={setMetaInfo} author={author} />
      )}
    </>
  );
};

export default StepByStep;
