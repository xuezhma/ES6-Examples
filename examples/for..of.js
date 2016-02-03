// In ES6,
// They added a new loop, for..of, for iterable data, like Arrays, Sets, Maps

let nums = [1, 2, 3, 4];
nums.name = "Kappa";

//This will prints '1', '2', '3', '4'
for (let i of nums) {
   console.log(i); 
}

//Difference with for..in
//This will prints '1', '2', '3', '4', and 'name'
for (let i in nums) {
   console.log(i); 
}

