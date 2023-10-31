'use client';

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [category, setCategory] = useState<string>('');
  const [step2Values, setStep2Values] = useState({});

  const changeHandler = (e: any) => {
    e.preventDefault();

    setStep2Values({ ...step2Values, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  console.log(step2Values);

  return (
    <>
      {currentStep === 1 && (
        <Step1
          onNext={handleNext}
          category={category}
          setCategory={setCategory}
        />
      )}
      {currentStep === 2 && (
        <Step2
          onNext={handleNext}
          changeHandler={changeHandler}
          category={category}
        />
      )}
      {currentStep === 3 && <Step3 onNext={handleNext} />}
    </>
  );
};

export default StepByStep;
