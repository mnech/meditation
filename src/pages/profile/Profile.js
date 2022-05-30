import { useEffect, useMemo, useState } from "react";

import { uploadFile } from "../../services/firebase";
import defaultImage from "../../resources/img/camera_photo.png";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./profile.scss";

function Profile() {
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userPhoto = useMemo(() => {
    if (photo) {
      return photo;
    }
    return defaultImage;
  }, [photo]);

  const changeFile = (e) => {
    setError(false);
    if (e.target.files.length) {
      const file = e.target.files[0];
      const name = new Date().getTime() + file.name;
      uploadFile(file, name, setLoading, setError, setPhoto);
    }
  };

  const imgContent = useMemo(() => {
    if (error) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Spinner />;
    }
    return <img src={userPhoto} alt="user" className="profile__img" />;
  }, [error, loading, userPhoto]);

  return (
    <div className="profile">
      <div className="profile__left">
        {imgContent}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          className="profile__load"
          onChange={changeFile}
        />
      </div>
      <div className="profile__right">
        <div className="profile__name">Имя: Василий</div>
        <div className="profile__email">Почта: vasya@mail.ru</div>
      </div>
    </div>
  );
}

export default Profile;
