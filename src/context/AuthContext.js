import { createContext, useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const value = useMemo(
    () => ({
      currentUser: state.currentUser,
      dispatch,
    }),
    [state.currentUser, dispatch],
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
