Javascript Helpers
==================

Some files designed to be used with html5 canvas games.

##Event Handlers

Simple mouse / keyboard handler for 2D canvas games.

Example usage:

Initialize:
```javascript
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

KMEH.init(canvas);
```

Check if mouse buttons are down:
```javascript
var left   = KMEH.mouseCode.left,
    middle = KMEH.mouseCode.middle,
    right  = KMEH.mouseCode.right;

KMEH.mouseButtonDown(left); // true if left button down
```

Check if keys are down:
```javascript
var keyLeft = KMEH.keyCode.left;

KMEH.keyDown(keyLeft); // true if left arrow is pressed

/* 
 * included codes:
 * KMEH.keycode.up
 * KMEH.keycode.down 
 * KMEH.keycode.left 
 * KMEH.keycode.right 
 * KMEH.keycode.pageUp 
 * KMEH.keycode.pageDown 
 * KMEH.keycode.enter
 *
 * More can be added to the keyCode object
 */
```
##Template

Template file for an html5 canvas game. Useful as a learning tool or to get a project up and running as quickly as possible. event_handlers.js is a dependency.
