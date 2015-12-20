function add(a){
	console.log("Multiplied by 2 is " + a);
	return(a + 1);
}
function multiply(b){
	console.log("Divided by 3 is " + b);
	return(b * 2);
}

function divide(c){
	return(c / 3);
}
console.log("Original number is 27");
var x = add(multiply(divide(27)));
console.log("Finally, add 1 to get " + x);