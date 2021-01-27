// function Declaration

function walk() {
    console.log('walk')
}

// Named functioN expression

let run = function walk() {
   console.log('run');
};


// Anonymous  functioN expression
let run1 = function () {
    console.log('run me');
 };
 
 run1();
 let move = run1;

 move();