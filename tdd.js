var assert = {

	equals:function (expectedResult, returnedResult) {
		// body...
		var myDiv = new RedOrGreen("div");

		if (expectedResult === returnedResult) {
			myDiv.makeGreen();
		}
		else {

			myDiv.makeRed();

		}
	}
};

var TestMyCode = {
	run:function(nameOfTest, functionToExecute){
		this.testToRun = nameOfTest;
		functionToExecute(assert);
	}
};