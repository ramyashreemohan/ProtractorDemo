function LocatorsFunction()
{
	this.getURL = function()
	{
		browser.get("http://juliemr.github.io/protractor-demo/")
	}
	
	this.firstInput = element(by.model("first"))
	this.secondInput = element(by.model("second"))
	this.goButton = element(by.id("gobutton"))
	
	this.res = element(by.css("h2[class='ng-binding']"))
}

module.exports = new LocatorsFunction()
