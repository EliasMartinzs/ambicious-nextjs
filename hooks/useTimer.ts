'use client';
import { useEffect, useState, useRef, useContext } from 'react';
import { FormDataContext } from '../context/FormDataContext';
import { controllers, stages } from '@/constants/constants';

const useTimer = () => {
  const { formData } = useContext<any>(FormDataContext);
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);
  const periodId = useRef(stages.period);
  const Sound = () => {
    const audio = new Audio();
    return audio.play();
  };

  const resetTimerValues = () => {
    setPomodoro(prevPomodoro => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoroTime * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
  };

  const getRemainingTimePercentage = () => {
    const totalTime = formData[controllers[selectedControl].value] * 60;
    //@ts-ignore
    const remainingTime = pomodoro[controllers[selectedControl].value];
    return (remainingTime / totalTime) * 100;
  };

  useEffect(() => {
    //@ts-ignore
    let timer = null;
    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro(prevPomodoro => {
          //@ts-ignore
          if (prevPomodoro[controllers[selectedControl].value] === 0) {
            setSelectedControl(prevState => {
              if (periodId.current % 8 === 0) {
                return 2;
              } else {
                return prevState >= controllers.length - 1
                  ? 0
                  : prevState === 0
                  ? prevState + 1
                  : prevState === 1
                  ? prevState - 1
                  : 0;
              }
            });

            resetTimerValues();
            //@ts-ignore
            clearInterval(timer);
            Sound();
            periodId.current += 1;

            return prevPomodoro;
          }
          return {
            ...prevPomodoro,
            [controllers[selectedControl].value]:
              //@ts-ignore
              prevPomodoro[controllers[selectedControl].value] - 1,
          };
        });
      }, 1000);
    }
    return () => {
      //@ts-ignore
      clearInterval(timer);
    };
  }, [
    pomodoro.isPaused,
    selectedControl,
    setPomodoro,
    setSelectedControl,
    pomodoro.period,
  ]);

  return {
    pomodoro,
    setPomodoro,
    selectedControl,
    setSelectedControl,
    resetTimerValues,
    getRemainingTimePercentage,
  };
};

export default useTimer;
