import "./registration.scss";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../services/firebase";

import { AuthContext } from "../../context/AuthContext";

function Registration() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const errorItem = () => {
    if (error) {
      return (
        <span className="registration__error">
          Произошла ошибка. Попробуйте еще раз
        </span>
      );
    }
    return null;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email,
        password,
        timeStamp: serverTimestamp(),
      });
      dispatch({ type: "LOGIN", payload: res.user });
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="registration">
      <form onSubmit={handleRegistration} className="registration__form">
        <input
          type="text"
          placeholder="Имя"
          className="registration__input registration__name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Почта"
          className="registration__input registration__email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="registration__input registration__password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Зарегистрироваться
        </button>
        {errorItem()}
      </form>
    </div>
  );
}

export default Registration;
