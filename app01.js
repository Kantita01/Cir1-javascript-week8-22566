const user = [
    {
        'fname' : "Mask",
        'address' : '15th Park Avenue',
        'age' : 55,
        colors : ["Red", "Green", "Blue"],
    },
    {
        'fname' : "Elon",
        'address' : '15th Park Avenue2',
        'age' : 55,
        colors : ["Orange", "Pink", "Yellow"],
    },
];

// 2.Display Destructuring Object
console.log("=====Display Destructuring Object=====");
const {fname, address, age, colors} = user;
console.log(user[0].fname);
console.log(user[0].address);
console.log(user[0].age);
console.log(user[0].colors[0], user[0].colors[1], user[0].colors[2]);

console.log(user[1].fname);
console.log(user[1].address);
console.log(user[1].age);
console.log(user[1].colors[0], user[1].colors[1], user[1].colors[2]);

// 1.Display General Object
//console.log("=====Display General Object=====");
//console.log(user.fname)
//console.log(user.address)
//console.log(user.age)
//console.log(user.colors[0])
//console.log(user.colors[1]);
//console.log(user.colors[2]);