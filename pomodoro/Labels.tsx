'use client';

import { controllers } from '@/constants/constants';

type Props = {
  selectedControl: any;
  setSelectedControl: any;
  resetTimerValues: any;
  setPomodoro: any;
};

const Labels = ({
  selectedControl,
  setSelectedControl,
  resetTimerValues,
  setPomodoro,
}: Props) => {
  function handleSelectedControl(index: any) {
    setSelectedControl(index);
    resetTimerValues();
    setPomodoro((prevPomodoro: any) => ({
      ...prevPomodoro,
      isPaused: true,
    }));
  }

  return (
    <div>
      <ul className="bg-pmd-blue-900 flex justify-between items-center rounded-full p-3 mb-6">
        {controllers.map((controller, index) => (
          <li
            key={index}
            className={`p-3 text-pmd-blue-300 font-semibold rounded-full text-xs flex-1 text-center whitespace-nowrap cursor-pointer ${
              selectedControl === index && 'active'
            }`}
            onClick={() => handleSelectedControl(index)}
          >
            {controller.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Labels;
