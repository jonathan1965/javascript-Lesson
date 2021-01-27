// // function Declaration

// function walk() {
//     console.log('walk')
// }
// // Named functioN expression
// let run = function walk() {
//    console.log('run');
// };
// // Anonymous  functioN expression
// let run1 = function () {
//     console.log('run me');
//  };
//  run1();
//  let move = run1;
//  move();



        //   Hooisting

         // function Declaration

//  walk();
// function walk() {
//     console.log('walk')

// }
//         // Named functioN expression
// run();  //can run
// let run = function walk() {
//     console.log('run');
//  };
//  // Anonymous  functioN expression
//  let run1 = function () {
//      console.log('run me');
//   };
//   run1();
//   let move = run1;
//   move();




// function sum (a,b){
//     return a+b;
// }
// console.log(sum(1,5 ))


function sum1 (a,b){
    let total = 0;
    for (let value of arguments)
      total += value;
    return total
    
}
console.log(sum1(1,5,2))
