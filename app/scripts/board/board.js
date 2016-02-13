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
      // Initialize our board
      for (var x = 0; x < service.size * service.size; x++) {
        this.board[x] = null;
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

	this.forEach = function(cb) {
		var totalSize = this.size * this.size;
		for (var i = 0; i < totalSize; i++) {
			var pos = this._positionToCoordinates(i);
			cb(pos.x, pos.y, this.tiles[i]);
		}
	};
	
// Set a cell at position
	this.setCellAt = function(pos, tile) {
	if (this.withinBoard(pos)) {
		var xPos = this._coordinatesToPosition(pos);
		this.tiles[xPos] = tile;
		}
	};

// Fetch a cell at a given position
	this.getCellAt = function(pos) {
		if (this.withinBoard(pos)) {
			var x = this._coordinatesToPosition(pos);
			return this.tiles[x];
		} else {
			return null;
		}
	};

// A small helper function to determine if a position is
// within the boundaries of our Board
	this.withinBoard = function(cell) {
		return cell.x >= 0 && cell.x < this.size &&
		cell.y >= 0 && cell.y < this.size;
	};
<<<<<<< Updated upstream
=======
	this._positionToCoordinates = function(i) {
		var x = i % service.size,
	    y = (i - x) / service.size;
	    return {
		    x: x,
		    y: y
	    };
	};
 
// Helper to convert coordinates to position
	this._coordinatesToPosition = function(pos) {
		return (pos.y * service.size) + pos.x;
	};
  	
  	this.startingTileNumber = 2;
  	this.buildStartingPosition = function() {
    	for (var x = 0; x < this.startingTileNumber; x++) {
      		this.randomlyInsertNewTile();
      	}
    }
    this.availableCells = function() {
    var cells = [],
        self = this;
 
    this.forEach(function(x,y) {
      var foundTile = self.getCellAt({x:x, y:y});
      if (!foundTile) {
        cells.push({x:x,y:y});
      }
    });
 
    return cells;
  };
>>>>>>> Stashed changes
});