'use strict';

const newDate = new Date();
let day = ('0' + newDate.getDate()).slice(-2);
console.log(day);
console.log(typeof day);
let month = ('0' + (newDate.getMonth() + 1)).slice(-2);
console.log(month);
console.log(typeof day);
let year = newDate.getFullYear();
console.log(year);
console.log(typeof day);
const currentDate = year + '-' + month + '-' + day;
console.log(currentDate);

document.querySelector('#calculation-date').value = currentDate;


