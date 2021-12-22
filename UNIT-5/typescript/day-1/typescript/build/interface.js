function getName(IName) {
    if (IName.Lastname)
        return IName.FirstName + " " + IName.LastName;
    else
        return IName.FirstName;
}
console.log(getName({
    FirstName: "tarun",
    LastName: "rawat"
}));
function PhoneBook(p) {
    let array = [];
}
