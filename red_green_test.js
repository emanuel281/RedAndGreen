var changeElementColor = new RedOrGreen("div");

changeElementColor.makeGreen();

if(document.getElementsByTagName('div')[0].style.backgroundColor === "green"){
	alert("Green!");
}
else{
	alert("Not Green!");
}

changeElementColor.makeRed();

if(document.getElementsByTagName('div')[0].style.backgroundColor === "red"){
	alert("Red!");
}
else{
	alert("Not Red!");
}