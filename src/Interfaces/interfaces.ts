/* eslint-disable prettier/prettier */
export type nameProp = {
  name: string;
};

export interface Action {
  type: string;
  payload: any;
}

export interface Body {
  body: {};
}


export interface AuthState {
  isAuth: boolean;
  name: string| undefined;
  token: string|undefined;
  dispatch?: (action:Action) => void;
};
