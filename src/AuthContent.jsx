import { createContext, useContext, useState, useEffect } from "react";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status (using localStorage or any auth service)
    const loggedIn = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(!!loggedIn); // Convert to boolean
  }, []);

  const login = () => {
    // Simulate login (you can replace this with an actual login function)
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Simulate logout
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
