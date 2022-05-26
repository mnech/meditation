import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { TimerContext } from "../../context/TimerContext";
import { AuthContext } from "../../context/AuthContext";
import { saveMeditationTime } from "../../services/firebase";
import Modal from "../modal/Modal";

import startIcon from "../../resources/icons/timer/start.svg";
import pauseIcon from "../../resources/icons/timer/pause.svg";
import stopIcon from "../../resources/icons/timer/stop.svg";
import resetIcon from "../../resources/icons/timer/reset.svg";

import "./timerAnimation.scss";

function TimerAnimation({ time, secondsLeft }) {
  const [isPaused, setIsPaused] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [savingTime, setSavingTime] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(TimerContext);

  const tick = () => {
    dispatch({ type: "CHANGE_LEFT_TIME", payload: secondsLeft - 1 });
  };

  const start = () => {
    setIsPaused(false);
  };

  const stop = () => {
    setIsPaused(true);
    setModalActive(true);
  };

  const pause = () => {
    setIsPaused(true);
  };

  const reset = () => {
    setIsPaused(true);
    dispatch({ type: "RESET_TIMER" });
  };

  const closeTimer = () => {
    dispatch({ type: "STOP_TIMER" });
  };

  const saveTime = async () => {
    const allSeconds = time * 60;
    const meditationSeconds = allSeconds - secondsLeft;
    setSavingTime(true);
    await saveMeditationTime(currentUser, meditationSeconds);
    setSavingTime(false);
    closeTimer();
  };

  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <button type="button" className="timer__btn" onClick={reset}>
          <img src={resetIcon} alt="Reset" />
        </button>
        {isPaused || !secondsLeft ? (
          <button
            type="button"
            className="timer__btn timer__btn-main"
            onClick={start}
          >
            <img src={startIcon} alt="Start" />
          </button>
        ) : (
          <button
            type="button"
            className="timer__btn timer__btn-main"
            onClick={pause}
          >
            <img src={pauseIcon} alt="Pause" />
          </button>
        )}
        <button type="button" className="timer__btn" onClick={stop}>
          <img src={stopIcon} alt="Stop" />
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <span className="modal__title">Сохранить время медитации?</span>
        <div className="modal__buttons">
          <button
            type="button"
            className="btn btn-dark"
            disabled={savingTime}
            onClick={closeTimer}
          >
            Не сохранять
          </button>
          <button
            type="button"
            className="btn"
            disabled={savingTime}
            onClick={saveTime}
          >
            Сохранить
          </button>
        </div>
      </Modal>
    </div>
  );
}

TimerAnimation.propTypes = {
  time: PropTypes.number,
  secondsLeft: PropTypes.number,
};

TimerAnimation.defaultProps = {
  time: "0",
  secondsLeft: "0",
};

export default TimerAnimation;
