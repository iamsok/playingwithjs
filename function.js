// var mycar = "Honda";
// var paycheck = 1200;

// function new_car() {
//   var mycar = "Ferrari";
//   var paycheck = 3500;
//   window.alert("You need $" + paycheck + " to get a " + mycar);
// }

// new_car();
// window.alert("You need $" + paycheck + " to have a " + mycar);

//////////////////////////////////////////////////////
///////////////////arguments//////////////////////////
//////////////////////////////////////////////////////

// function check_alert(pcheck, car) {
//   if (pcheck && car) {
//     window.alert("You make $" + pcheck + " and drive a " + car);
//   }
//   else {
//     window.alert("My arguments are missing");
//   }
// }

// var pay = 1;

// check_alert(pay, horse);

/////////////////////////////////////////////////////
/////////////////function expressions////////////////
/////////////////////////////////////////////////////

// var send_alert = function(x, y) {
//   window.alert(x + y);
// };
// send_alert("This is ", "working!");

/////////////////////////////////////////////////////
////////////////anonymous functions//////////////////
/////////////////////////////////////////////////////

// function do_not_click() {
//   window.alert("Do not click");
// }
// document.onclick = do_not_click;
// //or//
// document.onclick = function() {
//   window.alert("Do not click on my page!");
// };
/////////////////////////////////////////////////////

// function car_cost(mycar, paycheck) {
//   window.alert("You have a " + mycar + "and make $" +paycheck);
// }
// function get_added_text() {
//   var x = "This project ";
//   var y = "is almost fun!";
//   var together = x + y;
//   return together;
// }
// car_cost("mustang", 1500);
// var alerttext=get_added_text();
// window.alert(alerttext);

////////////////////////////////////////////////////

// var myname = "David"; //global

// function say_name() {  //global
//   var mydog = "Bogey";

//   function say_food() {
//     var myfood = "Pizza";
//     window.alert(myname + " and " + mydog + " like " + myfood);
//   }
//   window.alert(myname + " has a dog named " + mydog);
//   say_food();
// }

// say_name();

////////////////////////////////////////////////////

function display_HTML() {
  var myheading = "<h1>Hello, World!</h1>"
  var mytext = "<p>While it is nice to know you world, there are only some things that I am comfortable sharing in a global context. You can’t alter the variable that holds this text outside of the function that contains it! Ha!</p>";
  document.write(myheading + mytext);
}
display_HTML();
