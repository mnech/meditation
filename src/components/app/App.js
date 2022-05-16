import { lazy, Suspense, useCallback, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import Spinner from "../spinner/Spinner";

import "../../style/style.scss";
import { AuthContext } from "../../context/AuthContext";

const Page404 = lazy(() => import("../../pages/page404/Page404"));
const Profile = lazy(() => import("../../pages/Profile"));
const Authentication = lazy(() =>
  import("../../pages/authentication/Authentication"),
);
const Login = lazy(() => import("../../pages/login/Login"));
const Registration = lazy(() =>
  import("../../pages/registration/Registration"),
);
const LessonsList = lazy(() => import("../../pages/lessonsList/LessonsList"));
const Lesson = lazy(() => import("../../pages/singleLesson/SingleLesson"));
const Timer = lazy(() => import("../../pages/Timer"));

function App() {
  const { currentUser } = useContext(AuthContext);

  // timer state
  const [time, setTime] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [showSettings, setShowSettings] = useState(true);

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
                <Route
                  path="login"
                  element={
                    <Authentication dataType="login" Component={Login} />
                  }
                />
                <Route
                  path="registration"
                  element={
                    <Authentication
                      dataType="registration"
                      Component={Registration}
                    />
                  }
                />
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />

                <Route path="lessons">
                  <Route
                    index
                    element={
                      <RequireAuth>
                        <LessonsList />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <RequireAuth>
                        <Lesson />
                      </RequireAuth>
                    }
                  />
                </Route>
                <Route
                  path="timer"
                  element={
                    <RequireAuth>
                      <Timer
                        time={time}
                        setTime={setTime}
                        secondsLeft={secondsLeft}
                        setSecondsLeft={setSecondsLeft}
                        showSettings={showSettings}
                        setShowSettings={setShowSettings}
                      />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
