import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import CustomInput from "../../components/customInput/CustomInput";

function Login({ error, onSubmitForm }) {
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
  onSubmitForm: PropTypes.func,
};

Login.defaultProps = {
  error: false,
  onSubmitForm: () => {},
};

export default Login;
