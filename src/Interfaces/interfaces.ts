/* eslint-disable prettier/prettier */
export type nameProp = {
  name: string;
};

export interface Action {
  type: string;
  payload: any;
}

export interface AuthState {
  isAuth: boolean;
  user: string| undefined;
  token: string|undefined;
  dispatch?: (action:Action) => void;
};
