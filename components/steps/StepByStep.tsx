'use client';

import { ChangeEvent, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { MetaValidation } from '@/lib/validations/user';
import { zodResolver } from '@hookform/resolvers/zod';

type Validation = z.infer<typeof MetaValidation>;

const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [categories, setCategories] = useState<{
    title: string;
  }>({
    title: '',
  });

  const month = new Date().getMonth();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, month + 1, 20),
    to: addDays(new Date(2023, month + 1, 20), 20),
  });

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <Step1 onNext={handleNext} setCategory={setCategories} />
      )}
      {currentStep === 2 && (
        <Step2
          onNext={handleNext}
          date={date}
          setDate={setDate}
          category={categories}
        />
      )}
    </>
  );
};

export default StepByStep;
