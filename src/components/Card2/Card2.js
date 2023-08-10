import { useState } from 'react';
import '../Card/Card.css'
import TestButton from '../TestButton';

const Card2 = () => {
	const [showCard2, setShowcard2] = useState(true);
	if (!!showCard2) {
		return (
			<div className="card">
				<h3>Card name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta nam illo cupiditate vel sapiente, at quia expedita harum iusto!</p>
				<TestButton showCard2={showCard2} setShowcard2={setShowcard2} />
			</div>
		)
	} else {
		return <TestButton showCard2={showCard2} setShowcard2={setShowcard2} />
	}

}
export default Card2