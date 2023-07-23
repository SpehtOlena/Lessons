class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`sayHello ${this.name}`)
	}
}

class Student extends Person {
	constructor(name, age, grade) {
		super(name, age);
		this.grade = grade
	}
}

const test = new Person('test', 19)

test.sayHello()


// SPRED

const men = {
	name1: "Tast",
	age: 32,
	address: {
		numberAddress: 4564645,
		zipCode: "dksjfksd"
	}
}

const { name1, age, sex = 'man', address: { numberAddress } } = men

console.log(name1 + " " + age + " " + sex + " " + numberAddress);


