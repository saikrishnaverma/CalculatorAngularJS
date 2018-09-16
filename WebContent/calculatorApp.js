var calculatorModule = angular.module("calculatorAppAngular", []);
calculatorModule.controller("CalculatorController", CalculatorController);

function CalculatorController($scope){
	
	$scope.firstOperand = "";
	$scope.secondOperand = "";
	$scope.operator = "";
	$scope.operatorMap = "Please enter + for Addition, - for Subtraction, * for Multiplication, / for Division, ^ for Square by N, sqrt for Square Root.";
	$scope.resultValue = "";
	$scope.result = "";
	$scope.restartButtonClicked = true;
	
	$scope.calculateResult = function() {
		var firstOperand = parseFloat($scope.firstOperand);
		var operator = $scope.operator.toString();
		var secondOperand = parseFloat($scope.secondOperand);
		
		var resultValue = $scope.calculate(firstOperand, operator, secondOperand);
		
		$scope.result = "The result is " + $scope.resultValue.toString();
		$scope.restartButtonClicked = !$scope.restartButtonClicked;
	}
	
	$scope.calculate = function(firstOperand, operator, secondOperand) {
		
		switch(operator) {
		case "+":
			$scope.resultValue = firstOperand + secondOperand;
			break;
		case "-":
			$scope.resultValue = firstOperand - secondOperand;
			break;
		case "*":
			$scope.resultValue = firstOperand * secondOperand;
			break;
		case "/":
			$scope.resultValue = firstOperand / secondOperand;
			break;
		case "^":
			$scope.resultValue = Math.pow(firstOperand,secondOperand);
			break;
		case "sqrt":
			$scope.resultValue = Math.sqrt(firstOperand);
			break;
		default:
			break;
	}
		return $scope.resultValue;
	}
	
	$scope.restartCalculator = function() {
		$scope.restartButtonClicked = !$scope.restartButtonClicked;
		$scope.firstOperand = "";
		$scope.secondOperand = "";
		$scope.operator = "";
		$scope.resultValue = "";
		$scope.result = "";
	}
	
}

calculatorModule.directive("validateoperand", function () {
	return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
        	ctrl.$validators.validateoperand = function(modelValue, viewValue) {
        		if (ctrl.$isEmpty(modelValue)) {
        	          return true;
        	        }
        		else if(scope.restartButtonClicked && viewValue == ""){
        			return true;
        		}
        		
        		if (/^[0-9]+[.]?[0-9]*$/.test(viewValue)) {
        			if(scope.operator.toString() == "/" && viewValue == 0){
        				return false;
        			}
        			else {
        				return true;
        			}
                } else {
                	return false;
                }
            	};
            }
		};
});

calculatorModule.directive("validateoperator", function () {
	return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
        	ctrl.$validators.validateoperator = function(modelValue, viewValue) {
        		if (ctrl.$isEmpty(modelValue)) {
        	          return true;
        	        }
        		else if(scope.restartButtonClicked && viewValue == ""){
        			return true;
        		}
        		
        		if (viewValue == '+' || viewValue == '-' || viewValue == '*' || viewValue == '/' || viewValue == '^' || viewValue == 'sqrt') {
        			return true;
                } else {
                	return false;
                }
            	};
            }
		};
});