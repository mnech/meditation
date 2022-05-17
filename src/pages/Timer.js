import PropTypes from "prop-types";

import SettingsTimer from "../components/settingsTimer/SettingsTimer";
import TimerAnimation from "../components/timerAnimation/TimerAnimation";

function Timer({
  time,
  setTime,
  secondsLeft,
  setSecondsLeft,
  showSettings,
  setShowSettings,
}) {
  return (
    <div>
      {showSettings ? (
        <SettingsTimer
          time={time}
          setTime={setTime}
          setShowSettings={setShowSettings}
        />
      ) : (
        <TimerAnimation
          time={time}
          setShowSettings={setShowSettings}
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
        />
      )}
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.number,
  setTime: PropTypes.func,
  secondsLeft: PropTypes.number,
  setSecondsLeft: PropTypes.func,
  showSettings: PropTypes.func,
  setShowSettings: PropTypes.func,
};

Timer.defaultProps = {
  time: "0",
  setTime: () => {},
  secondsLeft: "0",
  setSecondsLeft: () => {},
  showSettings: () => {},
  setShowSettings: () => {},
};

export default Timer;
