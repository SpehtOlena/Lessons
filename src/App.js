import { useEffect, useState } from 'react';
import { Space, Row, Col, Button } from 'antd';
import './App.css';
import Card from './components/Card/Card';
import AntdForm from './components/AntdForm/AntdForm';
import axios from 'axios';


const arr = [
	{
		name: 'test1',
		type: 'type1',
		items: [1, 2, 3, 4]
	},
	{
		name: 'test2',
		type: 'type1',
		items: [5, 6, 7, 8]
	},
	{
		name: 'test3',
		type: 'type2',
		items: [9, 10, 11, 12]
	},
	{
		name: 'test4',
		type: 'type2',
		items: [13, 14, 15, 16]
	}
]

function App() {
	const [activeType, setActiveType] = useState({});

	const [activeItems, setActiveItems] = useState([]);

	// Запити
	// npm i -g json-server - встановити сервер
	// json-server -w src/server/data.json  запустити сервер (побачити), якщо видає помилку по доступах, потрібно поміняти в Windows PowerShell (https://youtu.be/7cVMs202xag?si=QbWfZ7egWujQ1YG1)

	// Запит 1
	const [data, setData] = useState([]);
	const [activeUser, setActiveUser] = useState(null);
	const [statusForm, setStatusForm] = useState(true)
	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then(res => setData(res.data))
	}, [])

	return (
		<div className="App">

			<hr />
			<button onClick={() => { setActiveType('type1') }}>Type 1</button>
			<button onClick={() => { setActiveType('type2') }}>Type 2</button>
			<button onClick={() => { setActiveType('') }}>All types</button>
			<ul>
				{
					!!activeType ?
						arr.filter(value => value.type === activeType).map((item, index) => <li key={index}>{item.name}</li>)
						:
						arr.map((item, index) => <li key={index}>{item.name}</li>)
				}
			</ul>

			<hr />
			<div>
				<ul>
					{arr.map((value, index) => <li onClick={() => setActiveItems(value.items)} style={{ cursor: 'pointer' }} key={value.items}>
						{value.name}, {value.type}
					</li>)}
				</ul>
				{
					!!activeItems.length ?
						activeItems.map((activeItem) => (
							<div key={activeItem}>
								{activeItem}
							</div>
						)) :
						<div>
							Click on item!
						</div>
				}
			</div>

			<hr />
			<hr />
			<hr />
			<h1>Запити</h1>

			<hr />
			<Row>
				<Col span={12}>
					<Space wrap>
						{
							!!data.length && data.map((value, index) =>
								<Card
									onClick={() => setActiveUser(value)}
									key={index}
									data={value}
								/>)
						}
					</Space>
				</Col>
				<Col span={12}>
					<Button onClick={() => setStatusForm(!statusForm)} type='dashed' className='Button'>Click!</Button>
					{
						statusForm ?
							<AntdForm
								edit={!!activeUser && true}
								initialData={!!activeUser && activeUser}
								globalData={data}
								setData={setData} /> :
							<AntdForm
								globalData={data}
								setData={setData} />
					}

				</Col>

			</Row>
		</div>
	);
}

export default App;

// 40:47
