angular.module("sakura", []);


angular
	.module("sakura")
		.controller("blossoms", ["$scope", function($scope) {

				$scope.hideWelcome=true
				$scope.hideList=true

				$scope.pressMe = function(){
					console.log("CLICK!")

					$scope.hideWelcome= !$scope.hideWelcome
					$scope.hideList= !$scope.hideList
				}
			
		}])