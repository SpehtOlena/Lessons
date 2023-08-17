import { useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import { useEffect } from 'react';
import React, { useReducer } from 'react';
import { TestApi } from './components/TestApi';
import Memo from './components/Memo';
import CallBack from './components/CallBack';
import All from './components/All';

function App() {

	// fetch
	const [data, setData] = useState([]);
	const onClick = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => {
				setData(data)
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			})
	}

	const [error, setError] = useState({});
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => {
				setData(data)
			})
			.catch((error) => {
				console.error(error);
			})
	}, [])


	// Timer
	const [count, setCount] = useState(null)
	useEffect(() => {
		const interval = setInterval(() => {
			setCount(prevCount => prevCount + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])



	// Reducer
	// const initialValue = { count: 0 }
	// const INCREMENT = "Додати"
	// const DECREMENT = "Відняти"
	// const reducer = (state, action) => {
	// 	switch (action.type) {
	// 		case INCREMENT:
	// 			return { count: state.count + 1 }
	// 		case DECREMENT:
	// 			return { count: state.count - 1 }
	// 		default:
	// 			return state
	// 	}
	// }
	// const [state, dispatch] = useReducer(reducer, initialValue)
	const initValue = { name: "", age: 0 }
	const SET_NAME = "SET_NAME";
	const SET_AGE = "SET_AGE";
	const reducer = (state, action) => {
		switch (action.type) {
			case SET_NAME:
				return { ...state, name: action.payload }
			case SET_AGE:
				return { ...state, age: action.payload }
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initValue)



	return (
		<div className="App">
			<h1>SideEffects, reducer, ContextAPI, React.Memo, UseCallBack</h1>

			<hr />
			<h2>SideEffects</h2>

			<hr />
			<h3>UseEffect</h3>

			<hr />
			<h4>Fetch</h4>
			<ul>
				{
					!!data.length ?
						data.map(value => value.id) :
						"Empty"
				}
				<button onClick={onClick}>download data</button>
			</ul>


			<hr />
			<div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between" }}>
				{
					!!data.length &&
					data.map((value, index) => <Post data={value} key={value.id} />)
				}
			</div>

			<hr />
			<h4>Timer</h4>
			<div>
				{count}
			</div>

			<hr />
			<h3>UseReducer</h3>
			{/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 20 }}>
				<button onClick={() => dispatch({ type: DECREMENT })}>-</button>
				<p>Count: {state.count}</p>
				<button onClick={() => dispatch({ type: INCREMENT })}>+</button>
			</div> */}

			<hr />
			<div>
				<input
					type="text"
					placeholder='Name'
					value={state.name}
					onChange={(e) => dispatch(
						{
							type: SET_NAME,
							payload: e.target.value
						}
					)}
				/>
				<input
					type="number"
					placeholder='Age'
					value={state.age}
					onChange={(e) => dispatch(
						{
							type: SET_AGE,
							payload: e.target.value
						}
					)}
				/>
				<p>Name: {state.name}</p>
				<p>Age: {state.age}</p>
			</div>


			<hr />
			<h3>Contex API, createContext</h3>
			<TestApi />


			<hr />
			<h3>Memo</h3>
			<Memo />



			<hr />
			<h3>CallBack</h3>
			<CallBack />



			<hr />
			<h3>All</h3>
			<All />



		</div >
	);
}

export default App;
