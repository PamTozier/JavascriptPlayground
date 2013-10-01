//document.write('this came from the script');
//document.write('   ');
//document.write('<b>loud</b>');

//document.write('<br/> <h4>Word Count example</h4>');

//var wordCount = function(text) {
 
	// \W matches non-word characters, match one or more
  //var tokens = text.split(/\W+/);
 
	// account for empty elements at the start or end of the list
 /* var count = tokens.length;
  
	if(tokens[0] === '') count--;
  if(tokens[tokens.length - 1] === '') count--;
  return count;
}*/

/* document.write('test 1: ' + wordCount('one two , nine  and a half three'));*/



var reverseText = function(text){
	//using a function to reverse the string display
	
	var reverse = '';
		
		for(index = text.length - 1; index >= 0; index -- ){
			reverse += text[index];
		}	return reverse;
		
}
document.write('reversed: ' + reverseText ('pumpernickle'));

	
// returning text of a minimum length or more.
/*var wordLength = function (text) {
	var fragment = [];
	var count = 0;
	
	for(var index = text.length; index >= 0; index --){
		if(index >=4){
		fragment += text[index];
		}
	}
		return fragment;
}

alert(wordLength(['as', 'if', 'this', 'works', 'great']));
*/	 
/*
	// returning text of a minimum length or more.
var wordLength = function (text) {
	var fragment = [];
	var count = 0;
	
	for(var index = text[index].length; index >= 0; index --){
        // you are testing against the loop index here, not the text
        // length - you want text[index].length
        // also this tests against a fixed length (4). can you change
        // the function to accept any length to test against?
		if(index >=4){
            // += doesn't work for arrays, that converts to string
            // try fragment.push
		fragment.push(text[index]);
		}
	}
		return fragment;
}

alert(wordLength(['as', 'if', 'this', 'works', 'great']));
	
/*	
// returning text of a minimum length or more.
var wordLength = function (text) {
	var fragment = [];
	var count = 0;
	
	for(var index = text.length - 1; index >= 0; index ++){
		fragment += text[index];
		count > 0; 
	}
		return fragment;
}

alert((wordLength['as', 'if', 'this', 'works', 'great']));*/

/* var greeting = function(text) 
{
    var now = new Date();
    var nowHours = now.getHours() + 1;
    
    if (nowHours >= 1 && nowHours < 12) 
    {
        return 'Good morning';
    }
    else if (nowHours >= 12 && nowHours < 6) 
    {
        return 'Good afternoon';
    }
    else 
    {
        return 'Good evening';
    }
};
alert(greeting);



*/
