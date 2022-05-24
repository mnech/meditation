import { BrowserRouter } from "react-router-dom";

import AppRouter from "../router/AppRouter";
import Sidebar from "../sidebar/Sidebar";

import "../../style/style.scss";

function App() {
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
