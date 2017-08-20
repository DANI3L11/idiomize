
const expect = require('chai').expect
const idiomize = require('..').default

describe('#idiomize', function () {

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
		const translation = idiomize("Programar")
		expect(translation).to.equal("Program")
	})
describe('#idiomize', function () {

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		
	})
describe('#idiomize', function () {

	it('Si la plabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
		
	})
describe('#idiomize', function () {

	it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
		
	})

})