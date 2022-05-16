import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import start from "../../resources/icons/timer/start.svg";
import pause from "../../resources/icons/timer/pause.svg";
import stop from "../../resources/icons/timer/stop.svg";
import reset from "../../resources/icons/timer/reset.svg";

import "./timerAnimation.scss";

function TimerAnimation({
  time,
  setShowSettings,
  secondsLeft,
  setSecondsLeft,
}) {
  const [isPaused, setIsPaused] = useState(true);

  const setTime = (minutes) => {
    setSecondsLeft(minutes * 60);
  };

  const initTimer = () => {
    if (secondsLeft) {
      // timer is paused, because user has moved to another page
      setSecondsLeft(secondsLeft);
    } else {
      // first init timer
      setTime(time);
    }
  };

  function tick() {
    setSecondsLeft((seconds) => seconds - 1);
  }

  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  }

  useEffect(() => {
    initTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, secondsLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }
      tick();
    }, 1000);

    if (secondsLeft === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPaused, secondsLeft]);

  const minutes = addZero(Math.floor(secondsLeft / 60));
  const seconds = addZero(secondsLeft % 60);

  return (
    <div className="timer">
      <div className="timer__time">
        <span>
          {minutes}:{seconds}
        </span>
      </div>
      <div className="timer__buttons">
        <button
          type="button"
          className="timer__btn"
          onClick={() => {
            setIsPaused(true);
            initTimer(time);
          }}
        >
          <img src={reset} alt="Reset" />
        </button>
        {isPaused || !secondsLeft ? (
          <button
            type="button"
            className="timer__btn timer__btn-main"
            onClick={() => {
              setIsPaused(false);
            }}
          >
            <img src={start} alt="Start" />
          </button>
        ) : (
          <button
            type="button"
            className="timer__btn timer__btn-main"
            onClick={() => {
              setIsPaused(true);
            }}
          >
            <img src={pause} alt="Pause" />
          </button>
        )}
        <button
          type="button"
          className="timer__btn"
          onClick={() => setShowSettings(true)}
        >
          <img src={stop} alt="Stop" />
        </button>
      </div>
    </div>
  );
}

TimerAnimation.propTypes = {
  time: PropTypes.number,
  setShowSettings: PropTypes.func,
  secondsLeft: PropTypes.number,
  setSecondsLeft: PropTypes.func,
};

TimerAnimation.defaultProps = {
  time: "0",
  setShowSettings: () => {},
  secondsLeft: "0",
  setSecondsLeft: () => {},
};

export default TimerAnimation;
