/* eslint-disable prettier/prettier */
import * as ACTION_TYPES from './action_type';

export const login = data => {
  return {
    type: ACTION_TYPES.LOGIN,
    user: data.user,
    token: data.token,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
export const update = () => {
  return {
    type: ACTION_TYPES.UPDATE,
  };
};