import * as ACTION_TYPES from "../actions/action_type";

export const initialState = {
  isAuth: false,
  username: "",
  token: "",
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuth: true,
        username: action.value.username,
        token: action.value.token,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        isAuth: false,
        username: null,
        token: null,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        isAuth: false,
        username: action.value.username,
        token:  action.value.token,
      };
    default:
      return state;
  }
};