udf-event
==============

### A lite and convenient event system

Just a simple singleton event system used by myself :)

Usage
-----

```js
var udfEvent = require('udfEvent');

// Bind the signal with the event function: udfEvent.bind(signal, func, context);
udfEvent.on('SPEAK', function1, this);

// Bind the signal with another event function, but this function will always get called first!
udfEvent.onPriority('SPEAK', function2, this);

// Bind the signal with a 3rd event function
// But once the function3 get called, the binding of this function with this signal will be destroyed
udfEvent.onOnce('SPEAK', function3, this);

// Call the event: udfEvent.call(signal, data);
// Calls order: function2, function1, function3
udfEvent.emit('SPEAK', 'Hello!');

// Unbind the binded function with the signal
udfEvent.off('SPEAK', function1);

// Unbind all the binded functions associated with the listener
udfEvent.offBy(this);

// Destory the signal, all bindings will be destroyed
udfEvent.destroy('SPEAK');
```
