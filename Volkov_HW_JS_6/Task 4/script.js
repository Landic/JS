let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let company = document.getElementById("company");

function sortTable(columnIndex) {
  let table = document.querySelector('table');
  let tb = table.querySelector('tbody');
  let tr = Array.from(tb.querySelectorAll('tr'));

  tr.sort((x, y) => {
    let Value1 = x.cells[columnIndex].textContent.trim();
    let Value2 = y.cells[columnIndex].textContent.trim();
    if (columnIndex === 2) return parseInt(Value1, 10) - parseInt(Value2, 10);
    return Value1.localeCompare(Value2);
  });
  tr.forEach(row => tb.removeChild(row));
  tr.forEach(row => tb.appendChild(row));
}
firstname.addEventListener("click", function(e){
  sortTable(0);
});
lastname.addEventListener("click", function(e){
  sortTable(1); 
});
age.addEventListener("click", function(e){
  sortTable(2); 
});
company.addEventListener("click", function(e){
  sortTable(3);
});