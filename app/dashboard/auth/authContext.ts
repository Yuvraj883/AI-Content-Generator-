"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { signIn, signOut, getToken, isAuthenticated } from "./authService";

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    if (isAuthenticated()) {
      setUser({ token: getToken() }); // You may fetch user details from API here
    }
  }, []);

  async function login(email: string, password: string) {
    await signIn(email, password);
    setUser({ token: getToken() });
    setIsLoggedIn(true);
  }

  function logout() {
    signOut();
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
