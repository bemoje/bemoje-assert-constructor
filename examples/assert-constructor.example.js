import assertConstructor from '../src/assert-constructor'

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
