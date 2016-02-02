// In ES6,
// You can set an default value for your function if no input is passed
// Example: 
function sayHello(name = 'World'){
	console.log("Hello "+ name);
}

// In ES5,
// You have to write it like this:
// function sayHello(name){
// 	console.log('Hello', typeof(name) !== 'undefined' ? name : "World");
// }

// or like this:
// function sayHello(name){
// 	console.log('Hello', name || 'World');
// }

sayHello();