import './App.css';
import './style/reset.css'
import Name from './components/Name/Name';
import { Test, Test2 } from './components/Test/Test';
import { Name2 as Test3 } from './components/Test/Test';
import { useState } from 'react';
import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import UserCard from './components/UserCard/UserCard';
import Sale from './Pages/Sale/Sale';
import Home from './Pages/Home/Home';
import Travel from './Pages/Travel/Travel';
import Contacts from './Pages/Contacts/Contacts';
import Menu from './components/Menu/Menu';


function App() {
	const handelClick = () => {
		console.log('Click');
	}
	const handelClick2 = (name) => {
		console.log(name);
		console.log(typeof name);
	}



	let number = 0;
	const plus = () => {
		number++;
	}
	const minus = () => {
		number--;
	}



	const [numberNew, setNumberNew] = useState(0);
	const plusNew = () => {
		setNumberNew(numberNew + 1)
	}
	const minusNew = () => {
		setNumberNew(numberNew - 1)
	}



	const [showCard, setShowCard] = useState(false);
	const handleCard = () => {
		setShowCard(!showCard)
	}



	const users = [
		{
			name: 'Taras',
			age: 20
		},
		{
			name: 'Roman',
			age: 18
		},
		{
			name: 'Panas',
			age: 28
		},
		{
			name: 'Nazar',
			age: 27
		}
	]



	let arr = [1, 2, 3, 4, 5, 6, 7];
	const [arrNumbers, setArrNumbers] = useState([]);
	const OnClickBack = () => {
		setArrNumbers([...arr])
	};




	const [activePage, setActivePage] = useState(<Contacts />)
	const menuItems = [
		{
			label: 'Home',
			element: <Home setActivePage={setActivePage} />
		},
		{
			label: 'Sale',
			element: <Sale />
		},
		{
			label: 'Travel',
			element: <Travel />
		},
		{
			label: 'Contacts',
			element: <Contacts />
		}
	]


	const [inputValue, setInputValue] = useState();



	return (
		<div className={"App"}>
			<div className={"Export"}>
				<h2>Export-Import</h2>
				<Name name={'Ivan'}></Name>
				<Test />
				<Test2 />
				<Test3 name={'Roman'} />
			</div>
			<div className={"Function"}>
				<h2>OnClick!</h2>
				<button onDoubleClick={handelClick}>Click!</button>
				<button onClick={() => { handelClick2('Taras') }}>Click me!</button>
				<button onClick={
					(event) => {
						handelClick2('Taras');
						console.log(event);
					}
				}>Click me now!
				</button>
			</div>
			<div className={"Use-state"}>
				<h2>Use state</h2>
				<div className={"Hook"}>
					<h3>Number don't change</h3>
					<div className="">
						<button onClick={minus}>-</button>
						{number}
						<button onClick={plus}>+</button>
					</div>
					<button onClick={() => {
						console.log(number);
					}}>Show number</button>
				</div>
				<hr />
				<div className={"Hook"}>
					<h3>Number change</h3>
					<div className="">
						<button onClick={minusNew}>-</button>
						{numberNew}
						<button onClick={plusNew}>+</button>
					</div>
					<button onClick={() => {
						console.log(numberNew);
					}}>Show numberNew</button>
				</div>
			</div>
			<div className={"Show-card"}>
				<h2>Show Card</h2>
				<button onClick={handleCard}>{showCard ? 'Hide Card' : 'Show Card'}</button>
				{
					showCard && <Card />
				}

			</div>
			<hr />
			<div className={"Show-card"}>
				<h2>Show Card через двохстороннє звязування</h2>
				<Card2 />
			</div>
			<div className={"User-card"}>
				{
					users.map((value, index) => <UserCard name={value.name} age={value.age} key={index} />)
				}
			</div>
			<div className={"Back"}>
				<h2>Взяти дані з беку</h2>
				<button onClick={OnClickBack}>Взяти дані з бекенду</button>
				<ol>
					{
						!!arrNumbers.length && arrNumbers.map((value) => {
							return (
								<li key={value}>
									{value}
								</li>
							)

						})
					}
				</ol>
			</div>
			<div className={"Menu"}>
				<Menu setActivePage={setActivePage} items={menuItems} />
				{activePage}
			</div>
			<div className={"Input-back"}>
				<input onChange={(event) => {
					setInputValue(event.target.value)
				}} type="text" />
				<h2>
					{
						inputValue
					}
				</h2>
			</div>
		</div>
	);
}

export default App;
