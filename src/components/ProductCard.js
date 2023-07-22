import './ProductCard.css'

// const ProductCard = (props) => {
// 	return (
// 		<div className='productCard'>
// 			<h1>
// 				{props.name}
// 			</h1>
// 			<h2>{props.age}</h2>
// 		</div>
// 	)
// }

// function ProductCard(props) {
// 	return (
// 		<div>
// 			<h1>{props.name}</h1>
// 			<h3>{props.age}</h3>
// 			<p>{props.number}</p>
// 		</div>
// 	)
// }


const ProductCard = ({ age, name }) => {
	return (
		<div className='productCard'>
			<h1>
				{name}
			</h1>
			<p className='productCard-descriotion'>{age}</p>
		</div>
	)
}
export default ProductCard;