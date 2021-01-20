                  //  Object-oriented Programming (OOP)


  //  const circle = {
  //      radius: 1,
  //      location: {
  //          x:1,
  //          y:1
  //      },
  //      isVisible: true,
  //      draw: function() {
  //         //   console.log('draw');
  //      }
  //  };

  //circle.draw(); // Method 


  //    factory function

  // function createCircle(radius) {
  //     return {
  //         radius,
  //         draw() {
  //              console.log('draw');
  //         }
  //     };
  // }


  // const Circle1 = createCircle(1);
  // console.log(Circle1.draw()) 
  // const Circle2= createCircle(20);
  // console.log(Circle2)


                  //Factory Function

  // function Circle(radius){
  //     this.radius = radius;
  //     this.draw = function () {
  //         console.log('draw');
  //     }
  // }

  // const circle = new Circle(1)
  // console.log(circle);

  // const triangle = {
  //     radius:1
  // }
  // triangle.p= 15;
  // triangle.draw= function () {}
  // console.log(triangle)

                    // Constructor Property


  //    function Circle(radius) {
  //        this.radius = radius;
  //        this.draw = function () {
  //            console.log('draw')
  //        }
  //    }
  //  Circle.call({},1)
  //    const another = new Circle(1)
  //    console.log(another)


                  //  Value vs Reference

  //   let number = 10;
  //   function increase(number) {
  //       number++;
  //   }
  //   console.log(number)

  //   let obj = {
  //       value: 10
  //   }
  //   function increase(Obj) {
  //       obj.value++
  //   }
  //   increase();
  //   console.log(obj)
  // const circle = {
  //     radius:1,
  //     draw(){
  //         console.log('draw')
  //     }
  // }
  // for (let key in circle)
  //  console.log(key,circle[key])
  //  for (let key of Object.keys(circle))
  //  console.log(key,circle[key])

                   //   another way

  // for (let entry of Object.entries(circle))
  //   console.log(entry)
  // if ('radius' in circle ) console.log('yes') 
  
                   //  cloning an Object 


  //   const circle = {
  //       radius: 1,
  //       draw() {
  //           console.log('draw')
  //       }
  //   }
  //   const another = {};
  //   for (let key in circle)
  //       another[key] = circle[key]
  //   console.log(another)
  // const another1 = Object.assign({ },circle)
  // console.log(another1)

  // const another2 = {...circle}
  // console.log(another2)



                   // String primitive

  //   const name= 'john'
  // //   String object
  // const another = new String('hi')

  //   // templete literal ``
  //   const another1 =  `hi ${name} ${2+5}`


  // Date

  //     const now = new Date();
  //     const date1= new Date('May 11 2018 09:00')
  //     const date2 = new Date(2018, 4, 11, 9)
  //   now


                          //   Ercises 15
  // street
  //   city
  // zipCode
  // showAddress

  //     const address= {
  //         street:'kn7',
  //         city:'kabuga',
  //         zipcode:19
  //     }
  //   function showAddress() {
  //        const show = { ...address}
  //        console.log(show)
  //   }
  // showAddress()

            //Good Answer

  //          const address= {
  //     street:'kn7',
  //     city:'kabuga',
  //     zipcode:19
  //          }
  // function showAddress(address){
  //     for (let key in address)
  //     console.log(key, address[key])
  // }    

                    // showAddress(address)


  //    exercise 15  factory and constructor function
  // const address= {
  //     street:'kn7',
  //     city:'kabuga',
  //     zipcode:19
  // }

  //  exercises factory function

  // function createAddress(street,city,zipCode) {
  //     return {
  //         street:street,
  //         city:city,
  //         zipCode:zipCode
  //     }
  // }
  // const create = new createAddress (11,1,2)


                      //  exercises Construction Function

  //   function CreateAddress (street,city,zipCode ){
  //       this.street= street;
  //       this.city=city;
  //       this.zipCode=zipCode;
  //   }
  // const call= new CreateAddress(1,2,3)
  // console.log(call)

                   // exercises object equality 3

  // function Address(street,city,zipCode ){
  //     this.street= street;
  //     this.city=city;
  //     this.zipCode=zipCode;
  // }

  // let address1= new Address(1,2,3)
  // let address2= new Address(1,2,3)
  // let address3 = address1;


  // function areEqual(address1,address2) {
  //    return address1.street === address2.street && 
  //    address1.city === address2.city &&
  //    address1.zipCode === address2.zipCode;
  // }

  // function areSame(address1,address2){
  //      return address1 === address2;
  // }

  // console.log(areEqual(address1,address2))
  // console.log(areSame(address1,address2))
  // console.log(areSame(address1,address3))


                     //     Blog Post Object

//   title
//   body
//   author
//   views
//   comments
//   (author,body)
//   isLive

//   let post = {
//       tittle: 'a',
//       body: 'b',
//       author: 'c',
//       views: 10,
//       comments: [{
//               author: 'a',
//               body: 'b'
//           },
//           {
//               author: 'c',
//               body: 'd'
//           },
//       ],
//       isLive: true
//   }

//   console.log(post);



                //constructor Function

// let post = new Post('a','b','c')
// function Post(tittle,body,author) {
//     this.tittle = tittle;
//     this.body= body;
//     this.author = author;
//     this.views=0;
//     this.comments=[];
//     this.isLive= false;   
// }

                     //Price Range
// let priceRanges = [
//     {label:'$',tooltip:'Inexpensive',minPerson:0,maxPerPerson:10},
//     {label:'$$',tooltip:'Modorate',minPerson:11,maxPerPerson:20},
//     {label:'$$$',tooltip:'Expensive',minPerson:21,maxPerPerson:50}

// ];

// let restaurants = [
//     {averagePerPeron:5}
// ]

