import { useEffect, useMemo, useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { allUserData, changeUserPhoto } from "../../services/firebase";
import useFetch from "../../hooks/useFetch";
import setContent from "../../utils/setContent";
import Spinner from "../../components/spinner/Spinner";

import "./profile.scss";
import "./profileMedia.scss";

import defaultImage from "../../resources/img/camera_photo.png";
import meditation from "../../resources/icons/achivements/meditation.svg";

function Profile() {
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, time } = data;
  const { currentUser } = useContext(AuthContext);

  const [loadUserData, process, setProcess] = useFetch(() => {
    // eslint-disable-next-line no-use-before-define
    allUserData(currentUser).then(onLoadData);
  });

  const onLoadData = (dataUser) => {
    if (dataUser) {
      setPhoto(dataUser.photo);
      setData(dataUser);
      setProcess("confirmed");
    } else {
      setProcess("error");
    }
  };

  const userPhoto = useMemo(() => {
    if (photo) {
      return photo;
    }
    return defaultImage;
  }, [photo]);

  const onPhotoUpload = (url) => {
    setLoading(false);

    if (url) {
      setPhoto(url);
    } else {
      setError(true);
    }
  };

  const changeFile = (e) => {
    setError(false);
    if (e.target.files.length) {
      const file = e.target.files[0];
      setLoading(true);
      const fileName = `user_photo/${new Date().getTime()}${file.name}`;
      changeUserPhoto(currentUser, file, fileName).then(onPhotoUpload);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadUserData(currentUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const imgContent = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }
    return <img src={userPhoto} alt="user" className="profile__img" />;
  }, [loading, userPhoto]);

  const errorMsg = error ? (
    <div className="profile__error">
      Не удалось загрузить фото. <br /> Попробуйте снова
    </div>
  ) : null;

  const renderItems = () => {
    return (
      <div className="profile">
        <div className="profile__wrapper">
          <div className="profile__left">
            {imgContent}
            <label htmlFor="load_label" className="profile__load-label">
              Загрузить аватар &#10515;
              <input
                id="load_label"
                type="file"
                accept=".jpg, .jpeg, .png"
                className="profile__load"
                onChange={changeFile}
                disabled={loading}
              />
            </label>

            {errorMsg}
          </div>
          <div className="profile__right">
            <div className="profile__name">Имя: {name}</div>
            <div className="profile__email">Почта: {email}</div>
          </div>
        </div>
        <div className="achivements">
          <div className="achivements__time">
            <img
              className="achivements__img"
              src={meditation}
              alt="meditation"
            />
            <div className="achivements__desc">
              {time} мин. <br /> медитации
            </div>
          </div>
        </div>
      </div>
    );
  };

  const elements = useMemo(() => {
    return setContent(process, () => renderItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process, loading, userPhoto]);

  return <div>{elements}</div>;
}

export default Profile;
