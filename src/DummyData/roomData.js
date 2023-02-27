import { faker } from '@faker-js/faker';
import room1 from "../assets/images/Room1.jpg";
import room from "../assets/images/Room2.jpg";

export const roomData = [{
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 112,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "AC, Shower, Double Bed, Towel",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 241,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "KAW",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 200,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "OKF",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 92,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "HYD",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 139,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "HLR",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 116,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "TWT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 176,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "AOA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 202,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "DEF",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 82,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "CLA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 23,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "PUL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 88,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "BVF",
  "price": 1253,
  "offer_price": 1127,
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 148,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "GUF",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 60,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "DVL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 178,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "POO",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 70,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "BGV",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 81,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "ELU",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 247,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "HRC",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 87,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "APY",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 74,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "MPU",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 199,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "HTW",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 16,
  "room_type": "Double bed",
  "name": "Deluxe A-91274",
  "amenities": "AAL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 237,
  "room_type": "Double bed",
  "name": "Deluxe A-91284",
  "amenities": "SLO",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 68,
  "room_type": "Double bed",
  "name": "Deluxe A-91284",
  "amenities": "PPS",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 43,
  "room_type": "Double bed",
  "name": "Deluxe A-91284",
  "amenities": "PDP",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 184,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "KFA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 104,
  "room_type": "Double bed",
  "name": "Deluxe A-91284",
  "amenities": "KIU",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 208,
  "room_type": "Double bed",
  "name": "Deluxe A-91284",
  "amenities": "YVC",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 82,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "PMV",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 156,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "CDI",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 244,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "LYE",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 193,
  "room_type": "Double bed",
  "name": "Deluxe A-91234",
  "amenities": "CRH",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 2,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "KBM",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 150,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "WDR",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 207,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "IWA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Occupied"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 131,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "BXT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 182,
  "room_type": "Double bed",
  "name": "Deluxe A-91254",
  "amenities": "KVL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 89,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "UTW",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status":"Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 133,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "IMF",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 41,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "EXT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 227,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "IBR",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 129,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "0",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 198,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "CHO",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 2,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "PWT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 202,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "ECS",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 117,
  "room_type": "Double bed",
  "name": "Deluxe A-91294",
  "amenities": "PHG",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 6,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "BAO",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 111,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "BHT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 202,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "IRB",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 150,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "UCY",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 239,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "POJ",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 65,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "CYB",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 243,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "MCB",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 193,
  "room_type": "Double bed",
  "name": "Deluxe A-91224",
  "amenities": "KSA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 195,
  "room_type": "Double bed",
  "name": "Deluxe A-91264",
  "amenities": "HKB",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 244,
  "room_type": "Double bed",
  "name": "Deluxe A-91264",
  "amenities": "PHA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 1,
  "room_type": "Single Bed",
  "name": "Deluxe A-91264",
  "amenities": "HKS",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 142,
  "room_type": "Single Bed",
  "name": "Deluxe A-91264",
  "amenities": "LMY",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 91,
  "room_type": "Single Bed",
  "name": "Deluxe A-91264",
  "amenities": "CZJ",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 162,
  "room_type": "Single Bed",
  "name": "Deluxe A-91264",
  "amenities": "AUV",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 116,
  "room_type": "Single Bed",
  "name": "Deluxe A-91264",
  "amenities": "BBM",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 159,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "PAC",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 149,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "PCQ",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 195,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "MAA",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 30,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "FYM",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 194,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "YCT",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 134,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "LPK",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 221,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "LPP",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 189,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "SYY",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 237,
  "room_type": "Single Bed",
  "name": "Deluxe A-91244",
  "amenities": "UVL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room1,
  "id": faker.random.numeric(5),
  "room_number": 114,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "AMS",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 167,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "RBR",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 134,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "RZR",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 176,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "ZQL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 32,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "BJL",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}, {
  "image" : room,
  "id": faker.random.numeric(5),
  "room_number": 45,
  "room_type": "Single Bed",
  "name": "Deluxe A-91241",
  "amenities": "Single Bed",
  "price": faker.commerce.price(100, 2500, 0, '€ '),
  "offer_price": faker.commerce.price(80, 2200, 0, '€ '),
  "status": "Available"
}]
