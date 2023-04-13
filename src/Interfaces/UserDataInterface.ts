/* eslint-disable prettier/prettier */
export interface UsersDataExtended {
  photo: string,
  id: string,
  full_name: string,
  email: string,
  start_date: string,
  description: string,
  phone_number: string,
  status: string,
}

export interface UserState {
users: [] | UsersDataExtended[],
status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}