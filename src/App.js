import './App.css';

// Spred operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(`task1`, arr3);




// Rest operator
// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 }
// console.log(`task4`, a);
// console.log(`task4`, b);
// console.log(`task4`, rest);



function sum(...nums) {
	return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(`task2`, sum(1, 2, 3));
console.log(`task2`, sum(4, 5, 6, 7));


// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(`task3`, first);
// console.log(`task3`, rest);


// Деструктуризація
// обєкту

// const person = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
// const { name, age, address: { city } } = person;
// console.log(`Name`, name);
// console.log(`Age`, age);
// console.log(`City`, city);

const person = { name: 'John', age: 30 };
const { name, age, country = 'USA' } = person;
console.log(`Country`, country);

// Масиву

const number = [1, 2, 3, 4, 5];
const [first, second, ...rest] = number;
console.log(`Task5`, first);
console.log(`Task5`, second);
console.log(`Task5`, rest);



// ПРОМІСИ

const promise = new Promise((resolve, reject) => {
	// Виконуємо асинхронну операцію
	// Якщо операція успішна, викликаємо resolve з результатом
	// Якщо стається помилка, викликаємо reject з помилкою
});

promise
	.then(result => {
		// обробка результату виконання операціі
	})
	.catch(error => {
		// Обробка помилки
	});


// Function

const person2 = {
	name: "Ivan",
	age: 18,
	sayHi: () => console.log(`Name is ${person2.name}`),
	satAge() {
		console.log(this.age);
	}
}

person2.sayHi();
person2.satAge();


// Експорт і імпорт фунціі

// імпорт по дефолту, можна тільки один зі сторінки, назва несуттєво при вказанні імпорту.
// імпорт декількох функцій з одної компоненти - експорт вказувати перед const і при імпорті в {} точну назву функці

// Методи Масивів

const arr = [
	{
		name: 'test1',
		age: 13
	},
	{
		name: 'test2',
		age: 14
	},
	{
		name: 'test3',
		age: 15
	},
	{
		name: 'test4',
		age: 16
	},
	{
		name: 'test5',
		age: 17
	},
	{
		name: 'test6',
		age: 18
	},
	{
		name: 'test7',
		age: 19
	},
	{
		name: 'test8',
		age: 20
	}
]

arr.map((value) => {
	console.log(value);
	console.log(value.name);
	console.log(value.name + " " + value.age);

})

// Reduce
function sum2(...nums) {
	return nums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

console.log(`Reduce`, sum(1, 2, 3));
console.log(`Reduce`, sum(1, '2', 3));









function App() {
	return (
		<div className="App">

		</div>
	)
}

export default App;
