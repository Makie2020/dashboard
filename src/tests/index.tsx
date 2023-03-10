/* eslint-disable prettier/prettier */
interface Booking {
  checkIn: string;
  checkOut: string;
}

class Room {
  name: string;
  bookings: Booking[];
  rate: number;
  discount: number;

  constructor(name:string, bookings:Booking[], rate: number, discount:number) {
    this.name = name;
    this.bookings = bookings;
    this.rate = rate;
    this.discount = discount
  }

  isOccupied(date: Date) {
    for (let i = 0; i < this.bookings.length; i++) {
      const checkIn = new Date(this.bookings[i].checkIn);
      const checkOut = new Date(this.bookings[i].checkOut);
      return checkIn < date && date <= checkOut;
    } 
  }

  occupancyPercentage(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate)
    let count = 0;
    const dates: Date[] = [];
    while (start <= end) {
      dates.push(start);
      start.setDate(start.getDate() + 1);
    }
   if(dates.length > 0){
      dates.forEach((item)=> {
        if (this.isOccupied(item)) count++
      })
    }
    return  Math.floor((count * 100) / dates.length);
  }

  totalOccupancyPercentage(startDate: string, endDate:string) {
    let totalOccupancy = 0
    this.bookings.forEach((booking) => {
      console.log(booking)
      totalOccupancy += this.occupancyPercentage(startDate, endDate)
    })
    const totalPercentage = !isNaN(totalOccupancy) ? totalOccupancy / this.bookings.length : totalOccupancy
    return totalPercentage
  }

  availableRooms(startDate: string, endDate: string) {
    const availablerooms: string[] = [];
    this.bookings.forEach((room:any) => {
        if (this.occupancyPercentage(startDate, endDate) === 0) { 
            availablerooms.push(room);
        }
    });
    return availablerooms;
  }
}
interface RoomData {
  roomRate: number;
  discount: number;
}

class Booking {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  room: RoomData;
  discount: number;

  constructor(name: string, email: string, checkIn: string, checkOut: string, room: RoomData, discount: number) {
    this.name = name;
    this.email = email;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.room = room;
    this.discount = discount
  }
  isFee () {
    const price = this.room.roomRate -((this.room.roomRate / 100) * this.discount)
    return price
  }
}

module.exports = {Room, Booking}