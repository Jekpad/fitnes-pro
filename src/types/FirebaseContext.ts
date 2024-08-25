import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Database } from "firebase/database";

export type FirebaseContextType = {
  app: FirebaseApp;
  auth: Auth;
  database: Database;
};
