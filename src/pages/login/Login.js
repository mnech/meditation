import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import CustomInput from "../../components/customInput/CustomInput";

function Login({ error, setError, onSubmitForm }) {
  useEffect(() => {
    setError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(data) => {
          onSubmitForm(data);
        }}
      >
        <Form className="form">
          <CustomInput type="email" name="email" placeholder="Почта" />
          <CustomInput
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="on"
          />
          <div className="wrapper">
            <button type="submit" className="btn btn-dark">
              Войти
            </button>
            <Link to="/registration">Регистрация</Link>
          </div>
          {error ? (
            <div className="error">Почта или пароль введены неверно!</div>
          ) : null}
        </Form>
      </Formik>
    </div>
  );
}

Login.propTypes = {
  error: PropTypes.bool,
  setError: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

Login.defaultProps = {
  error: false,
  setError: () => {},
  onSubmitForm: () => {},
};

export default Login;
