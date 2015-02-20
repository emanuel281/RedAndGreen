var TestMyCode = {

	this.run:function (nameOfTest, functionToExecute) {
		// body...
		return this.functionToExecute();
	},

	this.assert:function(expectedResult, returnedResult){

		if (expectedResult === returnedResult) {
			//display green square
			document.getElementsByTagName('div')[0].style.border = "5px black solid";
			document.getElementsByTagName('div')[0].style.backgroundColor = "green";
		}

		else if (expectedResult !== returnedResult){
			//display red square
			document.getElementsByTagName('div')[0].style.border = "5px black solid";
			document.getElementsByTagName('div')[0].style.backgroundColor = "red";
		}
		
		else{
			//display red sqare
			document.getElementsByTagName('div')[0].style.border = "5px black solid";
			document.getElementsByTagName('div')[0].style.backgroundColor = "red";
		}
	}

};