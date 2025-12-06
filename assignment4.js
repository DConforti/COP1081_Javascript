function calculateTip() {
	let tip, total;
	
	let serviceQuality = document.getElementById("serviceQuality").value;
	let amountPaid = Number(document.getElementById("amountPaid").value);
	
	if(!qualityVerification(serviceQuality)) {
		return;
	}
	if(!amountVerification(amountPaid)) {
		return;
	}
	
	if(serviceQuality == "poor") {
		tip = amountPaid * 0.1;
	} else if(serviceQuality == "ok") {
		tip = amountPaid * 0.15;
	} else {
		tip = amountPaid * 0.2;
	}
	total = amountPaid + tip;
	
	document.getElementById("output").innerHTML = "<p>Amount Paid: $" + amountPaid.toFixed(2) + "<br>Service Quality: " + serviceQuality + "<br>Tip: $" + tip.toFixed(2) + "<br>Total: $" + total.toFixed(2);
}


function qualityVerification(serviceQuality) {
	let pass = false;
	
	if((serviceQuality == "poor") || (serviceQuality == "ok") || (serviceQuality == "great")) {
		pass = true;
	} else {
		document.getElementById("output").innerHTML = "<p>Please enter a valid quality.</p>";
	}
	
	return pass;
}


function amountVerification(amountPaid) {
	let pass = false;
	
	if( (amountPaid >= 5) && (amountPaid <= 500)) {
		pass = true;
	} else {
		document.getElementById("output").innerText = "<p>Please enter a valid amount.</p>";
	}
	
	return pass;
}