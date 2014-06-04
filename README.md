Javascript Helpers
==================

Some files designed to be used with html5 canvas games.

##Event Handlers

Simplified mouse and keyboard event handler usage and initialization.
Example usage:

```javascript
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  eventHandler.initMouseEvents(canvas); // initialize mouse position tracking and event listening
  eventHandler.initKeyEvents(canvas); // initializae key event listening
  
  // game loop
  function loop ()
  {
    updateStuff();
    renderStuff();
    if (eventHandler.keys.ctrlDown)
    {
      // Do something 
    }
    
    if (eventHandler.mouse.leftDown)
    {
      // Do something
    }
    // Sends the position of the mouse on the canvas to the console
    console.log("Mouse position: (" + eventHandler.mouse.x + ", " + eventHandler.mouse.y + ")"); 
    setTimeout(loop, 1000 / 60);
  }
  
  loop();
  
```

Full list of mouse and key object attributes in the event_handlers.js file.
