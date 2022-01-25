// const objec1 = [
//   { Name: "Rahul molwa", Company: "Capgemini" },
//   { Name: "Vikram Bhai", Company: "Capgemini" },
// ];
// function getDatas() {
//   setTimeout(() => {
//     let output = "";
//     objec1.forEach((data) => {
//       output += `<li>${data.Name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// // function createData(data) {
// //   setTimeout(() => {
// //     objec1.push(data);
// //   }, 2000);
// // }
// // createData({ Name: "syali", Company: "Capgemini" });
// // getDatas();
// const objec1 = [
//     { Name: "Rahul molwa", Company: "Capgemini" },
//     { Name: "Vikram Bhai", Company: "Capgemini" },
//   ];
//   function getDatas() {
//     setTimeout(() => {
//       let output = "";
//       objec1.forEach((data) => {
//         output += `<li>${data.Name}</li>`;
//       });
//       document.body.innerHTML = output;
//     }, 1000);
//   }
//   //callback
//   function createData(data,call) {
//     setTimeout(() => {
//       objec1.push(data);
//       call();
//     }, 2000);
//   }
//   createData({ Name: "syali", Company: "Capgemini" },getDatas);//callback

// const objec1 = [
//   { Name: "Rahul molwa", Company: "Capgemini" },
//   { Name: "Vikram Bhai", Company: "Capgemini" },
// ];
// function getDatas() {
//   setTimeout(() => {
//     let output = "";
//     objec1.forEach((data) => {
//       output += `<li>${data.Name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// //callback
// function createData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       objec1.push(data);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }
// createData({ Name: "syali", Company: "Capgemini" })
//   .then(getDatas)
//   .catch((Error) => console.log("Kuch tu galt hai bhai"));

const objec1 = [
    { Name: "Rahul molwa", Company: "Capgemini" },
    { Name: "Vikram Bhai", Company: "Capgemini" },
  ];
  function getDatas() {
    setTimeout(() => {
      let output = "";
      objec1.forEach((data) => {
        output += `<li>${data.Name}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  //callback
  function createData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        objec1.push(data);
        let error = false;
        if (!error) {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }
//   createData({ Name: "syali", Company: "Capgemini" })
//     .then(getDatas)
//     .catch((Error) => console.log("Kuch tu galt hai bhai"));
  
async function start(){
    await createData({ Name: "syali", Company: "Capgemini" })
    getDatas();
}
start();
