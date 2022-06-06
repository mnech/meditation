import { createContext, useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import DarkModeReducer from "./DarkModeReducer";

const INITIAL_STATE = {
  darkMode: localStorage.getItem("darkMode") === "true",
};

export const DarkModeContext = createContext(INITIAL_STATE);

export function DarkModeContextProvider({ children }) {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  const value = useMemo(
    () => ({
      darkMode: state.darkMode,
      dispatchDarkMode: dispatch,
    }),
    [state.darkMode, dispatch],
  );

  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
