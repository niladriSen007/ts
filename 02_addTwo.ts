//@ts-ignore
let nm1 : number = 12
//@ts-ignore
let nm2 : number = 13

// let sum : number = num1 + num2

//@ts-ignore
const sumFunc  = (n1 : number , n2 : number) : number =>{
    return n1 + n2
}

console.log(sumFunc(nm1,nm2))
console.log(sumFunc(nm1=78,nm2=98))
