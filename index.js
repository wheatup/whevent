var whevent = (function () {
	const whevent = {
		debugMode: false,
		logger: null,
		_callStacks: {},

		bind: function (signal, func, self) {
			if (!this._callStacks[signal]) {
				this._callStacks[signal] = [];
			}
			this._callStacks[signal].push({ func: func, self: self, once: false });
		},

		bindPriority: function (signal, func, self) {
			if (!this._callStacks[signal]) {
				this._callStacks[signal] = [];
			}
			this._callStacks[signal].splice(0, 0, { func: func, self: self, once: false });
		},

		bindOnce: function (signal, func, self) {
			if (!this._callStacks[signal]) {
				this._callStacks[signal] = [];
			}
			this._callStacks[signal].push({ func: func, self: self, once: true });
		},

		bindOncePriority: function (signal, func, self) {
			if (!this._callStacks[signal]) {
				this._callStacks[signal] = [];
			}
			this._callStacks[signal].splice(0, 0, { func: func, self: self, once: true });
		},

		unbind: function (signal, func, self) {
			if (!this._callStacks[signal]) { return; }
			for (var i = 0; i < this._callStacks[signal].length; i++) {
				if (this._callStacks[signal][i].func === func && (!self || this._callStacks[signal][i].self === self)) {
					this._callStacks[signal].splice(i, 1);
					return;
				}
			}

			if (this._callStacks[signal].length <= 0) {
				this._callStacks[signal] = undefined;
			}
		},

		unbindBy: function (obj) {
			Object.keys(this._callStacks).forEach(key => {
				this._callStacks[key] = this._callStacks[key].filter(e => e.self !== obj);
			});
		},

		destroy: function (signal) {
			this._callStacks[signal] = undefined;
		},

		call: function (signal, ...data) {
			if (this.debugMode) {
				if (!this.logger) {
					this.logger = console.log;
				}
				this.logger('CALL', signal, ...data);
			}

			if (!this._callStacks[signal]) { return; }
			var eves = this._callStacks[signal];
			for (var i = 0; i < eves.length; i++) {
				if (eves[i].func) {
					eves[i].func.call(eves[i].self, ...data);
					if (eves[i]) {
						eves[i]._processed = true;
					}
				}
				if (eves[i].once) {
					eves.splice(i, 1);
					i--;
				}
			}

			if (eves.length <= 0) {
				this.destroy(signal);
			}
		}
	};

	// Aliases
	whevent.on = whevent.bind;
	whevent.onOnce = whevent.bindOnce;
	whevent.onPriority = whevent.bindPriority;
	whevent.onOncePriority = whevent.bindOncePriority;
	whevent.off = whevent.unbind;
	whevent.offBy= whevent.unbindBy;
	whevent.emit = whevent.call;

	if (typeof module !== 'undefined') {
		module.exports = whevent;
	}

	return whevent;
})();
