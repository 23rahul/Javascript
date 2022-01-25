// var obj1={
//     name: "Rahul molwa",
//     grade: "A",
//     salary: 26545,
//     Company:"Capgemini",
//     maths: function () {
//         return console.log( "In Object we have function we call this as method of the object");
//          }
// };
// obj1.maths();


// for (const key in obj1) {
//     console.log(`${obj1[key]}`);
//      }




// // Array of objects
// var myObject = {
//     jhon: {
//         name: 'jhon',
//         age: 12,
//         gender: 'male'
//     },
//     rita: {
//         name: 'rita',
//         age: 32,
//         gender: 'male'
//     }
// };

// // Using DOT notation
// console.log('using DOT:' + myObject.jhon.gender);

// // Using [] notation
// console.log('using []:' + myObject.rita['age']);

// // Using delete keyword
// delete myObject.rita;

// // Iterating using for..in loop
// for (var key in myObject) {

//     // logs values in myObject
//     console.log(myObject[key]);
// }




var object1 = {
    Rahul: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },
    vikram: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },
    Sayali: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },
    Askahy: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    }, 
    Diya: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },
    Sewta: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },
    Aniruha: {
        comnpany: "Capgemini",
        grade: "A",
        salary: 26500
    },

}
console.log(object1.Rahul.grade);
console.log(object1.Rahul['grade']);

delete object1.Rahul;
delete object1.Sayali;
for (const key in object1) {
    
        console.log(object1[key]);
}

for (const key in object1) {
    console.log(object1[key]);
}
