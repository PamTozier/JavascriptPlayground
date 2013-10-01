


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


/*3 Write a function that returns 'Good morning' if it is the morning, 'Good afternoon' if it is the afternoon, and 'Good evening' if it is the evening.

Morning is midnight to noon, afternoon is noon to five, evening is five to midnight.
*/

var dateGreeting = function(date){
	var result = '';
	var hours = (new Date).getHours();
		if(hours < 12) {
			return 'Good morning';
		}
		else if (hours < 17) {
			return 'Good afternoon';
		}
		else { return 'Good Evening';
}

	return result;
	
}
var morning = new Date(2013, 8, 30, 2, 34, 0);
document.write('<p>' + morning.toString() + '-> ' + dateGreeting(morning) + '</p>');

var afternoon = new Date(2013, 8, 30, 13, 00, 0);
document.write('<p>' + afternoon.toString() + ' -> ' + dateGreeting(afternoon) + '</p>');



/*4 Write a function that given a dollar amount returns a object of the number of bills and coins needed to return change.

For instance, given 7.23, it should return:
{
  fives: 1,
  ones: 2,
  dimes: 2,
  pennies: 3
}


document.write('<h4>Showing how to make change for a given amount </h4>');

var makingChange = function(bills, coins, count) {
	var result = [];
	var count = '';
	
	for(index = 0; index >= 1.0; index++){
		if(typeof element === 'string') {
			return 'ERROR';
		}
		else if(typeof element === 'number') {
			index[count] >= 1; 
		
}
	*/