import { createContext, useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import TimerReducer from "./reducer/TimerReducer";

const minutes = +localStorage.getItem("defaultTimer") || 15;

const INITIAL_STATE = {
  time: minutes,
  secondsLeft: minutes * 60,
  showSettings: true,
};

export const TimerContext = createContext(INITIAL_STATE);

export function TimerContextProvider({ children }) {
  const [state, dispatch] = useReducer(TimerReducer, INITIAL_STATE);
  const value = useMemo(
    () => ({
      time: state.time,
      secondsLeft: state.secondsLeft,
      showSettings: state.showSettings,
      dispatch,
    }),
    [state.time, state.secondsLeft, state.showSettings, dispatch],
  );

  useEffect(() => {
    localStorage.setItem("defaultTimer", state.time);
  }, [state.time]);

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}

TimerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
