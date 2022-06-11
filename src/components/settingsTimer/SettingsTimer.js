import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { TimerContext } from "../../context/TimerContext";

import "./settingsTimer.scss";
import "./settingsTimerMedia.scss";

function SetTimer({ defaultTime }) {
  const [time, setTime] = useState(defaultTime);
  const { dispatch } = useContext(TimerContext);

  const changeTime = (e) => {
    setTime(+e.target.value);
  };

  const startTimer = () => {
    dispatch({ type: "SET_TIME", payload: time });
  };

  return (
    <div className="settings-timer">
      <div className="settings-timer__value">
        {time}
        <span>мин.</span>
      </div>
      <input
        type="range"
        min="1"
        max="60"
        value={time}
        name="range"
        step="1"
        onChange={changeTime}
        className="settings-timer__slider"
      />
      <button
        type="button"
        onClick={startTimer}
        className="btn settings-timer__start"
      >
        Старт
      </button>
    </div>
  );
}

SetTimer.propTypes = {
  defaultTime: PropTypes.number,
};

SetTimer.defaultProps = {
  defaultTime: "0",
};

export default SetTimer;
