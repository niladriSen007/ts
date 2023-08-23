const a = 322;
console.log(a);

type sumFuncType = (n: number, m: number) => number;

const sumFunction: sumFuncType = (n1, m1) => n1 + m1;

const arrNum: number[] = [1, 2, 3, 4, 5];

const arrNumNew: Array<number> = [1, 2, 3, 4, 5]; //Use this✅✅

// type UserObj = {
//   name: string;
//   age: number;
//   gender: "Male" | "Female" ;
// };

interface UserObj {
  name: string;
  age: number;
  gender: "Male" | "Female";
}

interface NewUserObj extends UserObj {
  address?: string | null; //? means optional property
}

let user: UserObj = {
  name: "Ashish",
  age: 23,
  gender: "Male",
};

let newUser: NewUserObj = {
  name: "ashish",
  age: 60,
  gender: "Male",
  address:"Kolkata"
};
