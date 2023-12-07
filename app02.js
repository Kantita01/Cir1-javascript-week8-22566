const users = {
    fname: 'Mark',
    address: '15th Park avene',
    age: 45,
    position: "facebook ceo",
    price: 55000,
    department: {
        name: `Sales`,
        address: {
            city:"Bnk",
            street:"7th Lumpine Rd.",
            zip: 3250000,
        }
    }
}

const {
    fname,
    address,
    age,
    salary = 5500,
    position = `${position}`,
    price :permanetPrice,
    department:{ 
        name,
        address:{ city } ,
    },
} = users;
console.log(permanetPrice, fname, age, address, salary, position);
console.log(name,city);