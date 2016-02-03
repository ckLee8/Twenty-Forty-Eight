angular.module('Board')
.directive('tile', function() {
	return {
		restrict: 'A',
		scope: {
			ngModel: '='
		},
		templateUrl: 'scripts/board/tile.html'
	};
});