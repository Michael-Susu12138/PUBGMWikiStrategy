import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in when the app loads
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}api/auth/login/currentuser`
        );
        setUser(response.data.user); // Set the user in state
      } catch (error) {
        // Handle error or set user to null if not authenticated
        setUser(null);
      }
    };
    checkLoggedIn();
  }, []);

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_API}api/auth/logout`);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
