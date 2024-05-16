import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logIn
  const logIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // set user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setIsLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  // sign Out

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    isLoading,
    createUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
