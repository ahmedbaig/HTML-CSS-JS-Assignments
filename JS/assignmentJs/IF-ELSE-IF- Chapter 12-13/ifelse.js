function q1() {
    var number = document.getElementById("input1").value;
    if (isNaN(number)) {
        document.getElementById('q1').innerHTML = "Incorrect input";
    }
    else {
        var Answer = (number % 3 === 0) ? "Number is divisible by 3" : "Number is not divisible by 3";
        document.getElementById('q1').innerHTML = Answer;
    }
}

function q2() {
    var number = document.getElementById("input2").value;
    if (isNaN(number)) {
        document.getElementById('q2').innerHTML = "Incorrect input";
    }
    else {
        var Answer = (number % 2 === 0) ? "Number is Even" : "Number is Odd";
        document.getElementById('q2').innerHTML = Answer;
    }
}

function q3() {
    var number = document.getElementById("input3").value;
    if (isNaN(number)) {
        document.getElementById('q3').innerHTML = "Incorrect input";
    }
    else {
        var Answer = (number <= 18) ? "Too young" : "Old Enough";
        document.getElementById('q3').innerHTML = Answer;
    }
}

function q4() {
    var person1 = document.getElementById("input4.1").value;
    var person2 = document.getElementById("input4.2").value;
    if (typeof person1 !== "string" && typeof person2 !== "string") {
        document.getElementById('q4').innerHTML = "Incorrect input";
    }
    else {
        var Answer = (person1 === person2) ? "Same names: Hey there! :)" : "Different names: Hey you two! :D";
        document.getElementById('q4').innerHTML = Answer;
    }
}

function q5() {
    var number = (document.getElementById("input5").value) % 3;
    if (isNaN(number)) {
        document.getElementById('q5').innerHTML = "Incorrect input";
    }
    else {
        switch (number) {
            case 0:
                var Answer = "Number is divisible by 3";
                break;
            default:
                var Answer = "Number is not divisible by 3";
                break;
        }
        document.getElementById('q5').innerHTML = Answer;
    }
}

function q6() {
    var inputUser = document.getElementById("input6").value;
    if (isNaN(inputUser)) {
        var Answer = "Input is a String";
        if (inputUser == inputUser.toUpperCase()) {
            document.getElementById('q6').innerHTML = Answer + ": And its uppercase";
        } else if (inputUser == inputUser.toLowerCase()) {
            document.getElementById('q6').innerHTML = Answer + ": And its lowercase";
        } else {
            document.getElementById('q6').innerHTML = Answer + ": Special characters or upperlower case used";
        }
    }
    else {
        document.getElementById('q6').innerHTML = "Input is a Number";
    }
}

function q7() {
    var number1 = parseInt(document.getElementById("input7.1").value);
    var operator = document.getElementById("input7.2").value;
    var number2 = parseInt(document.getElementById("input7.3").value);
    console.log(typeof operator + operator)
    switch (operator) {
        case "+":
            var Answer = number1 + number2;
            break;
        case "-":
            var Answer = number1 - number2;
            break;
        case "*":
            var Answer = number1 * number2;
            break;
        case "/":
            var Answer = number1 / number2;
            break;
        case "%":
            var Answer = number1 % number2;
            break;
        default:
            var Answer = "Incorrect operator input";
    }
    document.getElementById('q7').innerHTML = Answer;
}

function q8() {
    var time = document.getElementById('input8').value;
    if (time >= 0000 && time <= 1200) {
        document.getElementById('q8').innerHTML = "Good Morning!";
    } else if (time >= 1200 && time <= 1700) {
        document.getElementById('q8').innerHTML = "Good Afternoon!";
    } else if (time >= 1700 && time <= 2100) {
        document.getElementById('q8').innerHTML = "Good Evening!";
    } else if (time >= 2100 && time <= 2359) {
        document.getElementById('q8').innerHTML = "Good Night!";
    } else {
        document.getElementById('q8').innerHTML = "Wrong input: Answer should be in 24Hrs time format";
    }
}

function q9() {
    var year = parseInt(document.getElementById('input9').value);
    if ((parseInt(year) % 4) == 0) {
        if (parseInt(year) % 100 == 0) {
            if (parseInt(year) % 400 != 0) {
                document.getElementById('q9').innerHTML = "Not a leap year";
            }
            else if (parseInt(year) % 400 == 0) {
                document.getElementById('q9').innerHTML = "Leap year";
            }
        }
        else if (parseInt(year) % 100 != 0) {
            document.getElementById('q9').innerHTML = "Leap year";
        }
    }
    else if ((parseInt(year) % 4) != 0) {
        document.getElementById('q9').innerHTML = "Not a leap year";
    }

}

function q10() {
    var p1 = "password";
    var p2 = document.getElementById('input10.2').value;
    var Answer = (p1 === p2) ? "Matched" : "Mismatched";
    document.getElementById('q10').innerHTML = Answer;
}

function q11() {
    var firstName = "Ali";
    if (firstName === "Fahad") {
        document.getElementById('q11').innerHTML = "Hello Fahad";
    } else {

        document.getElementById('q11').innerHTML = "You are not Fahad";
    }
}

function q12() {
    var greeting;
    var hours = document.getElementById("input12").value;
    if (hours < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById('q12').innerHTML = greeting;
}

function q13() {
    var number1 = parseInt(document.getElementById('input13.1').value);
    var number2 = parseInt(document.getElementById('input13.2').value);
    if (number1 === number2) {
        document.getElementById('q13').innerHTML = "They are equal";
    } else if (number1 > number2) {
        document.getElementById('q13').innerHTML = "number1 is greater";
    } else if (number1 < number2) {
        document.getElementById('q13').innerHTML = "number2 is greater";
    }
}

function q14() {
    var number = parseInt(document.getElementById('input14').value);
    if (number > 0) {
        document.getElementById('q14').innerHTML = "Positive integer";
    } else if (number < 0) {
        document.getElementById('q14').innerHTML = "Negative integer";
    } else if (number === 0) {
        document.getElementById('q14').innerHTML = "Equal to zero";
    }
}

function q16() {
    var inputNumber = 5;
	var inputString = "string";
	var inputBoolean = true;
    if (typeof inputString === "string") {
        document.getElementById('q16').innerHTML = "Input: String";
    }
    else if (typeof inputNumber === "number") {
        document.getElementById('q16').innerHTML = "Input: Number";
    }
    else if (typeof inputBoolean === "boolean") {
        document.getElementById('q16').innerHTML = "Input: Boolean";
    }else {
        document.getElementById('q16').innerHTML = "Input: Undefined";
    }
}

function q17() {
	var variable = document.getElementById('input17').value;
	if (variable === "a" || variable === "e" || variable === "i" || variable === "o" || variable === "u") {
		document.getElementById('q17').innerHTML = "Letter is a vowel";
	}else{
		document.getElementById('q17').innerHTML = "Letter is not a vowel";
	}
}

function q18() {
    var number1 = parseInt(document.getElementById('input18.1').value);
    var number2 = parseInt(document.getElementById('input18.2').value);
    if (number1 === number2) {
        document.getElementById('q18').innerHTML = "They are equal";
    } else if (number1 !== number2) {
        document.getElementById('q18').innerHTML = "They are not equal";
	}
}

function q19(){
	var month = parseInt(document.getElementById('input19').value);
	switch(month){
		case 1:
			document.getElementById('q19').innerHTML = "Month: January";
			break;
		case 2:
			document.getElementById('q19').innerHTML = "Month: February";
			break;
		case 3:
			document.getElementById('q19').innerHTML = "Month: March";
			break;
		case 4:
			document.getElementById('q19').innerHTML = "Month: April";
			break;
		case 5:
			document.getElementById('q19').innerHTML = "Month: May";
			break;
		case 6:
			document.getElementById('q19').innerHTML = "Month: June";
			break;
		case 7:
			document.getElementById('q19').innerHTML = "Month: July";
			break;
		case 8:
			document.getElementById('q19').innerHTML = "Month: August";
			break;
		case 9:
			document.getElementById('q19').innerHTML = "Month: September";
			break;
		case 10:
			document.getElementById('q19').innerHTML = "Month: October";
			break;
		case 11:
			document.getElementById('q19').innerHTML = "Month: November";
			break;
		case 12:
			document.getElementById('q19').innerHTML = "Month: December";
			break;
		default:
			document.getElementById('q19').innerHTML = "Incorrect input";
	}
	
}

// var ypos = window.pageYOffset;
// console.log(ypos);
// if (ypos >= 80){
// 	document.getElementById('header').style.height = "50px";
// 	console.log(ypos);
// }

function init(){
    window.addEventListener('scroll',function(e){
        var ypos = window.pageYOffset;
        if (ypos > 10) {
            document.getElementById('header').style.height = "50px";
            document.getElementById('header').style.fontSize = "22px";
        }else{
            document.getElementById('header').style.height = "80px";
            document.getElementById('header').style.fontSize = "32px";
        }
    });
}
window.onload = init();

