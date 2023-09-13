import { useEffect } from 'react';
import './App.css';
import useCustomHook from './hooks/useCustomHook';
import useCustomHook1 from './hooks/useCustomHook1';
import useCustomHook2 from './hooks/useCustomHook2';
import useCustomHook3 from './hooks/useCustomHook3';
import useCustomCounter from './hooks/useCustomCounter';
import useCustomAxios from './hooks/useCustomAxios';

function App() {
	const { value, handleChange } = useCustomHook([])
	const { value1 } = useCustomHook1(window.innerWidth)
	useEffect(() => {
		const handleKeyPress = event => {
			handleChange([...value, event.key])
		}
		document.addEventListener('keypress', handleKeyPress)
		return () => {
			document.removeEventListener('keypress', handleKeyPress)
		}
	}, [handleChange]);

	// Location
	const { value2: userLocation, handleChangeLocation } = useCustomHook2(null)
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				handleChangeLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				})
			},
			(error) => {
				console.log(error);
			}
		)
	}, [handleChangeLocation])

	// Notification
	const { value3: notification, handleChangeNotification } = useCustomHook3('')
	const handleButtonClick = () => {
		handleChangeNotification('Message!')
	}
	useEffect(() => {
		if (notification) {
			// 
			handleChangeNotification('')
		}
	}, [handleChangeNotification, notification])

	// Count
	const { count, increment, decrement } = useCustomCounter(0)

	// Axios
	const { data, loading, error } = useCustomAxios('https://jsonplaceholder.typicode.com/posts')
	if (error) {
		console.log(error);
	}
	return (

		<div className="App">
			<div>
				<input type='text' value={value} onChange={(e) => handleChange(e.target.value)} />
				<p>
					Window width: {value1}
				</p>
				<p>
					Last key pressed: {value}
				</p>
				<ul>
					{
						value.map((item, index) => (
							<li key={index}>
								{item}
							</li>
						))
					}
				</ul>
			</div>


			<hr />
			<h2>Location</h2>
			<p>
				Your location: {userLocation ? `${userLocation.latitude}, ${userLocation.longitude}` : 'Loading'}
			</p>

			<hr />
			<h2>Notification</h2>
			<div>
				<button onClick={handleButtonClick}>Show</button>
				<div>{notification}</div>
			</div>

			<hr />
			<h2>Count</h2>
			<div>
				<button onClick={decrement}>-</button>
				{count}
				<button onClick={increment}>+</button>
			</div>

			<hr />
			<h2>Axios</h2>
			<div>

				{
					!loading && <ul>
						{
							data.map((item, index) => (
								<li key={index}>
									{item.title}
								</li>
							))
						}
					</ul>
				}
			</div>
		</div>
	);
}

export default App;


