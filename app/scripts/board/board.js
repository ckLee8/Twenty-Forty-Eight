angular.module('Board', [])
.factory('TileModel', function() {
	var Tile = function(pos, val) {
		this.x = pos.x;
		this.y = pos.y;
		this.value = val || 2;
	};
	return Tile;
})
.service('BoardService', function() {
	this.board = [];
	this.tiles = [];
	this.tiles.push(new TileModel({x: 1, y: 1}, 2));
  	this.tiles.push(new TileModel({x: 1, y: 2}, 2));
	this.size = 4;
});