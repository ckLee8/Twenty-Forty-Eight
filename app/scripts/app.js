'use strict';

angular
.module('twentyfortyeightApp', ['Game', 'Board', 'Controls'])
.controller('GameController', function(GameManager) {
	this.game = GameManager;
});
