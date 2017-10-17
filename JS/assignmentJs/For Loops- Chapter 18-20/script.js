try{
	var something;
	function q1(e){
		if(e.keyCode == 13){
			var input = document.getElementById('input1').value;
			for (var i = 0; i < 5; i++) {
				document.getElementById('q1').innerHTML += input+"<br>";
			}
		}
	}

	function q2(e){
		if(e.keyCode == 13){
			var range = parseInt(document.getElementById('input2').value);
			for (var i = 0; i <= range; i++) {
				document.getElementById('q2').innerHTML += i+"<br>";
			}
		}
	}

	function q3(e){
		if(e.keyCode == 13){
			var multiply = parseInt(document.getElementById('input3.1').value);
			var range = parseInt(document.getElementById('input3.2').value);
			for (var i = 0; i <= range; i++) {
				var answer = multiply * i;
				document.getElementById('q3').innerHTML += multiply+" X ";
				document.getElementById('q3').innerHTML += i+" = ";
				document.getElementById('q3').innerHTML += answer+"<br>";
			}
		}
	}

	var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
	function q4(e){
		var input;
		document.getElementById('q4').innerHTML = " ";
		if(e == 1){
			// View all
			for (var i = 0; i < a.length; i++) {
				document.getElementById('q4').innerHTML += a[i]+" ";
			}
		}else if(e == 2){
			// Push
			input = document.getElementById('input4.1').value;
			console.log("accesed");
			a.push(input);
		}else if(e == 3){
			// Pop
			a.pop();
		}else if(e == 4){
			// Shift
			a.shift();
		}else if(e == 5){
			// Unshift
			input = document.getElementById('input4.2').value;
			a.unshift(input);

		}
		
	}

	function q5(){
		var a = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
		document.getElementById('q5').innerHTML = " ";
		// View all
		for (var i = 0; i < a.length; i++) {
			document.getElementById('q5').innerHTML += "At index "+ i + " " + a[i] + " is" + "<br>";
		}
	}

	function q6(e){
		var items = [];
		var input = parseInt(document.getElementById('input6').value);
		//for creating boxes
		var parent = document.getElementById('boxes');
		for (var i = 0; i < input; i++){
			var element = document.createElement("INPUT");
			element.setAttribute('id', 'box'+i);
			element.setAttribute('placeholder', 'Item '+i);
			element.setAttribute('onkeypress', 'return ');
			parent.appendChild(element);
		}
		for ( i = 0; i < input; i++){
			items[i] = document.getElementById('box'+i);
		}
		for ( i = 0; i < items.length; i++) {
			document.getElementById('q5').innerHTML += "At index "+ i + " " + items[i] + " is" + "<br>";
		}
	}
}
catch(err){
	document.write(err.message);
}

