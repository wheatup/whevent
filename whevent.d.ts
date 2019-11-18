declare module whevent {
	export var debugMode: boolean;

	export var logger: function;

	export var lastEvent: any;

	/**
	 * Bind a signal with given function
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	@deprecated
	export function bind(signal: string|symbol, func: function, self?: any);

	/**
	 * Bind a signal with given function
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	export function on(signal: string|symbol, func: function, self?: any);

	/**
	 * Bind a signal with given function, once the signal is broadcasted, that function always get called first.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	@deprecated
	export function bindPriority(signal: string|symbol, func: function, self?: any);
	/**
	 * Bind a signal with given function, once the signal is broadcasted, that function always get called first.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	export function onPriority(signal: string|symbol, func: function, self?: any);

	/**
	 * Bind a signal with given function, once the signal is broadcasted, the binding between this signal and this function will be destroyed.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	@deprecated
	export function bindOnce(signal: string|symbol, func: function, self?: any);
	/**
	 * Bind a signal with given function, once the signal is broadcasted, the binding between this signal and this function will be destroyed.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	export function onOnce(signal: string|symbol, func: function, self?: any);

	/**
	 * Bind a signal with given function, once the signal is broadcasted, that function always get called first, after that the binding between this signal and this function will be destroyed.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	@deprecated

	export function bindOncePriority(signal: string|symbol, func: function, self?: any);
	/**
	 * Bind a signal with given function, once the signal is broadcasted, that function always get called first, after that the binding between this signal and this function will be destroyed.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	export function onOncePriority(signal: string|symbol, func: function, self?: any);

	/**
	 * Destroy the binding between given signal and function.
	 * @param signal Signal
	 * @param func Function
	 * @param self This boject
	 */
	@deprecated
	export function unbind(signal: string|symbol, func: function, self?: any);

	/**
	 * Destroy the binding between given signal and function.
	 * @param signal Signal
	 * @param func Function
	 * @param self This object
	 */
	export function off(signal: string|symbol, func: function, self?: any);

	/**
	 * Destroy a signal, all bindings with this signal will be destroyed.
	 * @param signal Signal
	 */
	export function destroy(signal: string|symbol);

	/**
	 * Broadcast a signal, triggers all binded functions.
	 * @param signal Signal
	 */
	@deprecated
	export function call(signal: string|symbol, ...data: any);

	/**
	 * Broadcast a signal, triggers all binded functions.
	 * @param signal Signal
	 */
	export function emit(signal: string|symbol, ...data: any);

	/**
	 * Unregister all event bindings associated with the listener
	 * @param self Listener object
	 */
	@deprecated
	export function unbindBy(self: any);

	/**
	 * Unregister all event bindings associated with the listener
	 * @param self Listener object
	 */
	export function offBy(self: any);
}
