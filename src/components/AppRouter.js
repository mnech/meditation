import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Spinner from "./spinner/Spinner";

const Page404 = lazy(() => import("../pages/page404/Page404"));
const Profile = lazy(() => import("../pages/Profile"));
const Authentication = lazy(() =>
  import("../pages/authentication/Authentication"),
);
const Login = lazy(() => import("../pages/login/Login"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const LessonsList = lazy(() => import("../pages/lessonsList/LessonsList"));
const Lesson = lazy(() => import("../pages/singleLesson/SingleLesson"));
const Timer = lazy(() => import("../pages/Timer"));

function AppRouter() {
  return (
    <div>
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
            <Route index element={<Profile />} />

            <Route path="lessons">
              <Route index element={<LessonsList />} />
              <Route path=":id" element={<Lesson />} />
            </Route>
            <Route path="timer" element={<Timer />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRouter;
