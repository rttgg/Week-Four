'use strict';

var secretQuestion1 = document.getElementById('Secret-question1');
secretQuestion1.addEventListener('submit', function() {
	var firstAnswer1 = document.getElementById('first-input1');
	var myResponse1 = document.getElementById('response1');
	var rightAnswer1 = ('Rom');

	event.preventDefault();
	
	if (firstAnswer1.value == rightAnswer1) {
        myResponse1.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer1 + '!';
	} else {
        myResponse1.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer1 + '.';
    }
    firstAnswer1.value = '';
})

var secretQuestion2 = document.getElementById('Secret-question2');
secretQuestion2.addEventListener('submit', function() {
	var firstAnswer2 = document.getElementById('first-input2');
	var myResponse2 = document.getElementById('response2');
	var rightAnswer2 = ('Geb');
    
    event.preventDefault();
    
    if (firstAnswer2.value == rightAnswer2) {
        myResponse2.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer2 + '!';
	} else {
        myResponse2.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer2 + '.';
    }
    firstAnswer2.value = '';
})

var secretQuestion3 = document.getElementById('Secret-question3');
secretQuestion3.addEventListener('submit', function() {
	var firstAnswer3 = document.getElementById('first-input3');
	var myResponse3 = document.getElementById('response3');
	var rightAnswer3= ('Seattle');
    
    event.preventDefault();
    
    if (firstAnswer3.value == rightAnswer3) {
    response3.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer3 + '!';
	} else {
        response3.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer3 + '.';
    }
    firstAnswer3.value = '';
})

var secretQuestion4 = document.getElementById('Secret-question4');
secretQuestion4.addEventListener('submit', function() {
	var firstAnswer4 = document.getElementById('first-input4');
	var myResponse4 = document.getElementById('response4');
	var rightAnswer4 = ('Gray');

    event.preventDefault();
    
    if (firstAnswer4.value == rightAnswer4) {
        response4.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer4 + '!';
	} else {
        response4.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer4 + '.';
    }
    firstAnswer4.value = '';
})
  
var secretQuestion5 = document.getElementById('Secret-question5');
secretQuestion5.addEventListener('submit', function() {
	var firstAnswer5 = document.getElementById('first-input5');
	var myResponse5 = document.getElementById('response5');
	var rightAnswer5 = ('10');

    event.preventDefault();
    
    if (firstAnswer5.value == rightAnswer5) {
        response5.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer5 + '!';
	} else {
        response5.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer5 + '.';
    }
    firstAnswer5.value = '';
})
   
var secretQuestion6 = document.getElementById('Secret-question6');
secretQuestion6.addEventListener('submit', function() {
	var firstAnswer6 = document.getElementById('first-input6');
	var myResponse6 = document.getElementById('response6');
	var rightAnswer6 = ('Math');
    
    event.preventDefault();
    
    if (firstAnswer6.value == rightAnswer6) {
        response6.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer6 + '!';
	} else {
        response6.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer6 + '.';
    }
    firstAnswer6.value = '';
})

var secretQuestion7 = document.getElementById('Secret-question7');
secretQuestion7.addEventListener('submit', function() {
	var firstAnswer7 = document.getElementById('first-input7');
	var myResponse7 = document.getElementById('response7');
	var rightAnswer7 = ('Seattle');
    
    event.preventDefault();
    
    if (firstAnswer7.value == rightAnswer7) {
        response7.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer7 + '!';
	} else {
        response7.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer7 + '.';
    }
    firstAnswer7.value = '';
})
  
var secretQuestion8 = document.getElementById('Secret-question8');
secretQuestion8.addEventListener('submit', function() {
	var firstAnswer8 = document.getElementById('first-input8');
	var myResponse8 = document.getElementById('response8');
	var rightAnswer8 = ('Lord of the ring');

    event.preventDefault();
    
    if (firstAnswer8.value == rightAnswer8) {
        response8.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer8 + '!';
	} else {
        response8.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer8 + '.';
    }
    firstAnswer8.value = '';
})

var secretQuestion9 = document.getElementById('Secret-question9');
secretQuestion9.addEventListener('submit', function() {
	var firstAnswer9 = document.getElementById('first-input9');
	var myResponse9 = document.getElementById('response9');
	var rightAnswer9 = ('Michel Jackson');
    
    event.preventDefault();
    
    if (firstAnswer9.value == rightAnswer9) {
        response9.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer9 + '!';
	} else {
        response9.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer9 + '.';
    }
    firstAnswer9.value = '';
})

var secretQuestion10 = document.getElementById('Secret-question10');
secretQuestion10.addEventListener('submit', function() {
	var firstAnswer10 = document.getElementById('first-input10');
	var myResponse10 = document.getElementById('response10');
    var rightAnswer10 = ('dog');
   

    event.preventDefault();
    
    if (firstAnswer10.value == rightAnswer10) {
        response10.innerHTML = 'That\'s right! The correct answer was ' 
        + rightAnswer10 + '!';
	} else {
        response10.innerHTML = 'Nope. The correct answer was ' + 
        rightAnswer10 + '.';
    }
    firstAnswer10.value = '';
})