"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock логика авторизации
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock пользователь
      const mockUser: User = {
        id: "1",
        name: "Иван Иванов",
        email,
        phone: "+7 (901) 640-40-40",
        role: email.includes("admin") ? "admin" : "user",
      };

      setUser(mockUser);
      localStorage.setItem("authUser", JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string, phone?: string) => {
      setIsLoading(true);
      try {
        // Mock логика регистрации
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name,
          email,
          phone,
          role: "user",
        };

        setUser(mockUser);
        localStorage.setItem("authUser", JSON.stringify(mockUser));
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setUser(null);
      localStorage.removeItem("authUser");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin" || false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
