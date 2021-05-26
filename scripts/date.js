function now(){
const date = new Date();
const what_time = document.getElementById("time");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const numerals = ["st", "nd", "rd", "th"];
const dayw = days[date.getDay()];
const day = date.getDate();
const numeral = function(day){
    if(day > 3 && day > 21)
        return numerals[3];
    switch(day % 10){
        case 1: return numerals[0];
        case 2: return numerals[1];
        case 3: return numerals[2];
        default: return numerals[3];
    }
}
const month = months[date.getMonth()];
const year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if(hour < 10){
    hour = "0" + hour;
}
if(minute < 10){
    minute = "0" + minute;
}
if(second < 10){
    second = "0" + second;
}

const full_date = "Today is:" + "<br/>" + dayw + " the " + day + numeral() + " of " + month + ", " + year + " [" + hour + ":" + minute + ":" + second + "]";

what_time.innerHTML = full_date;
setInterval(() =>{
    now();
}, 1000);
}
window.onload = () => {
    now();
};