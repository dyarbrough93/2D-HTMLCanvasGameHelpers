/*
 * Provides an easy interface for canvas event handling
 */
var KMEH = (function(window, undefined) { // Key Mouse Event Handlers

	var canvas;

	/*
	 * Initializes the event handlers
	 * @param {Canvas} canvas Canvas to attach the event handlers to
	 */
	function init(_canvas)
	{
		canvas = _canvas;

		// key event listeners
		window.onkeydown = onKeyDown;
		window.onkeyup   = onKeyUp;
		
		// mouse event listeners
		canvas.onmousemove = setMousePosition;
		canvas.onmousedown = mouseDown;
		canvas.onmouseup   = mouseUp;
	}

	/**************************************\
	| Mouse event handlers                 |
	\**************************************/

	// mouse object
	var mouse = {
		x: 0,
		y: 0
	};

	// mouse code mapping
	var mouseCode = {
		left: 1,
		middle: 2,
		right: 3
	};

	/*
	 * Set the mouse's screen position
	 */
	function setMousePosition(e) 
	{
		var scale = GravitySim.getScale();
		mouse.x = (e.pageX - canvas.offsetLeft);
		mouse.y = (e.pageY - canvas.offsetTop);
	}
	
	/*
	 * Get the mouse's screen position
	 * @return {pair} Mouse screen position
	 */
	function getMousePosition()
	{
		return {
			x: mouse.x, 
			y: mouse.y
		};
	}
	
	/*
	 * Is the parameter mouse button down?
	 * @param {mouseCode} mousecode Mousecode to check
	 */
	function mouseButtonDown(mousecode)
	{
		mousecode = "_" + mousecode;
		if (mouse.hasOwnProperty(mousecode))
			return mouse[mousecode];
		else
			return false;
	}

	/*
	 * Mouse down event handler
	 */
	function mouseDown(e) 
	{
		var mousecode = "_" + e.which;
		mouse[mousecode] = true;
	}

	/*
	 * Mouse up event handler
	 */
	function mouseUp(e) 
	{
		var mousecode = "_" + e.which;
		mouse[mousecode] = false;
	}

	/**************************************\
	| Key event handlers                   |
	\**************************************/
	
	// keys object
	var keys = {
	};
	
	// key code mapping
	var keyCode = {
		up: 38,
		down: 40,
		left: 37,
		right: 39, 
		pageUp: 33,
		pageDown: 34,
		enter: 13
		
		/* Add new keycodes here! */
	};
	
	/*
	 * Is the parameter key down?
	 * @param {keyCode / int} keycode Key to check
	 */
	function keyDown(keycode)
	{
		keycode = "_" + keycode;
		if (keys.hasOwnProperty(keycode))
			return keys[keycode];
		else
			return false;
	}

	/*
	 * Key down event handler
	 */
	function onKeyDown (e) 
	{
		var keycode = "_" + e.which;
		keys[keycode] = true;
	}

	/*
	 * Key up event handler
	 */
	function onKeyUp (e) 
	{
		var keycode = "_" + e.which;
		keys[keycode] = false;
	}

	// public module elements
	return {
		init              : init,
		getMousePosition  : getMousePosition,
		mouseButtonDown   : mouseButtonDown,
		mouseCode         : mouseCode,
		keyCode           : keyCode,
		keyDown           : keyDown
	};
})(window);
