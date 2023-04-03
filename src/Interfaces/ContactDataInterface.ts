/* eslint-disable prettier/prettier */
export interface ContactDataExtended {
  id: string,
  photo: string,
  date: string,
  time: string,
  full_name: string,
  email: string,
  phone_number: string,
  subject: string,
}

export interface ContactState {
  contact: [] | ContactDataExtended[],
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}