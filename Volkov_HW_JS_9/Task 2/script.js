document.getElementById("showDateText").addEventListener("click", showDateText);
document.getElementById("checkPast").addEventListener("click", checkPast);
document.getElementById("checkLeapYear").addEventListener("click", checkLeapYear);
document.getElementById("showNextDate").addEventListener("click", showNextDate);

function showDateText() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new ExtendedDate(dateInput);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.innerHTML += "<p>" + inputDate.getDateText() + "</p>";
}

function checkPast() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new ExtendedDate(dateInput);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.innerHTML += "<p>Является ли прошедшей: " + (inputDate.isPast() ? "Да" : "Нет") + "</p>";
}

function checkLeapYear() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new ExtendedDate(dateInput);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.innerHTML += "<p>Является ли год високосным: " + (inputDate.isLeapYear() ? "Да" : "Нет") + "</p>";
}

function showNextDate() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new ExtendedDate(dateInput);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.innerHTML += "<p>Следующая дата: " + inputDate.getNextDate().toLocaleDateString() + "</p>";
}

class ExtendedDate extends Date {
    constructor(dateString) {
        super(dateString);
    }

    getDateText() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const day = this.getDate();
        const month = months[this.getMonth()];
        return `${day} ${month}`;
    }

    isPast() {
        const currentDate = new Date();
        return this < currentDate;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}