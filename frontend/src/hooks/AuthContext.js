import { createContext, useState, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
       api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} ;
  });

  const signIn = async (email, password) => {

    const response = await api.post("users/authenticate", {
      email: email,
      password: password,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });

  };

  const signOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setData({});
  }

  return (
    <AuthContext.Provider value={{  user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}

export {  AuthProvider, useAuth };
