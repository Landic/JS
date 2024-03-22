let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const calendarDiv = document.getElementById('calendar');
const table = document.getElementById('calendar-table');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function generateCalendar(year, month) {
  const firstDayOfMonth = new Date(year, month, 1).getDay(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const currentMonthName = monthNames[month];
  const prevMonthDaysToShow = (firstDayOfMonth === 0) ? 6 : (firstDayOfMonth - 1);
  const totalDaysToShow = prevMonthDaysToShow + daysInMonth;

  let calendarHTML = '<thead><tr><th colspan="7">' + currentMonthName + ' ' + year + '</th></tr>';
  calendarHTML += '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayCounter = 1;
  for (let i = 0; i < Math.ceil(totalDaysToShow / 7); i++) {
    calendarHTML += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < prevMonthDaysToShow) {
        const prevMonthDay = new Date(year, month, -prevMonthDaysToShow + j + 1);
        calendarHTML += '<td class="prev-month">' + prevMonthDay.getDate() + '</td>';
      } else if (dayCounter > daysInMonth) {
        const nextMonthDay = new Date(year, month + 1, dayCounter - daysInMonth);
        calendarHTML += '<td class="next-month">' + nextMonthDay.getDate() + '</td>';
        dayCounter++;
      } else {
        const dayClass = (i === 0 && j < prevMonthDaysToShow) ? 'prev-month' : 'current-month';
        calendarHTML += '<td class="' + dayClass + '" data-day="' + dayCounter + '">' + dayCounter + '</td>';
        dayCounter++;
      }
    }
    calendarHTML += '</tr>';
  }
  calendarHTML += '</tbody>';
  table.innerHTML = calendarHTML;
}
function showCalendar() {
  generateCalendar(currentYear, currentMonth);
}
showCalendar();
prevButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  showCalendar();
});
nextButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  showCalendar();
});
