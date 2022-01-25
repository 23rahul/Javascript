var obj={
    name:"Rahul molwa",
    Companyh:"Capgemini",
    print:function () {
        console.log(this.name);
    }
}
obj.print();

var obj2={
    name:"molwa",
    Companyh:"Tcs"
}
obj.print.call(obj2);