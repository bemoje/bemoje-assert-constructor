import isConstructor from '@bemoje/is-constructor';
import typeOf from '@bemoje/type-of';
import chalk from 'chalk';

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

export default assertConstructor;
