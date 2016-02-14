angular.module('Controls', [])
.service('ControlsService', function($document) {
	var UP    = 'up',
        RIGHT = 'right',
        DOWN  = 'down',
        LEFT  = 'left';
 
    var constrolsMap = {
	    37: LEFT,
	    38: UP,
	    39: RIGHT,
	    40: DOWN
	};

	this.init = function() {
		var self = this;
		this.keyEventHandlers = [];
		$document.bind('keydown', function(evt) {
			var key = controlsMap[evt.which];
			if (key) {
				evt.preventDefault();
				self._handleKeyEvent(key, evt);
			}
		});
	};
});