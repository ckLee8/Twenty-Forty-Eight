angular.module('Board', [])
.service('BoardService', function() {
	this.board = [];
	this.tiles = [];
	this.size = 4;
});