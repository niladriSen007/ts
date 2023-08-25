type UserType = {
    userName: string,
    age:number
}

const User1 : UserType = {
    userName : "Raj",
    age:23
}

type UserTypeNew = Partial<UserType>