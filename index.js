// Hour
// If hour is between 6am and 12pm : Good everning
// if it is between 12pm and 6pm: Good afternoon!
// otherwise:Good everning



// let hour = 15;

//  if (hour>=6 && hour < 12){
//      console.log("Good morning")
//     }

//     else if (hour <= 6 || hour <+12){
//         console.log('Good everning')
//     }

//     else {
//         console.log('wait the eve')
//     }


// switch and else


// let role = 'guest'; 

// switch (role){

//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//             console.log('Moderator');
//          break;

//      default: 
//      console.log('Unknown User');   
// }


// For


// for (let i =0; i< 5; i++) {
//      console.log('k',i)
// }

// for (let i =5; i > 1; i--) {
//     console.log(i)
// }

// for (let i =0; i<= 5; i++) {
//     if (i%2 !== 0 ){
//         console.log(i)

//     }
// }


// while
// let i=0;
//  while(i<5){
//     if( i %2 !==0) console.log(i); 
//     i++;  
//  }


// Do-While

//  let i=0;
//  do {
//     console.log(i);
//     i++;
//  }
//  while(i<5)



//   infinity loop some time you forget a icreamentarion

//   for-in

// const person = {
//     name:'mosh',
//     age: 30
// };

// for (let key in person )
//    console.log(key, person[key])


//    const colors= ['red','green','blue']
//     for (let index in colors)
//     console.log(colors[index])

//   for-of


//  for (let color of colors)
// console.log(color)


//  break and condition

// let i = 0;
// while (i<= 10){
//     if(i === 5) break;
//   console.log(i)
//   i++
// }

// let i = 0;

// while (i<10) {
//     if( i % 2 === 0){
//         i++;
//         continue;
//     }
//     console.log(i)
//     i++;
// }

// Function exerxises 13



//   function showNumbers(limit){

//     for (let i =0; i<=limit ; i++) {

//         if (i % 2 ===0) 
//       console.log(i,'even')
//       else console.log(i,'odd')
//     } 

//   }

//  showNumbers(11)

// Function exerxises 13

//       function max (a,b) {

//           if (a<b)
//           console.log(b)
//           else console.log(a)
//       } 

//      max(15,5);

//      let number = max (6,5)
//      console.log(number)

//    function max (a,b) {
//        return (a>b) ? a : b;
//    }

//     function exercises 14

// const output = fizzbuzz(15)
// console.log(output)
//  function fizzbuzz(input) {

//   if (typeof input !== "number" )
//   return 'is not number' 
//   if ( (input % 3 ===0) && (input % 5 === 0)) return ('fizzbizz')
//   if ( input % 3===0) return ('fizz')
//   if ( input % 5===0) return ('bizz')

//   return input;

//  }


//     function exercises 15

// function isLandscape(width,height) {
//     return (width>height) ? width : height
// }
// console.log(isLandscape(4,5))

//    function isMath(width, height) {
//         if (width > height)
//          return
//     }
//     isMath(9,5)
//     console.log('height is heigh')

// function  isLandscape(width,height){
//     return (width>height) 
// }

// console.log(isLandscape(5,3))


// exercises 13

// speed Limit = 70 
// 5-> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// function checkSpeed(speed) {

//     for (let i= 0 ; i<=speed; i++)
//      if (i<=70) return;

// }

// checkSpeed(70)
// console.log('ok')

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint)
//         console.log('ok')
//     else {
//         let points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('Licence suspended')
//         else
//             console.log('Points', points)
//     }

// }

// checkSpeed()

// make code clearner


// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('ok');
//         return;
//     }

//     let points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('Licence suspended')
//     else
//         console.log('Points', points)


// }
// checkSpeed()


//  exercises 14

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i=0; i<limit; i++)
//      if (i %2 === 0)
//      console.log(i,"even")
//      else console.log(i,"odd")
// }


// function showNumbers(limit) {
//     for (let i=0; i<limit; i++) {
//      let message = (i %2 === 0) ? 'Even' : 'odd'
//      console.log(i,message)
//     }

// }

// showNumbers(10)


// exercises 15

//  const array = [0,null,undefined,'',2,3]  
//  console.log(countTruthy(array))      
// function countTruthy(array){
//     let count = 0;
//     for (let value of array)

//     if (value)
//     count ++;
//     return count

// }


// exercises 16

//  const movie= {
//      title: 'a',
//      releaseYear:2018,
//      rating: 4.5,
//      director: 'b'
//  }       

//  showProperties(movie)

// function showProperties(obj){

//      for (let key in obj)

//      if (typeof obj[key] === 'string')
//       console.log(key, obj[key])
// }


// exercises 17

// Multiple of 3:3,6,9
// Multiple of 5:5,10


// console.log(sum(10));


// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i

//     return sum;
// }

// Exercises 18

//  0-59: F
//  60-69:D
//  70-79:c
//  80-89:B
//  90-100:A


// const marks = [80,80,50]

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let sum = 0
//     for  (let mark of marks)
//     sum+= mark; 

//     let average = sum / marks.lenght;
//     if (average <60  ) return 'f'
//     if (average <70  ) return 'D'
//     if (average <80  ) return 'C'
//     if (average <90  ) return 'B'
//     else return 'A'
// }


// simple function answer
// const marks = [80,80,50]
// console.log(calculateGrade(marks));

// function calculateGrade(marks){

//      const average = calculateAverage(marks); 
//     if (average <60  ) return 'f'
//     if (average <70  ) return 'D'
//     if (average <80  ) return 'C'
//     if (average <90  ) return 'B'
//     else return 'A'
// }


// function calculateAverage(array){
//     let sum = 0
//     for  (let value of array)
//     sum +=  value; 
//     return sum / marks.lenght;
// } 


// exercise 19

// Prime (whose factors are only 1 and itself)
//   11 = 1,11
//   13 = 1,13
//   or it can be Composite

// showPrime(20)

// function showPrime(limit) {
//     for (let number = 2; number <= limit; number++) {

//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number)
//     }

// }

// new way function


showPrime(20)

function showPrime(limit) {
    for (let number = 2; number <= limit; number++)

        if (isPrime(number))
            console.log(number)
}
    function isPrime(number) {
        for (let factor = 2; factor < number; factor++)
            if (number % factor === 0)
                return false;
        return true;
    }