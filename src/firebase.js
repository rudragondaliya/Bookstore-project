import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBylll6Je5Soc4YMFJ69li9iMxw8g_4Ndk",
  authDomain: "bookstore-db-01.firebaseapp.com",
  projectId: "bookstore-db-01",
  storageBucket: "bookstore-db-01.appspot.com",
  messagingSenderId: "977015609415",
  appId: "1:977015609415:web:4b7c6e8fa751e158893962"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };
