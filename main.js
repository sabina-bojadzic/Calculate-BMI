var input = document.getElementById("height");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
});

var input = document.getElementById("weight");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
});

function racun(){
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;	
	var result = weight/(height**2);
	result = result.toFixed(2);	
	var a = "Vaš BMI iznosi: " + result + ". Vi ste pothranjeni. Pazite na svoju ishranu.☹";
	var b = "Vaš BMI iznosi: " + result + ". Imate idealnu tjelesnu masu. Nastavite zdravo da se hranite.😀";
	var c = "Vaš BMI iznosi: " + result + ". Imate prekomjernu tjelesnu masu. Pazite na svoju ishranu.☹";
	var d = "Vaš BMI iznosi: " + result + ". Vi ste pretili. Dobro bi bilo da pokušate smršati kako bi popravili kvalitetu svog života.☹";
	
	if (result<=18.5) {
	document.querySelector('#result').innerHTML = a;
	return;
	}
	if (result>18.5 && result<=24.9) {
	document.querySelector('#result').innerHTML = b;
	return;
	}
	if (result>24.9 && result<=29.9) {
	document.querySelector('#result').innerHTML = c;
	return;
	}
	if(result>29.9) {
	document.querySelector('#result').innerHTML = d;
	return;
	}
}

function myFunction() {
  document.getElementById("container").reset();
}