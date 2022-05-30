import { useEffect, useMemo, useState } from "react";

import { uploadFile } from "../../services/firebase";
import useFetch from "../../hooks/useFetch";
import setContent from "../../utils/setContent";
import defaultImage from "../../resources/img/camera_photo.png";
import Spinner from "../../components/spinner/Spinner";
import "./profile.scss";

function Profile() {
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);

  const uploadImage = () => {
    console.log("upload");
    if (!file) {
      return;
    }
    console.log("upload 1");
    const name = new Date().getTime() + file.name;
    uploadFile(file, name, setPerc);
  };

  const { fetching, process, setProcess } = useFetch(() =>
    // eslint-disable-next-line no-use-before-define
    uploadImage().then(onDataLoaded),
  );

  console.log(process);

  const onDataLoaded = (url) => {
    console.log("data loaded");
    if (url) {
      setProcess("confirmed");
    } else {
      setProcess("error");
    }
  };

  const userPhoto = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return defaultImage;
  }, [file]);

  const changeFile = (e) => {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const imgContent = useMemo(() => {
    if (perc !== null && perc < 100) {
      return <Spinner />;
    }
    return <img src={userPhoto} alt="user" className="profile__img" />;
  }, [perc, userPhoto]);

  useEffect(() => {
    // uploadImage();
    if (file) {
      fetching();
    }
  }, [file]);

  const renderContent = () => {
    return (
      <div>
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
  };

  const elements = useMemo(() => {
    console.log("elements");
    return setContent(process, () => {
      renderContent();
      console.log("render");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process]);

  return <div className="profile">{elements}</div>;
}

export default Profile;
