TestMyCode.run("testing hello world function", function(){
    var result = helloWorld();
    // is the result as we expected?
    Test.assert("hello world!", result);
});