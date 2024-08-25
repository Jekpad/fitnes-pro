"use client";

import { FirebaseContext } from "@/context/FirebaseContext";
import { FirebaseContextType } from "@/types/FirebaseContext";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const firebaseContext = useContext<FirebaseContextType | null>(
    FirebaseContext,
  );
  const auth = firebaseContext?.auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    if (!auth) {
      return console.warn("Firebase не инициализирован");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <h1>Регистрация</h1>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>
      <button onClick={() => createUser()}>Попытаемся зарегаться</button>
    </>
  );
};

export default Auth;
