import React, { createContext, useState, useEffect } from "react";
import API from "../api/axios";

// 1. Global Context create kiya
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(true);

  // 2. Token badalne par user profile load karna
  useEffect(() => {
    if (token) {
      fetchUserProfile();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  // 3. Backend se user details aur wallet balance fetch karna
  const fetchUserProfile = async () => {
    try {
      // Notice karo: Lamba URL likhne ki zaroorat nahi, sirf endpoint kaafi hai
      const res = await API.get("/api/auth/profile");
      setUser(res.data);
    } catch (err) {
      console.error("Session expired or invalid token:", err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // 4. Login function
  const login = (userData, jwtToken) => {
    localStorage.setItem("token", jwtToken);
    setToken(jwtToken);
    setUser(userData);
  };

  // 5. Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};