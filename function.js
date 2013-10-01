


/* ***** 4 Write a function that given a dollar amount returns a object of the number of bills and coins needed to return change.
*/

/*var cashChange = function (bills, coins) {
	var Bills = [];
	var Coins = [];
	 for(var bills >= 1; 
	

}*/

document.write('<h4>Reverse string </h4>')

/* Reverses the characters of the input */


var reverseString = function(text) {
	/*var result ='';
	for(var index = text.length - 1; index >=0; index --) {
		result += text[index];
	}
	return result;
}
*/ 
	
	// most concise way, but could lead to issues as 
	//functions become more complex.
return text.split('').reverse().join('');
}
document.write('<p> hello -> ' + reverseString('hello') + '</p>');
document.write('<p>a longer example -> ' + reverseString('a longer example') + '</p>');


