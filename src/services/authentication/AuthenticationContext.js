import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./AuthenticationService";
import "firebase/compat/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        setError("Invalid Username orand Password");
      });
  };
  const onRegister = (email, password, repeatPassword) => {
    if (repeatPassword !== password) {
      setError("Error : password  not match !");
      return;
    }
    registerRequest(email, password)
      .then(({ user }) => {
        setIsLoading(true);
        setUser(user);
        console.log(user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) =>
        setError("The email address is already in use by another account.")
      );
  };
  const onLogout = () => {
    setUser([]);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
