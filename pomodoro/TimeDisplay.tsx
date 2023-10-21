import useCalculateTime from '../hooks/useCalculateTime';

type Props = {
  pomodoro: any;
  selectedControl: any;
};

const TimeDisplay = ({ pomodoro, selectedControl }: Props) => {
  const { minutes, seconds } = useCalculateTime({ pomodoro, selectedControl });

  return (
    <>
      {minutes < 9 ? '0' : ''}
      {minutes}:{seconds < 9 ? '0' : ''}
      {seconds}
    </>
  );
};

export default TimeDisplay;
