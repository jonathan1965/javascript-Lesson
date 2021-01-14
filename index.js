// Operators 


// Arithmetic
// Assignment
// comparison
// logical
// bitwise


// 1.Aritmetic Operators

// let x=10;
// let y=3;

// console.log(x+y)
// console.log(x-y)
// console.log(x%y)
// console.log(x/y)
// console.log(x*y)
// console.log(x**y)


//increament (+++)

// console.log(x++)
// console.log(x)

// // Decreament

// console.log(--x)




//  2.Assigmnet Operators

// let x= 10; 
// x+=5;
// console.log(x)

    // /Relationa

// let x = 1;
// console.log(x>=0);
// console.log(x>=1);
// console.log(x<1);
// console.log(x<=1);



  // Equality
//   console.log(x===1);
//   console.log(x!==1);

//   strict Equality Operator (same type and same value)
//  console.log(1===1)
//  console.log(1==="1")
 
// //  Lose Equality operator
//  console.log(1==1)
//  console.log(1=="1")
//  console.log(1==true)


    //  3.Ternary Operator



// if a customer has more than 100 points,
//  they are a gold customer otherwise
//  they are silver customer

// let point = 101;
// let type = point>100 ? 'gold' : 'silver';

// console.log(type);


// 4.logical operators

// Logical And (&&) Returns True if both operands are true
// Logical or (||) this returns  true when one in the  operands is TRUE
// 

// console.log(true && true)
 
// let highIncome = false;
// let goodreditScore= false;

// // let eligibleForLoan = highIncome && goodreditScore;

// let eligibleForLoan = highIncome || goodreditScore;



// // Logical NOT (!) Returns True if both operands are true

// let applicationRefused = !eligibleForLoan;
// console.log(applicationRefused);


    //  Logical Operators

    //  this are falsey value  

     // falsy (false)
     // underfined
     // null
     // 0
     //  false
     // ''
     // NaN
    
//   Bitwise Operators

//  1 =   00000001
//  2 =   00000010
//  3 =   00000011

//  console.log( 1|2 ) //Bitwise OR
//  console.log( 1&2 ) //Bitwise AND

// READ, Write , Execute

// 00000100
// 00000110
// 00000111
 

// const readPermision = 4;
// const writePermission = 2;
// const executePermision = 1;

// let myPermission =0;
// myPermission = myPermission | readPermision | writePermission;

// let message = (myPermission & readPermision) ? 'yes' : 'no';

// console.log(message)

//  5. operator Precedence

    // let x = 2 + 3 * 4;

    // console.log (x)

    //  Exercises

    //  let a = 'red';
    //   let b = 'blue';
       
    //   let c=a;
    //       a=b;
    //       b=c;

    //   console.log(a);
    //   console.log(b);




