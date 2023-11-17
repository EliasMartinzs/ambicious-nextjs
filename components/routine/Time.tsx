import React, { Dispatch } from 'react';
import { Input } from '../ui/input';

type Props = {
  selectedTime: string;
  setSelectedTime: Dispatch<React.SetStateAction<string>>;
};

export default function Time({ selectedTime, setSelectedTime }: Props) {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <Input
      type="time"
      id="time"
      name="time"
      value={selectedTime}
      onChange={handleTimeChange}
      step="1800"
      className="input-3"
    />
  );
}
