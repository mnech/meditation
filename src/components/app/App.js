import { lazy, Suspense, useCallback, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import Spinner from "../spinner/Spinner";

import "../../style/style.scss";
import { AuthContext } from "../../context/AuthContext";

const Profile = lazy(() => import("../../pages/Profile"));
const Login = lazy(() => import("../../pages/login/Login"));
const Registration = lazy(() =>
  import("../../pages/registration/Registration"),
);
const LessonsList = lazy(() => import("../../pages/Lessons"));
const Lesson = lazy(() => import("../../pages/singleLesson/SingleLesson"));
const Timer = lazy(() => import("../../pages/Timer"));

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = useCallback(
    ({ children }) => {
      return currentUser ? children : <Navigate to="/login" />;
    },
    [currentUser],
  );

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="app__main">
          <Suspense fallback={<Spinner className="spinner" />}>
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
                <Route path="lessons">
                  <Route index element={<LessonsList />} />
                  <Route
                    path=":id"
                    element={
                      <RequireAuth>
                        <Lesson />
                      </RequireAuth>
                    }
                  />
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
