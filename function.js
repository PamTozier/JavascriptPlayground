


/* ***** 4 Write a function that given a dollar amount returns a object of the number of bills and coins needed to return change.
*/

/*var cashChange = function (bills, coins) {
	var Bills = [];
	var Coins = [];
	 for(var bills >= 1; 
	

}*/

/*document.write('<h4>Reverse string </h4>')

 Reverses the characters of the input 


var reverseString = function(text) {
	/*var result ='';
	for(var index = text.length - 1; index >=0; index --) {
		result += text[index];
	}
	return result;
}

	
	// most concise way, but could lead to issues as 
	//functions become more complex.
return text.split('').reverse().join('');
}
document.write('<p> hello -> ' + reverseString('hello') + '</p>');
document.write('<p>a longer example -> ' + reverseString('a longer example') + '</p>');

*/

document.write('<h4>Word Length </h4>');
/* takes an input from an array items and returns members with a certain length or longer.*/

var filterWordLength = function(list, length) {
	var result = [];
	for(var index = 0; index < list.length; index++) {
		var element = list[index];
		if((typeof element === 'string') && (element.length > length)) {	
			result.push(element);
	}
  }
	return result;
} 

var testWords = [
	'short',
	'long',
	'longer',
	'really long',
	'ridiculously long sentence compared to everything else'
];

document.write('<p>7 -> ' + filterWordLength(testWords, 7) + '</p>');

	