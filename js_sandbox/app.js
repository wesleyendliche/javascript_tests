let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); //starts with 0 as January
val = today.getDate();
val = today.getDay(); //5 is Friday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); //changes month
birthday.setDate(1);
birthday.setFullYear(1992);
birthday.setHours(1);
birthday.setMinutes(12);
birthday.setSeconds(25);

console.log(birthday);