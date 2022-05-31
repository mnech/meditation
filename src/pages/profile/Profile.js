import { useEffect, useMemo, useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { getUserData, changeUserPhoto } from "../../services/firebase";
import Spinner from "../../components/spinner/Spinner";

import defaultImage from "../../resources/img/camera_photo.png";

import "./profile.scss";

function Profile() {
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const userPhoto = useMemo(() => {
    if (photo) {
      return photo;
    }
    return defaultImage;
  }, [photo]);

  const changeFile = (e) => {
    setError(false);
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const imgContent = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }
    return <img src={userPhoto} alt="user" className="profile__img" />;
  }, [loading, userPhoto]);

  const onPhotoUpload = (url) => {
    setLoading(false);
    setPhoto(url);

    if (!url) {
      setError(true);
    }
  };

  useEffect(() => {
    if (file) {
      setLoading(true);
      const name = `user_photo/${new Date().getTime()}${file.name}`;
      changeUserPhoto(currentUser, file, name).then(onPhotoUpload);
    }
  }, [currentUser, file]);

  useEffect(() => {
    if (currentUser) {
      const userData = async () => {
        setLoading(true);
        const dataUser = await getUserData(currentUser);
        setPhoto(dataUser.photo);
        setLoading(false);
      };

      userData();
    }
  }, [currentUser]);

  const errorMsg = error ? (
    <div className="profile__error">
      Не удалось загрузить фото. <br /> Попробуйте снова
    </div>
  ) : null;

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
        <div className="profile__name">Имя: Василий</div>
        <div className="profile__email">Почта: vasya@mail.ru</div>
      </div>
    </div>
  );
}

export default Profile;
