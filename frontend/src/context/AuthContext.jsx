import { createContext, useMemo, useState } from "react";
import { loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const persistUser = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem("user", JSON.stringify(nextUser));
  };

  const value = useMemo(
    () => ({
      user,
      login: async (credentials) => persistUser(await loginUser(credentials)),
      register: async (payload) => persistUser(await registerUser(payload)),
      logout: () => {
        setUser(null);
        localStorage.removeItem("user");
      },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
