import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "../../services/firebase";

import "./singleLesson.scss";

function SingleLesson() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLesson(id).then((lesson) => setData(lesson));
  }, [id]);

  return (
    <div className="single-lesson">
      <div className="single-lesson__left">
        <img src={data.thumbnail} alt="name" className="single-lesson__img" />
      </div>
      <div className="single-lesson__right">
        <h2 className="single-lesson__title">{data.name}</h2>
        <div className="single-lesson__desc">{data.desc}</div>
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

export default SingleLesson;
