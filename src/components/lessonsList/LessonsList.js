import { Link } from "react-router-dom";

import "./lessonsList.scss";

import doneIcon from "../../resources/icons/lessons/done.svg";
import arrowIcon from "../../resources/icons/lessons/arrow.svg";
import Lesson1 from "../../resources/img/lessons/lesson1.jpg";

function LessonsList() {
  const lessons = [
    {
      id: 1,
      name: "Что такое медитация",
      thumbnail: "",
      complete: true,
    },
    {
      id: 2,
      name: "Время для медитации",
      thumbnail: "",
      complete: true,
    },
    {
      id: 3,
      name: "Место для медитации",
      thumbnail: "",
      complete: false,
    },
    {
      id: 4,
      name: "Тело в медитации",
      thumbnail: "",
      complete: false,
    },
  ];

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

    const itemsList = items.map(({ id, name, trumbnail, complete }, i) => {
      return (
        <div>
          <div className="lesson" key={id}>
            <Link to={`/lessons/${id}`}>
              <img src={Lesson1} alt={name} className="lesson__img" />
              <div className="lesson__name">{name}</div>
              {completeItem(complete)}
            </Link>
          </div>
          {arrowItem(countItems, i)}
        </div>
      );
    });
    return itemsList;
  }

  return (
    <div className="lessons">
      <div className="lessons__list">{renderItems(lessons)}</div>
    </div>
  );
}

export default LessonsList;
