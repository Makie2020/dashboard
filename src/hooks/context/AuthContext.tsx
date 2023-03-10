/* eslint-disable prettier/prettier */
import React,  { createContext, useReducer, useEffect, useContext } from 'react'
import * as ACTION_TYPES from '../Actions/action_type'

interface User {
  user: string|null;
  token: string|null;
  isAuth: boolean;
}

export const useAuth = () => {return useContext(AuthContext)}

const local = localStorage.getItem("Dashboard");
const initialState = local ? JSON.parse(local) : {isAuth: false, user:"", token:""}
export const AuthContext = createContext(initialState)

const AuthReducer = (state: User, action:any) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        isAuth: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case ACTION_TYPES.AUTH_IS_READY:
      return { 
        user: action.payload.user, 
        token: action.payload.token, 
        isAuth: true 
      }; 
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
 const [user, dispatch] = useReducer(AuthReducer, initialState);
 useEffect(() => {
  localStorage.setItem("Dashboard", JSON.stringify(user))
  }, [user]);
  return (
    <AuthContext.Provider value={{user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};