import { useEffect, useState, useMemo, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";

import { getLesson, setCompleteLesson } from "../../services/firebase";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import setContent from "../../utils/setContent";

import "./singleLesson.scss";

function SingleLesson() {
  const [data, setData] = useState(null);
  const [savingProgress, setSavingProgress] = useState(false);

  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [getDataLesson, process, setProcess] = useFetch(() =>
    // eslint-disable-next-line no-use-before-define
    getLesson(id).then(onDataLoaded),
  );

  const navigate = useNavigate();

  const onDataLoaded = (lesson) => {
    if (lesson) {
      setData(lesson);
      setProcess("confirmed");
    } else {
      setProcess("error");
    }
  };

  useEffect(() => {
    getDataLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const saveAndCloseLesson = async (path) => {
    setSavingProgress(true);
    await setCompleteLesson(currentUser, id, data.complete);
    setSavingProgress(false);
    navigate(path);
  };

  const startMeditation = () => {
    saveAndCloseLesson("/timer");
  };

  const completeLesson = () => {
    saveAndCloseLesson("/lessons");
  };

  const renderItems = () => {
    if (data) {
      const { name, desc } = data;
      const content = parse(desc);

      return (
        <div className="single-lesson__content">
          <h2 className="single-lesson__title">{name}</h2>
          <div className="single-lesson__desc">{content}</div>
          <div className="single-lesson__btns">
            <button
              type="button"
              className="btn btn-dark"
              disabled={savingProgress}
              onClick={startMeditation}
            >
              Начать медитацию
            </button>
            <button
              type="button"
              className="btn"
              disabled={savingProgress}
              onClick={completeLesson}
            >
              Завершить урок
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const elements = useMemo(() => {
    return setContent(process, () => renderItems(data));
    // eslint-disable-next-line
  }, [process, savingProgress]);

  return <div className="single-lesson">{elements}</div>;
}

export default SingleLesson;
