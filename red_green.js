function RedOrGreen (elementTag) {
	// body...
	this.makeGreen  = function() {
		// body...
		document.getElementsByTagName(elementTag)[0].style.backgroundColor = "green";
	};

	this.makeRed = function() {
		// body...
		document.getElementsByTagName(elementTag)[0].style.backgroundColor = "red";
	};

};