import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "../router/AppRouter";
import Sidebar from "../sidebar/Sidebar";

import { DarkModeContext } from "../../context/DarkModeContext";

import "../../style/style.scss";
import "../../style/darkMode.scss";
import "../../style/media.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const classes = darkMode ? "app dark" : "app";

  return (
    <BrowserRouter>
      <div className={classes}>
        <Sidebar />
        <main className="app__main">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
