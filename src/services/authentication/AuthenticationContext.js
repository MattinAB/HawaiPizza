import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./AuthenticationService";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsLoading(false);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(({ user }) => {
        setUser(user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("Invalid Username or/and Password");
      });
  };
  const onRegister = (email, password, repeatPassword) => {
    if (repeatPassword !== password) {
      setError("Error : password  not match !");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then(({ user }) => {
        setUser(user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) =>
        setError("The email address is already in use by another account.")
      );
  };
  const onLogout = () => {
    firebase.auth().signOut();
    setError(null);
    setUser([]);
    setUserInfo([]);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        onLogout,
        isLoading,
        error,
        onLogin,
        onRegister,
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
