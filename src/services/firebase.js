import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "meditation-b02d2.firebaseapp.com",
  projectId: "meditation-b02d2",
  storageBucket: "meditation-b02d2.appspot.com",
  messagingSenderId: "69484463235",
  appId: "1:69484463235:web:12f03ae9d88e84728587b6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage();

// auth

export const registration = async (name, email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", res.user.uid), {
    name,
    email,
    password,
    timeStamp: serverTimestamp(),
  });
  return res;
};

export const login = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

// lessons

const getDataLesson = (dataLesson) => {
  const lesson = dataLesson.data();
  return {
    id: dataLesson.id,
    number: lesson.number,
    name: lesson.name,
    thumbnail: lesson.thumbnail,
    complete: lesson.complete,
  };
};

const getCompleteLessons = async (userId) => {
  const lessons = [];

  const progressQuery = query(
    collection(db, "user_progress"),
    where("userId", "==", userId),
  );
  const userProgress = await getDocs(progressQuery);

  userProgress.forEach((data) => {
    lessons.push(data.data().lessonId);
  });

  return lessons;
};

const getLessons = async () => {
  const list = [];
  const lessons = await getDocs(collection(db, "lessons"));
  lessons.forEach((data) => {
    list.push(getDataLesson(data));
  });

  return list;
};

export const getAllLessons = async (userId) => {
  const lessons = await getLessons();
  const completeLessons = await getCompleteLessons(userId);
  const list = lessons.map((lesson) => {
    if (completeLessons.includes(lesson.id)) {
      return { ...lesson, complete: true };
    }
    return lesson;
  });

  list.sort((a, b) => (a.number > b.number ? 1 : -1));
  return list;
};

export const getLesson = async (id) => {
  const docRef = doc(db, "lessons", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const setCompleteLesson = async (userId, lessonId, complete) => {
  if (complete) {
    return;
  }

  await addDoc(collection(db, "user_progress"), {
    userId,
    lessonId,
    complete: true,
    timeStamp: serverTimestamp(),
  });
};

// timer

export const saveMeditationTime = async (userId, seconds) => {
  await addDoc(collection(db, "meditation_time"), {
    userId,
    seconds,
    timeStamp: serverTimestamp(),
  });
};

// other

export const uploadFile = (file, name, setPerc) => {
  const storageRef = ref(storage, name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPerc(progress);
      // switch (snapshot.state) {
      //   case "paused":
      //     console.log("Upload is paused");
      //     break;
      //   case "running":
      //     console.log("Upload is running");
      //     break;
      //   default:
      //     break;
      // }
    },
    () => {
      // error
      return null;
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        return downloadURL;
      });
    },
  );
};
