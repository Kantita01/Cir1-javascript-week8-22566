// 1.Define Array type
const arr = ["Mark", "Elon", "Jeff"];
const weeks = ["Monday", "Tuesday", "Wednesday"];
const colors = ["Viole", "Indigo", "Blue", "Green", "Yellow", "Orange", "red"];

// 4.Destructuring and Rest operator
console.log("=====4.Display colors with Destructuring and Rest operator=====");
const[a, b, ... g] = colors
console.log(a)
console.log(b);
console.log(g);

// 3.Destructuring assignment
console.log("=====3.Display Weeks with Destructuring Array=====");
const [day1, day2, day3] = weeks;
console.log(day1, day2, day3);

// 2.Destructuring assignment
console.log("=====2.Display Destructuring Array=====");
const[first, second, third] = arr
console.log(first);
console.log(second);
console.log(third);

// Display Genreal Array
console.log("=====1.Display Genreal Array=====");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
