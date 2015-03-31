
// for (var count = 1; count < 11; count ++) {
//   if (count === 5) {
//     document.write("Halfway there <br>");
//   }
//   else {
//     document.write(count + "<br>");
//   }
// }
// document.write("outside of loop");

////////////////////////////////////////////////
///////////////////////////////////////////////

// var students = ["Thomas", "Roger", "Amber", "Jennifer", "David", "Paul"];
// document.write("<p>My Students:</p>");
// for (var i = 0; i < students.length; i++) {
//   document.write(students[i] + "<br>");
// }

/////////////////////////////////////////////
/////////////////////////////////////////////

// var comp_parts = ['Monitors', 'Motherboards', 'Chips', 'Hard Drives', 'DVD', 'Cases', 'Power Supplies'];
// for (var i = 0; i < comp_parts.length; i++) {
//   document.write(comp_parts[i] +  "<br>");
// }

//////////////////////////////////////////////////
/////////////////////Comparison function//////////
//////////////////////////////////////////////////

// var fruits = [2, 3, 1, 20];
// function mysort(first, second) {
//   if (first > second) {
//     return 1;
//   }
//   else if (first < second) {
//     return -1;
//   }
//   else {
//     return 0;
//   }
// }
// document.write(fruits.sort(mysort))

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// var students = [ ["Thomas", 92, 90],
//                  ["Roger", 87, 81],
//                  ["Amber", 81, 85],
//                  ["Jennifer", 99, 100]
//                  ];

// // for(i = 0; i <students.length; i++) {           //loops over outer array
// //   for (j = 0; j <students[i].length; j++) {     //loops over inner array
// //     if (j===0) {                                //checks to see if item is at index 0
// //       document.write(students[i][j] + ": ");    //display students name
// //     } else if (j === students[i].length-1) {    //checks to see if item is at last index
// //       document.write(students[i][j] + "<br>");  //display grade
// //     } else {
// //         continue;
// //     }
// //   }
// // }
// //////////////////////////////////////////////////
// /////////////underscore///////////////////////////
// //////////////////////////////////////////////////
// _.each(students, function(val){
//   document.write(val[0] + ":" + val[1] + "<br>")
// })
// //////////////////////////////////////////////////

var computer_parts = [["Monitors", "LCD Screens", "Vibrant Colors"],
                      ["Motherboards", "Fast"],
                      ["Chips, Pentium", "Very Fast"],
                      ["Hard Drives", "100-500 GB", "Fast Reading"],
                      ["DVD-ROMs", "Burn CDs", "Burn DVDs", "Listen to both!"],
                      ["Cases", "All Sizes", "Choice of Colors"],
                      ["Power Supplies", "We can get one for any computer!"]
                      ];

       var i = 0;
         var j = 0;
         for (i = 0; i < computer_parts.length; i++) {
           for (j = 0; j < computer_parts[i].length; j++) {
             if (j === 0) {
               document.write(computer_parts[i][j] + ": ");
             } else if (j === computer_parts[i].length -1) {
                 document.write(computer_parts[i][j] + "<br>");
             } else {
                 document.write(computer_parts[i][j] + ", ");
             }
} }

// _.each(computer_parts, function(parts) {
//   document.write(parts[0] + " : " + parts[1] + ", " + parts[2] + "<br>")
// })

