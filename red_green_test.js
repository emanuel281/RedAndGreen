var changeElementColor = new RedOrGreen("div");

changeElementColor.makeGreen();

if(document.body.lastChild.style.backgroundColor === "green"){
	alert("Green!");
}
else{
	alert("Not Green!");
}

changeElementColor.makeRed();

if(document.body.lastChild.style.backgroundColor === "red"){
	alert("Red!");
}
else{
	alert("Not Red!");
}