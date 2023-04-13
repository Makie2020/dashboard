/* eslint-disable prettier/prettier */
import FullCalendar from '@fullcalendar/react'

export const Calender = 
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    initialDate: '2023-02-12',
    events: [
      {
        start: '2023-02-11T10:00:00',
        end: '2023-02-11T16:00:00',
        display: 'background',
        color: '##E23428'
      },
      {
        start: '2023-02-13T10:00:00',
        end: '2023-02-13T16:00:00',
        display: 'background',
        color: '#ff9f89'
      },
      {
        start: '2023-02-24',
        end: '2023-02-28',
        overlap: false,
        display: 'background'
      },
      {
        start: '2023-02-06',
        end: '2023-02-08',
        overlap: false,
        display: 'background'
      }
    ]
  });

  calendar.render();
});