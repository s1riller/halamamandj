"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
loading: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Проверка аутентификации при загрузке
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Проверяем наличие токена в localStorage
        const token = localStorage.getItem('auth_token');
        
        if (token) {
          // Здесь можно сделать запрос к API для проверки токена
          // Для демо используем моковые данные
          const mockUser: User = {
            id: '1',
            email: 'user@example.com',
            name: 'Иван Иванов',
            role: 'user',
          };
          
          // Имитация задержки сети
          await new Promise(resolve => setTimeout(resolve, 500));
          
          setUser(mockUser);
        }
      } catch (error) {
        console.error('Ошибка проверки аутентификации:', error);
        localStorage.removeItem('auth_token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Проверка моковых данных
      if (email === 'user@example.com' && password === 'password123') {
        const mockUser: User = {
          id: '1',
          email,
          name: 'Иван Иванов',
          role: 'user',
        };
        
        // Сохраняем токен (в реальном приложении токен придет с сервера)
        localStorage.setItem('auth_token', 'mock_jwt_token');
        setUser(mockUser);
      } else {
        throw new Error('Неверный email или пароль');
      }
    } catch (error) {
      console.error('Ошибка входа:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Удаляем токен
      localStorage.removeItem('auth_token');
      setUser(null);
    } catch (error) {
      console.error('Ошибка выхода:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Создаем мокового пользователя
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'user',
      };
      
      // Сохраняем токен
      localStorage.setItem('auth_token', 'mock_jwt_token');
      setUser(mockUser);
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    loading,
  };

  // ВАЖНО: return должен быть на верхнем уровне функции компонента
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}