Here’s a complete `README.md` documentation file for your **Book Management System** project using **React**, **Redux Toolkit**, **Firebase Authentication**, and **Firestore CRUD**.

---

## 📚 Book Management System

A full-stack React application that allows users to **Sign Up, Login**, and **manage books** with real-time updates from **Firebase Firestore**. Includes route protection, a modern Bootstrap UI, and persistent authentication using Redux and Firebase.

### 🚀 Live Demo

🔗 [Live Link (Deploy on Vercel/Firebase)](https://bookstore-project-iota-mauve.vercel.app/)



---

## ✨ Features

* 🔐 Firebase Authentication (Signup, Login, Logout)
* 📘 Add / Edit / Delete Books
* 📄 View Book List
* ✅ Protected Routes with React Router
* 🧠 Global State Management using Redux Toolkit
* 📁 Firebase Firestore as a NoSQL Backend
* 🎨 Responsive UI using Bootstrap 5

---

## 📂 Folder Structure

```
📁 src
 ┣ 📁 app             → Redux Store
 ┣ 📁 auth            → AuthSlice & Thunks
 ┣ 📁 components      → Reusable UI Components
 ┣ 📁 features        → Book Slice & Thunk
 ┣ 📁 layouts         → Sidebar + Layout Wrappers
 ┣ 📁 pages           → Login, Signup, Dashboard, BookList, AddBook
 ┣ 📄 App.jsx         → Main Router + App logic
 ┣ 📄 firebase.js     → Firebase Config
 ┗ 📄 index.js        → Entry Point
```

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router DOM, Redux Toolkit, Bootstrap
* **Backend:** Firebase Authentication, Cloud Firestore
* **State Management:** Redux Toolkit
* **Deployment:** Vercel / Firebase Hosting

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/book-management-system.git
cd book-management-system
npm install
```

---

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project
3. Enable:

   * Authentication → Email/Password
   * Firestore Database
4. Copy your Firebase config and paste it into `src/firebase.js`

```js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX.firebaseapp.com",
  projectId: "XXXX",
  storageBucket: "XXXX.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 🔐 Authentication

| Action    | Path      | Protected |
| --------- | --------- | --------- |
| Login     | `/login`  | ❌         |
| Sign Up   | `/signup` | ❌         |
| Dashboard | `/`       | ✅         |
| Add Book  | `/add`    | ✅         |
| Book List | `/list`   | ✅         |

---

## 📸 Screenshots

> *Add screenshots of your app if possible here*

---

## 📦 Deployment

### Option 1: Vercel

```bash
npm run build
vercel deploy
```

### Option 2: Firebase Hosting

```bash
npm run build
firebase login
firebase init
firebase deploy
```

---

## 🙋‍♂️ Author

**Rudra Gondaliya**
GitHub: [@rudra-gondaliya](https://github.com/rudra-gondaliya)

---

## ⭐️ Give a Star

If you liked this project, consider giving it a ⭐️ on [GitHub](https://github.com/your-username/book-management-system)

---

## 📎 License

This project is open source and available under the [MIT License](LICENSE).

---

