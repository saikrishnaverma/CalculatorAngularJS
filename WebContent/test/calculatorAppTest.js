describe('calculatorAppAngular', function () {
	 var scope;
	 var controller;
	
	beforeEach(function() {
		module('calculatorAppAngular')
	});
	
	describe('CalculatorController', function () {
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			
			controller = $controller('CalculatorController', {
				$scope: scope
			});
		}));
	
	it('5 + 1 should equal 6', function () {
		var result = scope.calculate(5, "+", 1);
		expect(result).toEqual(6);
		});
	
	it('5 - 1 should equal 4', function () {
		var result = scope.calculate(5, "-", 1);
		expect(result).toEqual(4);
		});
	
	it('5 * 1 should equal 5', function () {
		var result = scope.calculate(5, "*", 1);
		expect(result).toEqual(5);
		});
	
	it('10 / 5 should equal 2', function () {
		var result = scope.calculate(10, "/", 5);
		expect(result).toEqual(2);
		});
	
	it('5 ^ 3 should equal 125', function () {
		var result = scope.calculate(5, "^", 3);
		expect(result).toEqual(125);
		});
	
	it('625 sqrt should equal 25', function () {
		var result = scope.calculate(625, "sqrt");
		expect(result).toEqual(25);
		});

	});
	
});