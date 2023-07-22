import './App.css';
import ProductCard from './components/ProductCard';
import { Menu } from './components/menu/Menu';

const arr = [
	'test1',
	'test2',
	'test3',
	'test4',
]

function App() {
	return (
		<div className="App">
			<button>Click me!</button>
			<div className="">
				<img src="" alt="" />
			</div>
			<table></table>

			<Menu type={'vertical'} menuItems={['item 1', 'item 2', 'item3']}></Menu>

			<h1>test1</h1><h1>test2</h1><h1>test3</h1><h1>test4</h1>

			<ProductCard name={'Taras'} age={15} />
			<ProductCard name={'Nazar'} age={16} />
			<ProductCard name={'Vova'} age={'17'} />
			<ProductCard name={'Olena'} age={'18'} />
			<ProductCard name={'Andriy'} age={'19'} />
			<ProductCard name={'Oleg'} age={'20'} />

			1:13
		</div>
	);
}

export default App;
