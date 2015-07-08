var date = new Date();
var theHour = date.getHours();

if (theHour < 10){
  theHour = "0" + theHour.toString();
} else {
  theHour = theHour.toString();
}
var theMinute = date.getMinutes().toString();

console.log(theHour + ":" + theMinute);
console.log(date);
console.log(date.getHours())
