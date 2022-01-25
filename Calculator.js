var num1=2;
var num2=3;
function Calculator(Type,Type1,Type3){

    console.log("I am Taking from Calculator");
    Type(num1,num2);
    Type1(num1,num2);
    Type3(num1,num2);
}
function add(num1, num2){
    console.log("addion-",num1+num2);
}
function sub(num1, num2){
    console.log("Substration-",num1-num2);
}
function div(num1, num2){
    console.log("Division-",num1/num2);
}
Calculator(add,sub,div);

