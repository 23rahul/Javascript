// var arrowfun = function name(a, b) {
//   console.log(a + b);
// };
// arrowfun(10, 20);

// var arrowfun = () => {
//   console.log("You can do it yar");
// };
// arrowfun();

// var arrowfun = (a, b) => {
//     console.log(a+b);
//     }
//     arrowfun(10, 20);

// var arrowObject = {
//     name: 'arrowObject',
//     printName: () => {
//       console.log(this);
//     }
//   };

//   arrowObject.printName();

const arrowfun = (a, ...args) => {
  console.log("Rahul molwa ", a, args);
};

arrowfun(10, 20, 30, "Rahul molwa");
