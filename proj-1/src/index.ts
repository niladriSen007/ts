// const a = 322;
// // console.log(a);

// type sumFuncType = (n: number, m: number) => number;

// const sumFunction: sumFuncType = (n1, m1) => n1 + m1;

// const arrNum: number[] = [1, 2, 3, 4, 5];

// const arrNumNew: Array<number> = [1, 2, 3, 4, 5]; //Use this✅✅

// // type UserObj = {
// //   name: string;
// //   age: number;
// //   gender: "Male" | "Female" ;
// // };

// interface UserObj {
//   name: string;
//   age: number;
//   gender: "Male" | "Female";
// }



// type FuncType = (address : string) => void

// interface NewUserObj extends UserObj {
//   address?: string ;
//   func: FuncType;
// }

// let user: UserObj = {
//   name: "Ashish",
//   age: 23,
//   gender: "Male",
// };

// let newUser: NewUserObj = {
//   name: "ashish",
//   age: 60,
//   gender: "Male",
//   address: "Kolkata",
//   func : (address) => console.log(address)
// };

// // newUser.func(newUser.address || "Kolkata")


// type funcNewType = (...num:number[]) => number[]

// const funcNew : funcNewType = (...num) =>{
//   return num
// }
// const arr = funcNew(1,2,3,4,5,6,7,8,9)




interface Product{
  name:string,
  price:number,
  quantity:number
}

type funcGetObj = (product:Product) => void

const functionTakeObj : funcGetObj = (product) =>{
  console.log(product.name)
}

functionTakeObj({name:"Iphone 15",price:150000,quantity:12})


const btn = <HTMLButtonElement> document.querySelector(".btn");
const img = <HTMLImageElement> document.querySelector("#img");


//static interface
// interface PersonType{
//   name: string,
//   age:number
// }
//dynamic interface
// interface PersonType{
//   [key : string] : string | number,
// }





interface PersonType{
  name: string,
  age:number
}

const personObj : PersonType = {
  name : "Niladri",
  age:23
} 

// const getName = (key : string) =>{
//   return personObj[key]
// }
const getName = (key : keyof PersonType) =>{
  return personObj[key]
}


