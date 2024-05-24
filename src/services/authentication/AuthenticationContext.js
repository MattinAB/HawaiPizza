import React, { createContext, useState } from "react";
import { loginRequest } from "./AuthenticationService";
import "firebase/compat/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(({ user }) => {
        setUser(user);
        setIsLoading(false);
        console.log(user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log("error to get user", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
