import { useState } from "react";

import SettingsTimer from "../../components/settingsTimer/SettingsTimer";
import TimerAnimation from "../../components/timerAnimation/TimerAnimation";

import "./timer.scss";

function Timer() {
  const [showSettings, setShowSettings] = useState(true);
  const [time, setTime] = useState(15);

  return (
    <div>
      {showSettings ? (
        <SettingsTimer
          time={time}
          setTime={setTime}
          setShowSettings={setShowSettings}
        />
      ) : (
        <TimerAnimation time={time} setShowSettings={setShowSettings} />
      )}
    </div>
  );
}

export default Timer;
