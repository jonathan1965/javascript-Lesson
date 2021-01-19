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


const circle = {
    radius:1,
    draw(){
        console.log('draw')
    }
}

for (let key in circle)
 console.log(key,circle[key])

 for (let key of Object.keys(circle))
 console.log(key,circle[key])

    //   another way

for (let entry of Object.entries(circle))
  console.log(entry)


if ('radius' in circle ) console.log('yes')