////////////////////////////////////////////////
//////////////////object constructor////////////
////////////////////////////////////////////////

// var car = new Object()  //creates a new object called car
// car.seats = "cloth";    //car has a property named seats, assigned a value "cloth"
// car.engine = "V-6";
// car.show_feature = function() {
//   window.alert("car: " + car.seats + " seats, " + car.engine + " engine");
// };

// car.show_feature();

////////////////////////////////////////////////
///////////////object literal///////////////////
////////////////////////////////////////////////

// var object_name = {
//   property_name: value,
//   property_name: value
// };
// var car = {
//   seats: "cloth",
//   engine: "V-6",
//   show_feature: function() {
//     window.alert("car: " + car.seats + " seats" + car.engine + " engine");
//   }
// };
// car.show_feature();
///////////////////////////
// var computer = {
//   speed: "4GHZ",
//   hd: "500GB",
//   ram: "8GB",
//   display_value: function() {
//     document.write("Computer Speed: " + computer.speed + "<br>" + "Computer Hard Disk: " + computer.hd + "<br>" + "Computer Ram: " + computer.ram + "<br>");
//   }
// };

// computer.display_value();

///////////////////////////////////////////
// ///////////constructor function////////////
// ///////////////////////////////////////////

// function Car(seats, engine, radio) {   //takes 3 parameter
//   this.seats = seats;                  //parameter values are assigned to the properties of the object
//   this.engine = engine;
//   this.radio = radio;
// }

// var work_car = new Car("cloth", "V-6", "Tape Deck");   //instance of object is created. send arguments to be used as property values.
// var fun_car = new Car("leather", "V-8", "CD Player");
// var work_engine_type = work_car.engine;
// var fun_engine_type = fun_car.engine;   //property of work_car instance of the Car object is assigned to independent variable

// document.write("I want a car with " + fun_car.seats + " seats.<br>");
// document.write("It also needs a " + work_car.engine + " engine.<br>");
// document.write("Oh, and I would like a " + fun_car.radio + " also.")

//////creating method function outside of constructor function////
// function Car(seats, engine, radio) {
//   this.seats = seats;
//   this.engine = engine;
//   this.radio = radio;
//   this.describe = describe_car;
// }
// function describe_car() {
//   document.write("This amazing car has these features: ");
//   document.write(this.seats + " seats," + this.engine + " engine ");
//   document.write(this.radio);
// }

// var work_car = new Car("cloth", "V-6", "Tape Deck");

// work_car.describe();

////////////////////////////////////////////////
////////////////prototypes//////////////////////
////////////////////////////////////////////////
// function Car(seats, engine, radio) {
//   this.seats = seats;
//   this.engine = engine;
//   this.radio = radio;
// }
// Car.prototype.locks = "automatic";
// var work_car = new Car("cloth", "V-6", "Tape Deck");
// var family_car = new Car("cloth", "V-4", "CD Changer");
// window.alert(work_car.locks);
// window.alert(family_car.locks);

///////////////////////////////////////////////
////////////for-in loop////////////////////////
////////////////////////////////////////////////
function Car(seats, engine, radio) {
  this.seats = seats;
  this.engine = engine;
  this.radio = radio;
}
var work_car = new Car("cloth", "V-6", "Tape Deck");
for (var x in work_car) {
  if (work_car.hasOwnProperty(x))
  document.write(x + ": " + work_car[x] + "<br>");
}
