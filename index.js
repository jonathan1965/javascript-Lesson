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

        const now = new Date();
        const date1= new Date('May 11 2018 09:00')
        const date2 = new Date(2018, 4, 11, 9)
      now


            //   Ercises 15
  // street
//   city
// zipCode
// showAddress


    
    const address= {
        street:'kn7',
        city:'kabuga',
        zipcode:19
    }
  function showAddress() {
       const show = { ...address}
       console.log(show)
  }


showAddress()
    



