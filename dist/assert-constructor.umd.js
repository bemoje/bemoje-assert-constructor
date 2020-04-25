(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-constructor'), require('@bemoje/type-of'), require('chalk')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-constructor', '@bemoje/type-of', 'chalk'], factory) :
	(global = global || self, global['assert-constructor'] = factory(global.isConstructor, global.typeOf, global.chalk));
}(this, (function (isConstructor, typeOf, chalk) { 'use strict';

	isConstructor = isConstructor && Object.prototype.hasOwnProperty.call(isConstructor, 'default') ? isConstructor['default'] : isConstructor;
	typeOf = typeOf && Object.prototype.hasOwnProperty.call(typeOf, 'default') ? typeOf['default'] : typeOf;
	chalk = chalk && Object.prototype.hasOwnProperty.call(chalk, 'default') ? chalk['default'] : chalk;

	/**
	 * Throws TypeError if 'value' is not a constructor.
	 * @param {*} value - The value to evaluate
	 * @returns {void}
	 */
	function assertConstructor(value) {
		if (!isConstructor(value)) {
			throw new TypeError(
				[
					chalk.gray('Expected '),
					chalk.bold.green('class constructor, '),
					chalk.gray('got '),
					chalk.bold.red(typeOf(value)),
				].join(''),
			)
		}
	}

	return assertConstructor;

})));
