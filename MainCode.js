describe("Super calculator test suite", function(){
	var objLoc = require('./Locator.js')
	var objData = require('./data.js')
	var using = require('jasmine-data-provider')
	beforeEach(function(){
		objLoc.getURL()
	})
	
	using(objData.DataDriven,function(holdData,description){
		
	
	it("Super calculator test case"+description, function(){
		
		objLoc.firstInput.sendKeys(holdData.first)
		objLoc.secondInput.sendKeys(holdData.second)
		objLoc.goButton.click();
			
			objLoc.res.getText().then(function(text){console.log(text)})
			
			expect(objLoc.res.getText()).toBe(holdData.result)
			
			
			browser.sleep(4000)
			
			console.log("I am GitDemo user and this is my 1st line code")
			console.log("I am GitDemo user and this is my 2nd line code")

			
			
	})
	})
})
