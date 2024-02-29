const th = document.querySelectorAll('th');
const td = document.querySelectorAll('td');

function hideAllTd() {
    td.forEach((el) => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
}

function showTd(index) {
    td[index].style.display = "table-row";
    td[index].classList.add('active');
}

function toggleTdDisplay(index) {
    if (td[index].classList.contains('active')) {
        hideAllTd();
    } else {
        hideAllTd();
        showTd(index);
    }
}

th.forEach((el, index) => {
    el.addEventListener('click', () => {
        toggleTdDisplay(index);
    });
});