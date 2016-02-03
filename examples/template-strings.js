// In ES6, 
// It allows multiline strings and string interpolation
// Let's print a letter 
function sendEmail (name = 'Doge'){ 
	console.log(
`Dear Cat, 
   This is me. 
			--${name}`);
}

// In ES5,
// We can do it with '\n' and spaces like this:
// function sendEmail(name){
// 	console.log("Dear Cat, \n     This is me. \n            --" + name||'Doge');
// }

sendEmail();