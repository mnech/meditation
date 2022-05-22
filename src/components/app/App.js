import { useCallback, useContext, useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";

import AppRouter from "../AppRouter";

import Sidebar from "../sidebar/Sidebar";

import "../../style/style.scss";
import { AuthContext } from "../../context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="app__main">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
