import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import Spinner from "../spinner/Spinner";

import "../../style/style.scss";

const Profile = lazy(() => import("../../pages/Profile"));
const Login = lazy(() => import("../../pages/Login"));
const LessonsList = lazy(() => import("../../pages/Lessons"));
const Lesson = lazy(() => import("../../pages/SingleLesson"));
const Timer = lazy(() => import("../../pages/Timer"));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="app__main">
          <Suspense fallback={<Spinner className="spinner" />}>
            <Routes>
              <Route path="/">
                <Route index element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="lessons">
                  <Route index element={<LessonsList />} />
                  <Route path=":id" element={<Lesson />} />
                </Route>
                <Route path="timer" element={<Timer />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
