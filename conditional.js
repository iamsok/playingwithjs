// var haveookbook = "yes",
//     meatloafrecipe = "no";
// if (haveookbook === "yes") {
//   if (meatloafrecipe == "yes") {
//     window.alert("Recipe found");
//   }
//   else {
//     window.alert("Have the book but no recipe");
//   }
// else {
//     window.alert("You need a cookbook");
// }
// }
// /////////////////////////////////////////////
// //////////////conditionals///////////////////
// /////////////////////////////////////////////

// // var name = (condition) ? value1 : value2;
// var mynum = 1,
//     mymessage = "";
// mymessage = (mynumb === 1) ? "You win!" : "Try again";

/////////////////////////////////////////////////
//////////////////window.prompt//////////////////
/////////////////////////////////////////////////

// var username = window.prompt("Give me your name!", "");
// if (username === null || username === "") {
//   document.write("Hello, Nameless Person");
// }
// else {
//   document.write("Hello, " + username);
// }

var msg = "",
city = window.prompt("What is the name of your city?", "");

if ( (city === null) || (city === "") ) {
    msg = "No city entered. Cannot determine delivery availability.";
}
else {
  switch (city) {
  case "Johnstown" :
   msg = "We can have items delivered to you in 3 days.";
   break;
  case "Donville" :
  ￼￼￼       msg = "We can have items delivered to you in 1 week.";
    break;
  case "Danieltown" : // fall through
  case "Martyville" :
    msg = "We can have items delivered to you in 2 weeks.";
    break;
  default :
    msg = "Sorry! We do not deliver to your city yet.";
  }
}
document.write(msg);
