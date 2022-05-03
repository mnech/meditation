import Link from "react-router-dom";
import PropTypes from "prop-types";

import "./singleLesson.scss";
import test from "../../resources/img/lessons/lesson.jpg";

function SingleLesson({ name, desc, picture }) {
  return (
    <div className="single-lesson">
      <div className="single-lesson__left">
        <img src={test} alt="name" className="single-lesson__img" />
      </div>
      <div className="single-lesson__right">
        <h2 className="single-lesson__title">{name}</h2>
        <div className="single-lesson__desc">{desc}</div>
        <div className="single-lesson__btns">
          <button type="button" className="btn btn-dark">
            Начать медитацию
          </button>
          <button type="button" className="btn">
            Завершить урок
          </button>
        </div>
      </div>
    </div>
  );
}

SingleLesson.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  picture: PropTypes.string,
};

SingleLesson.defaultProps = {
  name: "",
  desc: "",
  picture: "",
};

export default SingleLesson;
