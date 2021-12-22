var data = {
    name: "tarun",
    address:[
       { city: "BNG", state :"KNK"},  // nested objects
       { city: "DN", state :"UK"},
       { city: "MUM", state :"MH"}
    ],
};

// console.log(data.address[0].city);
// console.log(data.address[1].city);
// console.log(data.address[2].city);

// for(k in data)
// {
//     if (k == "address")
//     {
//         for (let i = 0; i < data[k].length;i++)
//         {

//             console.log(data[k][i]["city"]);
//         }
//     }
// }


for (let i = 0; i < data.address.length;i++)
{
    console.log(data.address[i].city);

}

