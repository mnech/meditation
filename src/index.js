import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { AuthContextProvider } from "./context/AuthContext";
import { TimerContextProvider } from "./context/TimerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TimerContextProvider>
        <App />
      </TimerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
