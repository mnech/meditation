import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import { getAllLessons } from "../../services/firebase";
import useFetch from "../../hooks/useFetch";
import setContent from "../../utils/setContent";

import "./lessonsList.scss";

import doneIcon from "../../resources/icons/lessons/done.svg";
import arrowIcon from "../../resources/icons/lessons/arrow.svg";

function LessonsList() {
  const [data, setData] = useState([]);

  const { fetching, process, setProcess } = useFetch(() =>
    // eslint-disable-next-line no-use-before-define
    getAllLessons().then(onDataLoaded),
  );

  const onDataLoaded = (lessons) => {
    if (lessons) {
      setData(lessons);
      setProcess("confirmed");
    } else {
      setProcess("error");
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const completeItem = (complete) => {
    if (complete) {
      return <img src={doneIcon} alt="done" className="lesson__done" />;
    }
    return null;
  };

  const arrowItem = (countItems, i) => {
    if (countItems - 1 > i) {
      return <img src={arrowIcon} alt="arrow" className="lessons__arrow" />;
    }
    return null;
  };

  function renderItems(items) {
    const countItems = items.length;

    const itemsList = items.map(({ id, name, thumbnail, complete }, i) => {
      return (
        <div key={id}>
          <div className="lesson">
            <Link to={`/lessons/${id}`}>
              <img src={thumbnail} alt={name} className="lesson__img" />
              <div className="lesson__name">{name}</div>
              {completeItem(complete)}
            </Link>
          </div>
          {arrowItem(countItems, i)}
        </div>
      );
    });
    return <div className="lessons__list">{itemsList}</div>;
  }

  const elements = useMemo(() => {
    return setContent(process, () => renderItems(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process]);

  return <div className="lessons">{elements}</div>;
}

export default LessonsList;
