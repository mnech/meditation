import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "meditation-b02d2.firebaseapp.com",
  projectId: "meditation-b02d2",
  storageBucket: "meditation-b02d2.appspot.com",
  messagingSenderId: "69484463235",
  appId: "1:69484463235:web:12f03ae9d88e84728587b6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

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

export const getAllLessons = async () => {
  const querySnapshot = await getDocs(collection(db, "lessons"));
  const list = [];
  querySnapshot.forEach((data) => {
    list.push(getDataLesson(data));
  });
  list.sort((a, b) => (a.number > b.number ? 1 : -1));
  return list;
};

export const getLesson = async (id) => {
  const docRef = doc(db, "lessons", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const setCompleteLesson = async (id, complete) => {
  if (complete) {
    return;
  }
  const docRef = doc(db, "lessons", id);
  await updateDoc(docRef, { complete: true });
};
