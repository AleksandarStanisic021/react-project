import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
}
