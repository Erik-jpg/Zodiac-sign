function myFunction(){
var zodiacSign = prompt ("What is your month of birth");


switch(zodiacSign) {
    
case "January":
    text = "Capricorn!"
    break;

case "Febuary":
    text = "Aquarius"
    break;

case "March":
    text = "Pisces"
    break;

case "April":
    text = "Aries"
    break;

case "May":
    text = "Taurus"
    break;

case "June":
    text = "Gemini"
    break;

case "July":
    text = "Cancer"
    break;

case "August":
    text = "Leo"
    break;

case "September":
    text = "Virgo"
    break;

case "October":
    text = "Libra"
    break;

case "November":
    text = "Scorpio"
    break;

case "December":
    text = "Sagittarius"
    break;

default:
    text = "Thats a new one for me!"

}
document.getElementById("demo").innerHTML =text;
}


//const dayOfTheWeek = parseInt(prompt("What day is it? using 1 -7, example: Monday is 1."));

//const dayOfTheWeekArray = [
    //"Monday",
    //"Tuesday",
    //"Wednesday",
    //"Thursday",
    //"friday",
   // "Saturday",
    //"Sunday",
//];

//const dayName= dayOfTheWeekArray[dayOfTheWeek -1];

//const errorMessage = "I'm sorry, I dont understand that day of the week.";

//alert (dayName || errorMessage);
