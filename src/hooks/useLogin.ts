/* eslint-disable prettier/prettier */
import { useAuth } from '../App';

export const useLogin = () => {
  const { dispatch } = useAuth();

  const login = async (name, token) => {
    try {
      if (dispatch) {
        dispatch({type: "LOGIN", payload: {name, token}})
      }
    } catch (err) {
      alert("Username and/or Password is incorrect.")
      console.log(err.message)
    }
  };
  return { login };
};