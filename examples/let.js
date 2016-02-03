// In ES6,
// let is a new way to declare variables

function hello(){

	// let is scoped to the current block, like between every {}
	// for example:
	for(let i = 0; i < 5; i++){
		console.log(i);
	}

	console.log(typeof(i)); // prints 'undefined' because i is only visible in the for loop;


	// var is scoped to the current function
	// for example:
	for(var i = 0; i < 5; i++){
		console.log(i);
	}
	console.log(typeof(i)); // prints 'number' because i is only visible in the for loop;
}

hello();

// You can do this with no error:
var num = 123;
var num = 1234;

// But not this:
// let num = 123;
// var num = 1234;

// Or this:
// let num = 123;
// let num = 1234;