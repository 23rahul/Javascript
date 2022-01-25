// function name(...arg) {
//     console.log(arg);
// }
// name(10,20,30);

// var i=10; // closuer
// function name() {
//     var j=309;
//     console.log(j);
//     console.log(i);
// }
// name();

function name() {
    var i = "outer local function";
    console.log(i);
    function name1() {
        var j = "inner local function";
        console.log(j);
        console.log(i);//closuer
    }
    name1();
}
name();
