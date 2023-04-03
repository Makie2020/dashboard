/* eslint-disable prettier/prettier */
export interface RoomDataExtended {
  image: any;
  id: string;
  room_number: number;
  room_type: string;
  name: string;
  amenities: string[];
  price: string;
  discount: string;
  discountPercent: number | null;
  offer_price: string;
  status: string;
}

export interface RoomState {
  rooms: RoomDataExtended[] | [],
  room: RoomDataExtended| null | string[]|undefined,
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}