         // Array


// const numbers  = [3,4];
// // begginning
// numbers.unshift(1,2);

// // end
// numbers.push(5,6)

// // Middle
// numbers.splice(2,0,7)
// console.log(numbers)

    //     Finding Primitive

// const numbers = [1,2,3,1,4]

// console.log(numbers.indexOf(1))
// console.log(numbers.lastIndexOf(1))
// console.log(...numbers)

// console.log(numbers.indexOf(1) !== -1)
// console.log(numbers.includes(1))

// console.log(numbers.indexOf(1,2))
   

        //  finding Reference type

// const courses = [
//     {id:1, name:'a'},
//     {id:2, name:'b'}
// ]

// let course = courses.find(function(course){
//   return  course.name == "a"
// })

// console.log(course)

        //  finding the index
// const courses = [
//   {id:1, name:'a'},
//   {id:2, name:'b'}
//   ]
        
//     let course = courses.findIndex(function(course){
//       return  course.name == "a"
//       })
//        console.log(course)

                   //  finding Reference type es6


// const courses = [
//   {id:1, name:'a'},
//   {id:2, name:'b'}
//   ]
        
//  let course = courses.findIndex(course =>  course.name == "a" )
// console.log(course)

                  //  remove ellement from an array

//   const numbers  = [1,2,3,4]       

//   //End 
//   const last = numbers.pop()
// console.log(numbers)
// console.log(last)

// //   beggining 
//   numbers.shift()
//   numbers.splice()

// // Middle 
// numbers.splice(2)


            //  Empty an Array

   let numbers  = [1,2,3,4] 
   let another = numbers;

// solution1
// number = [];

// solution2
//numbers.length= 0;

//  Solution 3
// numbers.splice(0,numbers.length)

// solution 4
// while(numbers.length >0){
//     numbers.pop(); 
    
// }
// console.log(numbers)



        //   combine and slicing Array

const first = [1,2,3];
const second = [4,5,6,7];

const combined = first.concat(second)
// slice annaray into two part  

const slice = combined.slice(2,4)
console.log(slice)


