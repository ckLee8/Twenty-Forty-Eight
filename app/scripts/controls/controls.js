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
	this.on = function(cb) {
  		this.keyEventHandlers.push(cb);
	};

	this._handleKeyEvent = function(key, evt) {
		var callbacks = this.keyEventHandlers;
	    if (!callbacks) {
	    	return;
	    }	
 
	    evt.preventDefault();
	    if (callbacks) {
	    	for (var x = 0; x < callbacks.length; x++) {
	      		var cb = callbacks[x];
	      		cb(key, evt);
	    	}
	  	}
	};
});