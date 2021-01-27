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

 

            //   Arguments
// function sum1 (a,b){
//     let total = 0;
//     for (let value of arguments)
//       total += value;
//     return total
    
// }
// console.log(sum1(1,5,2))
  // 



                     // Rest Operator
  
// function sum(...args){
  
//  return   args.reduce((a,b) => a+b)
    
// } 
// console.log(sum(1,2,3,4,5,10))


// function sum(discount, ...prices ){
//     const total =  prices.reduce((a,b) => a+b)
//        return total * (1-discount)
//    } 
// console.log(sum(0.1,20,30,1))


              // Default Parameters

// function interest (principle, rate, years) {
//   rate = rate || 3;
//   years = years || 5;
//      return principle * rate / 100 * years;
// }

// console.log(interest(10000));



        // or


// function interest (principle, rate = 3, years) {
//      return principle * rate / 100 * years;
// }
// console.log(interest(10000,undefined,5));
