import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Compon from './components/Compon/Compon';
import UserCard from './components/UserCard/UserCard';
import UserCard2 from './components/UserCard/UserCard2';
import UserCard3 from './components/UserCard/UserCard3';
import Pages from './Pages/Pages';
import UserCard4 from './components/UserCard/UserCard4';
import UserCard5 from './components/UserCard/UserCard5';




// Умовний рендеринг 
// 1. number1 ? true : false
// 2. number1 && true
// 3. number1 || test




// рендеринг списків елементів з масиву
const elements = [
	"Елемент 1",
	"Елемент 2",
	"Елемент 3",
	"Елемент 4",
	"Елемент 5",
	"Елемент 6",
	"Елемент 7",
	"Елемент 8",
	"Елемент 9",
	"Елемент 10",
	"Елемент 11",
	"Елемент 12",
	"Елемент 13",
	"Елемент 14",
	"Елемент 15"
];


// рендеринг списків компонентів на основі масиву даних
const usersArray = [
	{ name: "Іван", age: 30, email: "ivan@example.com", city: "Київ" },
	{ name: "Марія", age: 25, email: "maria@example.com", city: "Львів" },
	{ name: "Петро", age: 40, email: "petro@example.com", city: "Харків" },
	{ name: "Олена", age: 35, email: "olena@example.com", city: "Одеса" },
	{ name: "Андрій", age: 28, email: "andriy@example.com", city: "Дніпро" },
	{ name: "Катерина", age: 22, email: "katerina@example.com", city: "Запоріжжя" },
	{ name: "Михайло", age: 33, email: "mikhailo@example.com", city: "Львів" },
	{ name: "Анна", age: 29, email: "anna@example.com", city: "Київ" },
	{ name: "Олександр", age: 45, email: "oleksandr@example.com", city: "Харків" },
	{ name: "Тетяна", age: 31, email: "tetiana@example.com", ity: "Львів" },
	{ name: "Євген", age: 38, email: "yevgen@example.com", city: "Одеса" },
	{ name: "Наталія", age: 27, email: "natalia@example.com", city: "Дніпро" },
	{ name: "Василь", age: 42, email: "vasyl@example.com", city: "Запоріжжя" },
	{ name: "Людмила", age: 24, email: "lyudmyla@example.com", city: "Київ" },
	{ name: "Сергій", age: 36, email: "sergiy@example.com", city: "Львів" }
];

// Умовний рендеринг на основі певних значень змінної





function App() {

	// Умовний рендеринг на основі певних значень змінної
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	// Sort
	const data = [1, 3, 5, 6, 4, 2, 8, 7]

	// Пагінація
	const dataEl = ['element 1', 'element 2', 'element 3', 'element 4', 'element 5', 'element 6', 'element 7']
	const itemPerPage = 2;
	const [currentPage, setCurrentPage] = useState(1);
	const startIndex = (currentPage - 1) * itemPerPage;
	const endIndex = startIndex + itemPerPage;
	const currentData = dataEl.slice(startIndex, endIndex)


	// Рендеринг списку елементів з використанням вкладених масивів
	const newArray = [
		{ id: 1, name: "test1", items: [1, 2, 3, 4, 5, 6] },
		{ id: 2, name: "test2", items: ['apple', 'banana', 'cherry', 'date', 'grape', 'kiwi'] }
	];
	const [activeSubArr, setactiveSubArr] = useState([]);


	return (
		<div className="App">
			<div className="">
				<h2>Рендеринг списків елементів з масиву</h2>
				<ul>
					{
						elements.map((value, index) => (
							<li key={index}>
								{value}
							</li>
						))
					}
				</ul>

				<hr />
				<h2>Рендеринг списків компонентів на основі масиву даних</h2>
				<div className={'user_container'}>
					{
						usersArray.map(item => (
							<Card value={item} key={item.email} />
						))
					}
				</div>

				<hr />
				<h2>Умовний рендеринг на основі певних значень змінної</h2>
				<button onClick={() => {
					setIsLoggedIn(!isLoggedIn)
				}}>
					{isLoggedIn ? 'Вийти' : 'Увійти'}
				</button>

				<div className={'user_container'}>
					{
						isLoggedIn ?
							usersArray.map(item => (
								<Card value={item} key={item.email} />
							)) :
							<div style={{ color: "red" }}>
								Увійдіть в мережу!
							</div>
					}
				</div>

				<hr />
				<h2>Рендеринг на основі стану компонента</h2>
				<div>
					<Compon />
				</div>

				<hr />
				<h2>Умовний рендеринг на основі значень змінної в циклі</h2>
				<UserCard />

				<hr />
				<h2>Умовний рендеринг на основі значень з масиву данних</h2>
				<UserCard2 />

				<hr />
				<h2>{"Умовний рендеринг з використанням тернарного оператора <, >, >=, <= і т.д."}</h2>
				<UserCard3 />

				<hr />
				<h2>{"Умовний рендеринг елементів з використанням Switch (Pages, рендеринг по ролям)"}</h2>
				<Pages />

				<hr />
				<h2>Sort</h2>
				<ul>
					{
						data.sort().map((item, index) => (
							<li key={index}>
								{item}
							</li>
						))
					}
				</ul>

				<hr />
				<h2>Filter</h2>
				<UserCard4 />

				<hr />
				<h2>Filter по кнопці</h2>
				<UserCard5 />

				<hr />
				<h2>Пагінація</h2>
				<ul>
					{
						currentData.map((value, index) => (
							<li key={index}>
								{value}
							</li>
						))
					}
				</ul>
				<button onClick={() => setCurrentPage(currentPage - 1)}>Попередня сторінка</button>
				<button onClick={() => setCurrentPage(currentPage + 1)}>Наступна сторінка</button>

				<hr />
				<h2>Рендеринг списку елементів з використанням вкладених масивів</h2>
				<ul>
					{
						newArray.map(item => (
							<li key={item.id}>
								<h1>{item.name}</h1>
								<ul>
									<button onClick={() => setactiveSubArr(item.items)}>Зробити активним</button>
									{
										item.items.map((subItem, index1) => (
											<li key={index1}>
												{subItem}
											</li>
										))
									}
								</ul>
							</li>
						))
					}
				</ul>
				<div>
					{
						activeSubArr.map((item1) => (
							<div style={{ backgroundColor: 'blue', color: 'white' }}>
								{item1}
							</div>
						))
					}
				</div>


			</div>

		</div>
	);
}

export default App;
