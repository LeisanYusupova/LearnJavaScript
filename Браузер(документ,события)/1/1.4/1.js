// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.


let table = document.getElementById('age-table');
table.getElementsByTagName('label');
table.querySelector('td');
let form = document.getElementsByName('search')[0];
form.querySelector('input');
let inputs = form.querySelectorAll('input') // найти все input
inputs[inputs.length-1] // взять последний
