interface Itask{
    title: string,
    status: boolean,
    id:number
}
interface IName{
    FirstName: string,
    Lastname?:String
}

function getName(IName) {
    if(IName.Lastname)
    return IName.FirstName +" "+ IName.LastName;
    else
       return IName.FirstName
}

console.log(getName({
    FirstName: "tarun",
    LastName:"rawat"
}));

interface IAddress{
    houseN: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
    
}

interface PersonDetails {
    Prefix?: string,
    phoneN: number[];
    address: string[],
    email?: string,
    firstName: string,
    lastName: string,
    middlename?:string,
}

function PhoneBook(p:PersonDetails) {
    let array = [];
    
}