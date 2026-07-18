import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const TOKEN_KEY = "party_menu_token";
const USER_KEY = "party_menu_user";
const SIGNIN_URL = "https://serverless-api-teal.vercel.app/api/auth/signin";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    const savedUser = localStorage.getItem(USER_KEY);

    if (savedToken) {
      setToken(savedToken);
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem(USER_KEY);
      }
    }

    setInitializing(false);
  }, []);

  const signin = async (email, password) => {
    setLoading(true);

    try {
      const response = await fetch(SIGNIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Invalid email or password");
      }

      const authToken = data.data.token;
      const authUser = data.data.user;

      localStorage.setItem(TOKEN_KEY, authToken);
      localStorage.setItem(USER_KEY, JSON.stringify(authUser));

      setToken(authToken);
      setUser(authUser);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Something went wrong. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken("");
    setUser(null);
  };

  const value = {
    token,
    user,
    loading,
    initializing,
    signin,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
