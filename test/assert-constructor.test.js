import assertConstructor from '../src/assert-constructor'

describe('assertConstructor', () => {
	test('works', () => {
		expect(() => assertConstructor(class MyClass {})).not.toThrow()
		expect(() => assertConstructor(function MyClass() {})).not.toThrow()
		expect(() => assertConstructor(() => {})).toThrow(TypeError)
		expect(() => assertConstructor('asd')).toThrow(TypeError)
	})
})
