import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./login.scss";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const errorItem = () => {
    if (error) {
      return (
        <span className="login__error">Почта или пароль введены неверно!</span>
      );
    }
    return null;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__form">
        <input
          type="email"
          placeholder="Почта"
          className="login__input login__email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="login__input login__password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login__wrapper">
          <button type="submit" className="btn btn-dark">
            Войти
          </button>
          <Link to="/registration" className="login__registration">
            Регистрация
          </Link>
        </div>
        {errorItem()}
      </form>
    </div>
  );
}

export default Login;
