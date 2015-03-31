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

function car_cost(mycar, paycheck) {
  window.alert("You have a " + mycar + "and make $" +paycheck);
}
function get_added_text() {
  var x = "This project ";
  var y = "is almost fun!";
  var together = x + y;
  return together;
}
car_cost("mustang", 1500);
var alerttext=get_added_text();
window.alert(alerttext);

