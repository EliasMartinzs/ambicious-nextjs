import { controllers } from "@/constants/constants";
import { useEffect } from "react";

type Props = {
  pomodoro: any;
  selectedControl: any;
};

const useCalculateTime = ({ pomodoro, selectedControl }: Props) => {
  const minutes = Math.floor(pomodoro[controllers[selectedControl].value] / 60);
  const seconds = Math.floor(pomodoro[controllers[selectedControl].value] % 60);
  return { minutes, seconds };
};

export default useCalculateTime;
