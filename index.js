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

//    let numbers  = [1,2,3,4] 
//    let another = numbers;

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

// const first = [1,2,3];
// const second = [4,5,6,7];

// const combined = first.concat(second)
// // slice annaray into two part  

// const slice = combined.slice(2,4)
// console.log(slice)


                 //   The Spread Operator Array


                 // const first = [1,2,3];
// const second = [4,5,6,7];
// const first = [1,2,3];
// const combined = [...first,...second]
// // slice annaray into two part  

// const copy =  [...combined]
// console.log(copy)
  

        //   iterating an array
 
// const numbers = [1,2,3];

// for (let number of numbers)
// console.log(number); 

// numbers.forEach((number,index)=> console.log(number,index)
// )

            //  joining an Array

// const numbers = [1,2,3];
// const joined = numbers.join(','); 
// console.log(joined);
// const message = 'This is my first  message'
// const parts = message.split(' ')
// const combined = parts.join('-')
// console.log(combined)


             // Sorting an Array
            
// const numbers = [2,3,1];
//  const sorting = numbers.sort();
//  console.log(sorting)
//  numbers.reverse();
//  console.log(numbers)

//  const courses = [
//      {id:  1, name:'Node.js'},
//      {id:  2, name:'Javascript'}
//  ];

// courses.sort(function(a,b){
//     // a < b => 1
//     // a > b => 1
//     // a === b => 0
//  const nameA = a.name.toUpperCase();
//  const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1
//     if (nameA > nameB) return 1;
//     return 0;
// })
// console.log(courses);


                  // Testing The Element an Array

// const numbers = [1,-1,2,3];


// // every ()
// // some()
// const isPositive = numbers.every( function (value) {
//      return value >= 0;
// })
// const atLeastOnePositive = numbers.some(function(value){
//     return value >=0;
// })
// console.log(isPositive)


              // Filtering  an Array // ift no negativ number

    //  const numbers = [1,-1,2,3];

    // const filtered= numbers.filter( n => n >= 0)

    //  console.log(filtered)

                   // Mapping  an Array

    //  const numbers = [1,-1,2,3];

    //  const filtered= numbers.filter( n => n >= 0)

    //  const item = filtered.map(n => '<li>' + n + '</li>' );
 
    //   const html = '<ul>' + item.join('') + '</ul>';

    //  console.log(html)             


                // reducing an array

//      const numbers = [1,-1,2,3];

// //     let sum = 0;

// //     for (let n of numbers )
// //     sum +=n;


// // a=0, c= 1 => a =1
// // a=1, c=-1 => a= 0
// // a=0, c=2 => a= 2
// // a=2, c=3 => a= 5
//     const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue,0)
//     console.log(sum) 



//     Exercises 1

// const numbers = arrayFromRange(-10,-4);

// console.log(numbers);

// function arrayFromRange(min,max){
//     const output=[];
//         for (let i = min; i<=max; i++)
//         output.push(i)
//         return output

// }