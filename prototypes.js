const object1 = {
  name: "Rahul molwa",
  getName: function () {
    return this.name;
  },
  getEmpid: function () {
    return this.empid;
  },
};
// //console.log(object1);

const object2 = {
  empid: 46068714,
  Name: "molwa",
  __proto__: object1,
};
// //console.log(object2.getName());
// //console.log(object2);

const object3 = {
  company: "Capgemini",
  __proto__: object2,
};
// //console.log(object3.getName());
// //console.log(object3.getEmpid());

// const arr1=["Rahul"];
// arr1.push('molwa');
// console.log(arr1);

// const arr1=new Array();
// console.log(arr1);

// const obj1=new Object();
// console.log(obj1);

// Array.prototype.add = function () {
//   return this;
// };
// const name = ["RAHUL"];
// console.log(name.add());

// Array.prototype.convertIntoObject = function () {
//   let obj = {};
//   this.forEach((element) => {
//     obj[element] = element;
//   });
//   return obj;
// };
// console.log(name.convertIntoObject());

function Mypro(name,empid) {
  this.name = name;
  this.empid=empid;
}
Mypro.prototype = object1;

const myproto = new Mypro("Love",46068);
console.log(myproto.getName());
console.log(myproto.getEmpid());
