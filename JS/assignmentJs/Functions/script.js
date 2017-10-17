console.log("hello");
main = function(){
  while(true){
    for(var i = 0; i < 20; i++){
      console.log(i+"- q"+i+"()");
    }
  var n = prompt("Enter your choice:");
  switch (n) {
    case 1:
      q1();
      break;
    case 2:
      q2();
      break;
    case 3:
      q3();
      break;
    case 4:
      q4();
      break;
    case 5:
      q5();
      break;
    default:
      break;
    }
  }
}

function q1(){
  console.log("Hello there!");
}

q2 = function(){
  var date = new Date();
  console.log(date);
}

function q3(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var fullname = firstName + " " + lastName;
  console.log(fullname);
}
