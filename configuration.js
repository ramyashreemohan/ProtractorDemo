var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
seleniumAddress : 'http://localhost:4444/wd/hub',

	  
		specs: ['MainCode.js'],

		onPrepare : function()
		{
			browser.driver.manage().window().maximize()
			jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      )
			
		},
		
		/*suite:
		{
			//If you give "Smoke" to run in command prompt, then only "data.js" file and "Locator.js" file will be 
			//executed. "MainCode.js" file will not be executed.
			Smoke: ['data.js','Locator.js' ],
			Regression: 'data.js'  
			//If you give "Regression" to run in command prompt, then only "data.js" file will be executed.
		},*/

		jasmineNodeOpts:
		{
			showColors: true,
		}
}


