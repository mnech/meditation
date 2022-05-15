import error from "../../resources/img/error.png";
import "./errorMessage.scss";

function ErrorMessage() {
  return (
    <div className="error">
      <img src={error} alt="error" className="error__img" />
      <p className="error__text">Что-то пошло не так...</p>
    </div>
  );
}

export default ErrorMessage;
