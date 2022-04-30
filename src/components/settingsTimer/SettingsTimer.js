import PropTypes from "prop-types";

import "./settingsTimer.scss";

function SetTimer({ time, setTime, setShowSettings }) {
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
        onChange={(e) => setTime(+e.target.value)}
        className="settings-timer__slider"
      />
      <button
        type="button"
        onClick={() => setShowSettings(false)}
        className="btn settings-timer__start"
      >
        Старт
      </button>
    </div>
  );
}

SetTimer.propTypes = {
  time: PropTypes.number,
  setTime: PropTypes.func,
  setShowSettings: PropTypes.func,
};

SetTimer.defaultProps = {
  time: "0",
  setTime: () => {},
  setShowSettings: () => {},
};

export default SetTimer;
