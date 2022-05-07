import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import CustomInput from "../../components/CustomInput";

function Login({ error, onSubmitForm, errorSubmit }) {
  const errorMsg = "Почта или пароль введены неверно!";

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
          <CustomInput type="password" name="password" placeholder="Пароль" />
          <div className="wrapper">
            <button type="submit" className="btn btn-dark">
              Войти
            </button>
            <Link to="/registration" className="registration">
              Регистрация
            </Link>
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
  onSubmitForm: PropTypes.func,
  errorSubmit: PropTypes.func,
};

Login.defaultProps = {
  error: false,
  onSubmitForm: () => {},
  errorSubmit: () => {},
};

export default Login;
