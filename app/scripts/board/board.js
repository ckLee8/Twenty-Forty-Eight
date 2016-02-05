angular.module('Board', [])
.factory('TileModel', function() {
	var Tile = function(pos, val) {
		this.x = pos.x;
		this.y = pos.y;
		this.value = val || 2;
	};
	return Tile;
})
.service('BoardService', function(TileModel) {
	this.buildEmptyGameBoard = function() {
      var self = this;
      // Initialize our grid
      for (var x = 0; x < service.size * service.size; x++) {
        this.grid[x] = null;
      }

      this.forEach(function(x,y) {
        self.setCellAt({x:x,y:y}, null);
      });
    };
	this.board = [];
	this.tiles = [];
	this.tiles.push(new TileModel({x: 1, y: 1}, 2));
  	this.tiles.push(new TileModel({x: 1, y: 2}, 2));
	this.size = 4;
});