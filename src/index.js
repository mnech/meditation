import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { AuthContextProvider } from "./context/AuthContext";
import { TimerContextProvider } from "./context/TimerContext";
import { DarkModeContextProvider } from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <TimerContextProvider>
          <App />
        </TimerContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
