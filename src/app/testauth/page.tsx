"use client";

import { FirebaseContext } from "@/context/FirebaseContext";
import { FirebaseContextType } from "@/types/FirebaseContext";
import { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createUser, getUser } from "@/services/firebaseApi";

const Auth = () => {
  const firebaseContext = useContext<FirebaseContextType | null>(
    FirebaseContext,
  );
  const auth = firebaseContext?.auth;
  const database = firebaseContext?.database;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const signUp = async () => {
    if (!auth || !database) {
      return console.warn("Firebase не инициализирован");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      createUser(database, email, user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  const authUser = async () => {
    if (!auth || !database) {
      return console.warn("Firebase не инициализирован");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        authEmail,
        authPassword,
      );
      const user = userCredential.user;
      const userData = await getUser(database, user.uid);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="m-1 border-2 border-black">
        <h1>Регистрация</h1>
        <div className="flex flex-row items-center gap-2">
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
          <button
            onClick={signUp}
            className="rounded-md border-2 border-gray-600 p-1"
          >
            Попытаемся зарегаться
          </button>
        </div>
      </div>

      <div className="m-1 border-2 border-black">
        <h1>Авторизация</h1>
        <label htmlFor="authemail">
          Email:
          <input
            type="text"
            name="authemail"
            id="authemail"
            onChange={(e) => setAuthEmail(e.currentTarget.value)}
          />
        </label>
        <label htmlFor="authpassword">
          Password:
          <input
            type="password"
            name="authpassword"
            id="authpassword"
            onChange={(e) => setAuthPassword(e.currentTarget.value)}
          />
        </label>
        <button onClick={() => authUser()}>Попытаемся Авторизоваться</button>
      </div>
    </>
  );
};

export default Auth;
