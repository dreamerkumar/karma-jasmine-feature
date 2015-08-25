(function(){
	'use strict';
	featureSteps(/Roman numerals/)
		.given(/I have a Roman numerals calculator/, function(){
			this.calculator = new Calculator();
		})
		.given(/I enter '(.*)' in the calculator/, function(roman){
			this.calculator.setInput(roman);
		})
		.when(/I convert the roman numeral/, function(){
			this.calculator.convert();
		})
		.when(/I press add/, function(){
			this.calculator.add();
		})
		.then(/the displayed value is '(.*)'/, function(num){
		//	expect(this.calculator.getDisplayedValue()).toBe(num);
		});
})();


function Calculator(){
	this.inputs = [];
}

Calculator.prototype.add = function(){
	
}

Calculator.prototype.getDisplayedValue = function(){
	
}

Calculator.prototype.setInput = function(value){
	this.inputs.push(value);
}

Calculator.prototype.convert = function(){
	
}