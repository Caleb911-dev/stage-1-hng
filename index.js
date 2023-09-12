
const days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
let currentDay = days[today.getDay()];

let time = today.getUTCMilliseconds();

document.getElementById("time").innerHTML = time;
document.getElementById("day").innerHTML = currentDay;


