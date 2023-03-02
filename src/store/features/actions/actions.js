import * as ACTION_TYPES from '../actions/action_type';

export const login = data => {
  return {
    type: ACTION_TYPES.LOGIN,
    username: data.username,
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
