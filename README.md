whevent
==============

### A lite and convenient event system

Just a simple singleton event system used by myself :)

Usage
-----

```js
var whevent = require('whevent');

// Bind the signal with the event function: whevent.bind(signal, func, context);
whevent.on('SPEAK', function1, this);

// Bind the signal with another event function, but this function will always get called first!
whevent.onPriority('SPEAK', function2, this);

// Bind the signal with a 3rd event function
// But once the function3 get called, the binding of this function with this signal will be destroyed
whevent.onOnce('SPEAK', function3, this);

// Call the event: whevent.call(signal, data);
// Calls order: function2, function1, function3
whevent.emit('SPEAK', 'Hello!');

// Unbind the binded function with the signal
whevent.off('SPEAK', function1);

// Unbind all the binded functions associated with the listener
whevent.offBy(this);

// Destory the signal, all bindings will be destroyed
whevent.destroy('SPEAK');
```
