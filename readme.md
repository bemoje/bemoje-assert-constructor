# @bemoje/assert-constructor

Throws TypeError if 'value' is not a constructor.

#### Version

<span><a href="https://npmjs.org/@bemoje/assert-constructor" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/assert-constructor" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/assert-constructor" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-assert-constructor.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/assert-constructor" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-assert-constructor.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/assert-constructor" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/assert-constructor" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-assert-constructor/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-assert-constructor" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/assert-constructor
npm install --save @bemoje/assert-constructor
npm install --save-dev @bemoje/assert-constructor
```

## Usage

```javascript
import assertConstructor from '@bemoje/assert-constructor'

function constructorName(ctor) {
	assertConstructor(ctor)
	return ctor.name
}

constructorName(class MyClass {})
//=> 'MyClass

constructorName(function MyClass() {})
//=> 'MyClass

try {
	constructorName(() => {})
	//=> throw TypeError('Expected class constructor, got Function')
} catch (e) {
	console.log(e)
}

try {
	constructorName('asd')
	//=> throw TypeError('Expected class constructor, got String')
} catch (e) {
	console.log(e)
}

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### assertConstructor

Throws TypeError if 'value' is not a constructor.

##### Parameters

-   `value` **any** The value to evaluate

##### Returns
**void** 

[1]: #assertconstructor

[2]: #parameters