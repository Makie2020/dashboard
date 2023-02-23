import { createContext, useContext, useReducer } from "react";
import  { AuthReducer, initialState } from "../store/reducers/authReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{state, dispatch}}>
    {children}
  </AuthContext.Provider>
};

export const useAuth = () => {
  return useContext(AuthContext);
};
