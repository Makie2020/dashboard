/* eslint-disable prettier/prettier */
const {Room, Booking} = require("./index")

const dataBooking = {
  name : "Aaron",
  email: "123@google.com",
  checkIn: '2022-12-01',
  checkOut: '2022-12-31',
  room: {name: "Deluxe", roomRate: 100},
  discount: 10,
  discountPrice: 90
}
const dataSecondBooking = {
  checkIn: '2022-11-16',
  checkOut: '2022-11-30',
}

const dataRoom = {
  name : "Deluxe",
  bookings: [dataBooking, dataSecondBooking],
  rate: 100,
  discount: 10
}
const secondRoom = {
  name : "Deluxe",
  bookings: [],
  rate: 100,
  discount: 10
}

let testRoom;
let testBooking;
let secondTestRoom

describe("demonstrate the room data", () => {
  beforeEach(() => {
    testRoom = new Room(dataRoom.name, dataRoom.bookings, dataRoom.rate, dataRoom.discount);
    secondTestRoom = new Room (secondRoom.name, secondRoom.bookings, secondRoom.rate, secondRoom.discount)
  });
  test("show data", () => {
    expect(testRoom.name).toBe(dataRoom.name);
    expect(testRoom.rate).toBe(dataRoom.rate);
    expect(testRoom.discount).toBe(dataRoom.discount);
  })
  test("The room is occupied", () => {
    expect(testRoom.isOccupied('2022-12-15')).toBeDefined();
    expect(testRoom.isOccupied('2022-12-15')).toBeTruthy();
  })
  test("The room is not occupied", () => {
    expect(testRoom.isOccupied('2022-11-15')).toBeDefined();
    expect(testRoom.isOccupied('2022-11-15')).toBeFalsy();
  })
  test("occupancyPercentage showing correct", () => {
    expect(testRoom.occupancyPercentage('2022-11-15', '2022-12-31')).toBeDefined();
    expect(testRoom.occupancyPercentage('2022-11-15', '2022-12-31')).toBe(63);
  })
  test("occupancyPercentage showing incorrect", () => {
    expect(testRoom.occupancyPercentage('2022-11-15', '2022-12-31')).not.toBe(10);
  })
  test("total occupancyPercentage including all rooms", () => {
    const multipleRoom = (testRoom, secondTestRoom)
    expect(multipleRoom.totalOccupancyPercentage('2022-11-15', '2022-12-31')).toBeDefined();
  })
  test("total occupancyPercentage including all rooms false", () => {
    const multipleRoom = (testRoom, secondTestRoom)
    expect(multipleRoom.totalOccupancyPercentage('2022-11-15', '2022-12-31')).not.toBe(0);
  })
  test("available Rooms", () => {
    expect(secondTestRoom.availableRooms('2022-10-15', '2022-10-31')).toBeDefined();
    expect(secondTestRoom.availableRooms('2022-10-15', '2022-10-31')).toEqual([]);
  })
  test("available Rooms false", () => {
    expect(secondTestRoom.availableRooms('2022-12-02', '2022-12-16')).not.toBe(0);
  })
});

describe("demonstrate all the booking data", () => {
  beforeEach(() => {
    testBooking = new Booking(dataBooking.name, dataBooking.email, dataBooking.checkIn, dataBooking.checkOut, dataBooking.room, dataBooking.discount);
  });
  test("show data", () => {
    expect(testBooking.name).toBe(dataBooking.name);
    expect(testBooking.email).toBe(dataBooking.email);
    expect(testBooking.discount).toBe(dataBooking.discount);
  })
  test("show fee with discount", () => {
    expect(testBooking.isFee(100)).toBe(dataBooking.discountPrice);
  })
});