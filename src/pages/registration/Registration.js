import "./registration.scss";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { Formik, Form, useField } from "formik";
import { object, string } from "yup";
import { db, auth } from "../../services/firebase";

import { AuthContext } from "../../context/AuthContext";

function CustomInput(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

function Registration() {
  const [error, setError] = useState(false);
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

  const handleRegistration = async ({ name, email, password }) => {
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
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={object({
          name: string()
            .min(2, "Минимум 2 символа!")
            .required("Обязательное поле!"),
          email: string()
            .email("Неправильный адрес почты!")
            .required("Обязательное поле!"),
          password: string()
            .min(6, "Минимум 6 символов!")
            .required("Обязательное поле!"),
        })}
        onSubmit={(data) => {
          handleRegistration(data);
        }}
      >
        <Form className="registration__form">
          <CustomInput type="text" name="name" placeholder="Имя" />
          <CustomInput type="email" name="email" placeholder="Почта" />
          <CustomInput type="text" name="password" placeholder="Пароль" />
          <button type="submit" className="btn btn-dark">
            Зарегистрироваться
          </button>
          {errorItem()}
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
