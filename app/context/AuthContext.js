"use client";

import { useState }from "react";
import { createContext } from "react";
import { useContext } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Track logged-in user

  const login = (userData) => setUser(userData); // Login function
  const logout = () => setUser(null); // Logout function

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);