import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";

import { getLesson, setCompleteLesson } from "../../services/firebase";

import "./singleLesson.scss";

function SingleLesson() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { name, desc, complete } = data;
  let content = "";

  if (desc) {
    content = parse(desc);
  }
  useEffect(() => {
    getLesson(id).then((lesson) => setData(lesson));
  }, [id]);

  const startMeditation = () => {
    setCompleteLesson(id, complete);
    navigate("/timer");
  };

  const completeLesson = () => {
    setCompleteLesson(id, complete);
    navigate("/lessons");
  };

  return (
    <div className="single-lesson">
      <div className="single-lesson__content">
        <h2 className="single-lesson__title">{name}</h2>
        <div className="single-lesson__desc">{content}</div>
        <div className="single-lesson__btns">
          <button
            type="button"
            className="btn btn-dark"
            onClick={startMeditation}
          >
            Начать медитацию
          </button>
          <button type="button" className="btn" onClick={completeLesson}>
            Завершить урок
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleLesson;
