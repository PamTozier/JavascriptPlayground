

document.write('<h4>Reverse string </h4>')

// Reverses the characters of the input 


var reverseString = function(text) {
	var result ='';
	for(var index = text.length - 1; index >=0; index --) {
		result += text[index];
	}
	return result;
}

	
	// most concise way, but could lead to issues as 
	//functions become more complex.
//return text.split('').reverse().join('');
//}
document.write('<p> hello -> ' + reverseString('hello') + '</p>');
document.write('<p>a longer example -> ' + reverseString('a longer example') + '</p>');



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
document.write('<h4> Greetings </h4>');

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

*/
document.write('<h4>Showing how to make change for a given amount </h4>');
/*
var makingChange = function(amount) {
	var change = {};
	amount *= 100; //convert to pennies t omake the math easier
	while(amount > 0) {
		// calculate hundreds
		if(amount >= 10000) {
			change.hundreds = parseInt(amount / 10000); }
			amount -= change.hundreds * 10000
		// calculate fifties
		else if(amount >= 5000) {
			change.fifties = parseInt(amount / 5000); 
			amount -= change.fifties * 5000 }
		//calculate twenties
		else if(amount >= 2000) {
			change.twenties = parseInt(amount / 2000); 
			amount -= change.twenties * 2000 }
		//calculate tens
		else if(amount >= 1000) {
			change.tens = parseInt(amount / 1000); 
			amount -= change.tens * 1000 }
		//calculate fives
		else if(amount >= 500) {
			change.fives = parseInt(amount / 500); 
			amount -= change.fives * 500}
		//calculate ones
		else if(amount >= 100) {
			change.ones = parseInt(amount / 100); 
			amount -= change.ones * 100}
		//calculate quarters
		else if(amount >= 25) {
			change.quarters = parseInt(amount / 25); 
			amount -= change.quarters * 25}
		//calculate dimes
		else if(amount >= 10) {
			change.dimes = parseInt(amount / 10); 
			amount -= change.dimes * 10}
		//calculate nickles
		else if(amount >= 5) {
			change.nickles = parseInt(amount / 5); 
			amount -= change.nickles * 5}
		//calculate pennies
		else if(amount >= 1) {
			change.pennies = parseInt(amount / 1); 
			amount -= change.pennies * 1}
		
	}
		
	return change;	
}*/
var makingChange = function(amount) {
	var change = {};
var denominations = [
	['hundreds', 10000 ],
	{name: 'hundreds', value: 10000 },
	{name: 'fifties', value: 5000 },
	{name: 'twenties', value: 2000 },
	{name: 'tens', value: 1000 },
	{name: 'fives', value: 5000 },
	{name: 'ones', value: 100 },
	{name: 'quarters', value: 25 },
	{name: 'dimes', value: 10 },
	{name: 'nickles', value: 5 },
	{name: 'pennies', value: 1 }
];
//onvert pennies to make the math easier
amount *= 100
for(var index = 0; index < denominations.length; index++){
	var current = denominations[index];
	if(amount >= current.value) {
		var number = parseInt(amount / current.value);
		amount -= number * current.value;
		change[current.name] = number;
	}
}
return change;
}
document.write('value: ' + makingChange(345.56));

	
