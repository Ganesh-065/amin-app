import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    // Mock login logic (replace with real API call)
    if (username === "admin" && password === "password") {
      setUser(username);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (username: string, password: string) => {
    // Mock register logic (replace with real API call)
    if (username && password) {
      setUser(username);
    } else {
      throw new Error("Registration failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
