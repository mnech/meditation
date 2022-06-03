import { useEffect, useMemo, useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { getUserData, changeUserPhoto } from "../../services/firebase";
import useFetch from "../../hooks/useFetch";
import setContent from "../../utils/setContent";
import Spinner from "../../components/spinner/Spinner";

import defaultImage from "../../resources/img/camera_photo.png";

import "./profile.scss";

function Profile() {
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email } = data;
  const { currentUser } = useContext(AuthContext);

  const [loadUserData, process, setProcess] = useFetch(() => {
    // eslint-disable-next-line no-use-before-define
    getUserData(currentUser).then(onLoadData);
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
        <div className="profile__left">
          {imgContent}
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            className="profile__load"
            onChange={changeFile}
            disabled={loading}
          />
          {errorMsg}
        </div>
        <div className="profile__right">
          <div className="profile__name">Имя: {name}</div>
          <div className="profile__email">Почта: {email}</div>
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
