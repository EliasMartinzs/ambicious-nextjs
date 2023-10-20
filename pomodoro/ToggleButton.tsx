"use client";
type Props = {
  pomodoro: any;
  setPomodoro: any;
};

const ToggleButton = ({ pomodoro, setPomodoro }: Props) => {
  function togglePausePlay() {
    setPomodoro((prevPomodoro: any) => {
      return {
        ...prevPomodoro,
        isPaused: !prevPomodoro.isPaused,
      };
    });
  }

  return (
    <button
      onClick={togglePausePlay}
      className="text-base uppercase tracking-[0.5rem]"
    >
      {pomodoro.isPaused ? "Başlat" : "Durdur"}
    </button>
  );
};

export default ToggleButton;
