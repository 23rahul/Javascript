var fun1= function (a) {
    //console.log(a);
    var b=5;
    return function (c) {
        console.log(a+b+c);
    }
}
var Total= fun1(10);
Total(20);