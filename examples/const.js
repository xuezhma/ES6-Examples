// In ES6,
// You can declare a constant variable

// For example:
const name = 'doge'; 
// name = 'cat'; //will return an error.


// However, if an object is a constant, you can change its attributes
const fullname = {
	lastname: "Rainbow",
	firstname: "Kappa"
}

console.log(fullname);

// You can do this:
fullname.lastname = "Magic" // No error
fullname.firstname = "Doge"; // No error
console.log(fullname);

//But not this:
// fullname = {
// 	lastname: "Magic",
// 	firstname: "Doge"
// }