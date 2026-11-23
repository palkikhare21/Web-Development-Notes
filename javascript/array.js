//ARRAY
let arr=[10,'hulk',true,null,undefined,10n,Symbol("apple"),[100,202,302],[[[400]]],[["kiwi"],['mango']]]

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[6]);
console.log(arr[7][0]);
console.log(arr[8][0][0][0]);
console.log(arr[9][0][0]);
console.log(arr[9][1][0]);


//OBJECT
let user={
    userName:"palki",
    age:22,
    addres:{
        city:"sagar",
        street:"anyyy"
    },
    "2ndaddress":"hyderabad"
}
console.log(user["2ndaddress"]);
console.log(user["addres"]["steert"]);



