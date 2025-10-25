
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { User } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userType: 'user' | 'admin') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userType: 'user' | 'admin') => {
    // This is a mock login. In a real app, you'd get user data from an API.
    const mockUser: User = userType === 'admin' 
        ? { id: 'admin01', email: 'admin@healthfirst.com', name: 'Admin User', role: 'admin' }
        : { id: 'user01', email: 'jane.doe@example.com', name: 'Jane Doe', role: 'user' };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
