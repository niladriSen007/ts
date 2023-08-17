//@ts-ignore
var nm1 = 12;
//@ts-ignore
var nm2 = 13;
// let sum : number = num1 + num2
//@ts-ignore
var sumFunc = function (n1, n2) {
    return n1 + n2;
};
console.log(sumFunc(nm1, nm2));
console.log(sumFunc(nm1 = 78, nm2 = 98));
