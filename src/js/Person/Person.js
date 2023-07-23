class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`sayHello ${this.name}`)
	}
}

export default Person