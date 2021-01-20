         // Array


// const numbers  = [3,4];
// // begginning
// numbers.unshift(1,2);

// // end
// numbers.push(5,6)

// // Middle
// numbers.splice(2,0,7)
// // delete one value
// numbers.pop(6)  
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