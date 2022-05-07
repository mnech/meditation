import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import PropTypes, { oneOfType } from "prop-types";

import { db, auth } from "../../services/firebase";
import { AuthContext } from "../../context/AuthContext";

import Login from "../login/Login";
import Registration from "../registration/Registration";

import "./authentication.scss";

function Authentication({ dataType, Component }) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const onSubmitForm = async ({ name = "", email, password }) => {
    try {
      let res = null;

      if (dataType === "login") {
        res = await signInWithEmailAndPassword(auth, email, password);
      } else {
        // registration
        res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
          name,
          email,
          password,
          timeStamp: serverTimestamp(),
        });
      }

      // set current user
      dispatch({ type: "LOGIN", payload: res.user.uid });
      navigate("/");
    } catch {
      setError(true);
    }
  };

  return (
    <div className="authentication">
      <Component error={error} onSubmitForm={onSubmitForm} />
    </div>
  );
}

Authentication.propTypes = {
  dataType: PropTypes.string,
  Component: PropTypes.oneOfType([
    PropTypes.objectOf(Login),
    PropTypes.objectOf(Registration),
  ]).isRequired,
};

Authentication.defaultProps = {
  dataType: "login",
};

export default Authentication;
