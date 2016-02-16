'use strict';

angular
.module('twentyfortyeightApp', ['Game', 'Controls'])
.controller('GameController', function(GameManager, ControlsService) {
	this.game = GameManager;

	this.newGame = function() {
    	ControlsService.init();
    	this.game.newGame();
    	this.startGame();
  	};

  	this.startGame = function() {
    	var self = this;
    	ControlsService.on(function(key) {
      		self.game.move(key);
    	});
    };
 
  	this.newGame();
});
