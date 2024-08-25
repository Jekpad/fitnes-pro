"use client";

import { FirebaseContextType } from "@/types/FirebaseContext";
import { createContext, ReactNode } from "react";
import { app, auth, database } from "../../firebase";

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FirebaseContext.Provider value={{ app, auth, database }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
