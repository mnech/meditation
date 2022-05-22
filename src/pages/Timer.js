import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

import SettingsTimer from "../components/settingsTimer/SettingsTimer";
import TimerAnimation from "../components/timerAnimation/TimerAnimation";

function Timer() {
  const { time, secondsLeft, showSettings } = useContext(TimerContext);
  return (
    <div>
      {showSettings ? (
        <SettingsTimer defaultTime={time} />
      ) : (
        <TimerAnimation time={time} secondsLeft={secondsLeft} />
      )}
    </div>
  );
}

export default Timer;
