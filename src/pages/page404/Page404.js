import { Link } from "react-router-dom";

import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./page404.scss";

function Page404() {
  return (
    <div className="page404">
      <ErrorMessage />
      <p className="page404__text">Такой страницы не существует</p>
      <Link to="/">Перейти на главную</Link>
    </div>
  );
}

export default Page404;
