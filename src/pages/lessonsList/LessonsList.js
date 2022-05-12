import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllLessons } from "../../services/firebase";

import "./lessonsList.scss";

import doneIcon from "../../resources/icons/lessons/done.svg";
import arrowIcon from "../../resources/icons/lessons/arrow.svg";

function LessonsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllLessons().then((lessons) => setData(lessons));
  }, []);

  function renderItems(items) {
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

    const countItems = items.length;

    const itemsList = items.map(
      ({ id, number, name, thumbnail, complete }, i) => {
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
      },
    );
    return itemsList;
  }

  return (
    <div className="lessons">
      <div className="lessons__list">{renderItems(data)}</div>
    </div>
  );
}

export default LessonsList;
