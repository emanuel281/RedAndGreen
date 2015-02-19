
if (document.getElementById("mySquare").style.backgroundColor === "green") {
	setBackgroundColor("mySquare", "red");
	alert("Success!");
}
if (document.getElementById("mySquare").style.backgroundColor === "red"){
	setBackgroundColor("mySquare", "green");
	alert("Failure!");
};
