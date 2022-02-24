function compute() {
	var principal = document.getElementById("principal").value;
	if (Number(principal) <= 0) {
		alert("Enter a positive number");
	} else {
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate / 100;
		var year = new Date().getFullYear() + parseInt(years);
		document.getElementById("result").innerHTML = "<div class='output' >If you deposit " +
			"<span class='highlight'>" + principal + "</span>" +
			",\<br\><div class='output'>at an interest rate of " + "<span class='highlight'>" +
			rate + "%</span>" + ".\<br\><div class='output'>You will receive an amount of " +
			"<span class='highlight'>" + interest + "</span>" +
			",\<br\><div class='output'>in the year " + "<span class='highlight'>" +
			year + "</span></div>" + "\<br\>";
	}
}

function updateRate() {
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval + " %";
}

function validate() {
	var principal = document.getElementById("principal").value;
	if (Number(principal) <= 0) {
		alert("Enter a positive number");
	}
}
