   //  Object-oriented Programming (OOP)
    
   
 const circle = {
     radius: 1,
     location: {
         x:1,
         y:1
     },
     isVisible: true,
     draw: function() {
        //   console.log('draw');
     }
 };

 circle.draw(); // Method 


//    factory function

function createCircle(radius) {
    return {
        radius,
        draw() {
             console.log('draw');
        }
    };
}


const Circle1 = createCircle(1);
console.log(Circle1.draw()) 
const Circle2= createCircle(20);
console.log(Circle2)

