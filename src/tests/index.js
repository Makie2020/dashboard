/* eslint-disable prettier/prettier */
class Room {
  constructor(name, bookings, rate, discount) {
    this.name = name;
    this.bookings = bookings;
    this.rate = rate;
    this.discount = discount
  }

  isOccupied(dateString) {
    const date = new Date(dateString);
    for (let i = 0; i < this.bookings.length; i++) {
      const checkIn = new Date(this.bookings[i].checkIn);
      const checkOut = new Date(this.bookings[i].checkOut);
      return checkIn < date && date <= checkOut;
    } 
  }

  occupancyPercentage(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date (endDate)
    let count = 0;
    const dates = [];
    while (start <= end) {
      dates.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
   if(dates.length > 0){
      dates.forEach((item)=> {
        if(this.isOccupied(item)) count ++
      })
    }
    return  Math.floor((count * 100) / dates.length);
  }

  totalOccupancyPercentage(startDate, endDate) {
    let totalOccupancy = 0
    this.bookings.forEach(booking => {
        totalOccupancy += booking.occupancyPercentage(startDate, endDate)
    })
    const totalPercentage = !isNaN(totalOccupancy) ? totalOccupancy / this.bookings.length : totalOccupancy
    return totalPercentage
  }

  availableRooms(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date (endDate)
    const availablerooms = [];
    this.bookings.forEach((room) => {
        if (room.occupancyPercentage(start, end) === 0) { 
            availablerooms.push(room);
        }
    });
    return availablerooms;
  }
}
class Booking {
  constructor(name, email, checkIn, checkOut, room, discount) {
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