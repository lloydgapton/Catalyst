"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface value {
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  currentUser: User | null;
}

const AuthContext = createContext<value | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Auth provider");
  }
  return context;
}

// const auth = getAuth();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function signup(email: string, password: string) {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredentials.user;
    await setDoc(doc(db, "students", user.uid), {
      email: user.email,
      createdAt: new Date(),
    });
    return user;
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const value = { currentUser, signup, login };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}