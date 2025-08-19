//higher order function
// function a(b) {
//     console.dir(b);
//     console.log(b);
//     b()
// }




// //callback function
// a(function() {
//     console.log('Hiiiiiiiiiiiiiiiiiii');
// })

function outer(){
    function parent(){
        const a = 1;
        const b = 2;

        function add(){
            console.log (a + b);
        }

        return add

    } 
    return parent();
}

const add1 = outer();
add1();
console.dir(add1);

//Procoderr
// function outer() {
//     const a = 4
//     function parent() {
//       const b = 6
//       return function() {
//         console.log(a + b)
//       }
//     }
//     return parent()
//   }
  
//   const add1 = outer()
  
//   console.dir(add1)