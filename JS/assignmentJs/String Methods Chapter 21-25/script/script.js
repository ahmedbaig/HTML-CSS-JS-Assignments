document.write("Working..");

function q21(){
  var split = document.getElementById('q21').value;
  var res = split.split("");
  document.getElementById("answer21").innerHTML = " "; //refresh
  for (var i = 0; i < split.length; i++){
    document.getElementById("answer21").innerHTML += res[i]+"<br>";
  }
}

function q22(){
  var input = document.getElementById('q22').value;
  var last = input.length - 1;
  document.getElementById("answer22").innerHTML = input[last];
}
