import { lazy, Suspense, useContext, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../../pages/page404/Page404"));
const Profile = lazy(() => import("../../pages/profile/Profile"));
const Authentication = lazy(() =>
  import("../../pages/authentication/Authentication"),
);
const Registration = lazy(() =>
  import("../../pages/registration/Registration"),
);
const Login = lazy(() => import("../../pages/login/Login"));
const LessonsList = lazy(() => import("../../pages/lessonsList/LessonsList"));
const Lesson = lazy(() => import("../../pages/singleLesson/SingleLesson"));
const Timer = lazy(() => import("../../pages/Timer"));

function AppRouter() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = useCallback(
    ({ children }) => {
      return currentUser ? children : <Navigate to="/login" />;
    },
    [currentUser],
  );

  return (
    <Suspense fallback={<Spinner className="spinner" />}>
      <Routes>
        <Route path="/">
          <Route
            path="login"
            element={<Authentication dataType="login" Component={Login} />}
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
            index
            path="timer"
            element={
              <RequireAuth>
                <Timer />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
