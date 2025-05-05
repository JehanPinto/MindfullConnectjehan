"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "@/app/components/types"; // Import the User type from types.ts

interface AuthContextType {
  user: User | null; // Use the imported User type
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Use the imported User type
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async (token: string) => {
    try {
      console.log("Fetching user with token:", token);
      const res = await fetch("/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response status from /api/auth/user:", res.status);
      const data = await res.json();
      console.log("Response from /api/auth/user:", data);
      if (res.ok) {
        const normalizedUser = { ...data.user, _id: data.user.id || data.user._id };
        setUser(normalizedUser);
        localStorage.setItem("user", JSON.stringify(normalizedUser)); // Update localStorage
      } else {
        console.error("Failed to fetch user, but keeping user in state:", data.error);
      }
    } catch (error) {
      console.error("Error fetching user, but keeping user in state:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const decoded: any = jwtDecode(storedToken);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setToken(null);
          setUser(null);
          setIsLoading(false);
        } else {
          const parsedUser = JSON.parse(storedUser);
          if (!parsedUser._id) {
            throw new Error("Stored user is missing _id");
          }
          console.log("Loaded user from localStorage:", parsedUser);
          setUser(parsedUser);
          setToken(storedToken);
          fetchUser(storedToken);
        }
      } catch (error) {
        console.error("Invalid token or user:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log("Making login request with email:", email);
      // Clear localStorage before setting new user/token
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("Response status from /api/auth/login:", res.status);
      const data = await res.json();
      console.log("Response from /api/auth/login:", data);
      if (res.ok) {
        const normalizedUser = { ...data.user, _id: data.user.id || data.user._id };
        setUser(normalizedUser);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(normalizedUser));
        console.log("Login successful, user:", normalizedUser);
        window.location.href = "/chatinterface";
      } else {
        throw new Error(data.error || "Login failed");
      }
    } catch (error) {
      console.log("Error in login function:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};