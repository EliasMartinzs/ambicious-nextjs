'use client';

import { day } from '@/constants';
import { useState, useEffect } from 'react';

export default function Clock() {
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentHours, setCurrentHours] = useState(new Date().getHours());
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const newMinute = now.getMinutes();
      if (newMinute !== currentMinute) {
        setCurrentMinute(newMinute);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMinute]);

  return (
    <div className="flex flex-row clock gap-[2px] py-2">
      <div
        key={currentHours}
        className="w-44 md:w-32 h-52 flex-center bg-primary-500 border-slate-300/10 text-6xl"
      >
        {currentHours}
      </div>
      <div
        key={currentMinute}
        className="w-44 md:w-32 h-52 flex-center bg-primary-500 border-r border-slate-300/10 text-6xl relative"
      >
        {currentMinute <= 9 ? `0${currentMinute}` : currentMinute}
        <span className="text-xs absolute bottom-0">{day[currentDay]}</span>
      </div>
    </div>
  );
}
