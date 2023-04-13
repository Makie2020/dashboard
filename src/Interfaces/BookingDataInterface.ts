/* eslint-disable prettier/prettier */
export interface BookingDataInterface {
  full__name: string,
  image: string,
  id: string,
  order_date: string,
  check_in: string,
  check_out: string,
  special_request: string,
  room_type: string,
  room_number: number,
  status: string,
  price: number,
}

export interface BookingState {
  bookings: [] | BookingDataInterface[],
  booking: BookingDataInterface | null | undefined;
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}