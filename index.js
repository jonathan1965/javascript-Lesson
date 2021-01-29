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



            //   getter and Setter

// const personal = {
//    firstName: 'Mosh',
//    lastName: 'Hamedani',
//    get fullName () {
//    return  `${personal.firstName}  ${personal.lastName}`
//    },
//    set fullName(value) {
//     const parts = value.split(' ')
//     this.firstName = parts[0],
//     this.lastName = parts[1]
//    }
// }

// personal.fullName = 'John Smith'
// console.log(personal); 

//  wew use gettera => to access properties 
//  setters => change (mutate) them

 

                //    Try and catch

// const personal = {
//         firstName: 'Mosh',
//         lastName: 'Hamedani',
//         get fullName () {
//         return  `${personal.firstName}  ${personal.lastName}`
//                         },
//         set fullName(value) {
//                 if(typeof value !== 'string')
//                 throw new Error('value is not a string');

//          const parts = value.split(' ')
//          if(parts.length !==2)
//          throw new Error('Enter a first and last Name')
//           this.firstName = parts[0],
//           this.lastName = parts[1]
//           }
//          }
     
//     try {
//         personal.fullName = '';
//     }     
                     
//    catch (e) {
//         alert(e)
//    }
//   console.log(personal); 






         // Local vs Global

// const color = 'red';
// function start() {
//         const message = 'hi'
//         const color= 'blue'
//         console.log(color)
// }

// function stop() {
//         const message='bye'
// }
// start();


// function start () {
//         for(var i=0; i<5; i++ )
//                 console.log(i)
//                 console.log(i)
// }
// start() 


                // var => function-scoped
                // Es6 (ES2015): let, const => block-scoped


// var color = 'red';
// let age = 30;


// function sayHi(){
//         console.log('hi')
// } // you can add it to the window object



                //    The This Keyword
                
// const video = {

//         title:'a',
//         tags: ['a','b','c'], 
//         showTags(){
//                 this.tags.forEach((tag)=>{
//                   console.log(this.title,tag)
//                 },this)
//         }
// }

// video.showTags();



                 // changing This

 const video = {

        title:'a',
        tags: ['a','b','c'], 
        showTags(){
             
            this.tags.forEach(function(tag){
            console.log(this.title,tag)
                 }.bind(this))
          }
 }
        
video.showTags();
        















// function playVideo(a,b) {
//         console.log(this)
// }

// playVideo.call({name:'John'},11,2)
// playVideo.apply({name:'John'},[11,2])
// playVideo.bind({name:'John'})(); 

 