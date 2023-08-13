import { useRef, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import React from 'react';

function App() {

	// Focus Input
	const InputRef = useRef(null)
	const handleButtonClick = () => {
		InputRef.current.focus()
		console.log(InputRef);
		console.log(InputRef.current.value);
	}

	// Focus Input2
	const InputTextRef = useRef(null)
	const InputNumbRef = useRef(null)

	// Портали в функціональній компоненті
	const [modalOpen, setModalOpen] = useState(false)
	const handleButtonModal = () => {
		setModalOpen(!modalOpen)
	}


	// Скрол за допомогою Ref
	const scrolRef = useRef(null)
	const handleScroll = () => {
		console.log('scrolling');
	}


	// Анімація за допомогою Ref
	const boxRef = useRef(null);
	const handleButtonAnimation = () => {
		boxRef.current.classList.toggle('animate')
	}


	// Зміна input value за допомогою Ref
	const inputRef = useRef(null)


	// Блокування елементу за допомогою Ref
	const [disabled, setDisabled] = useState(true);
	const input2Ref = useRef(null);
	const handleButtonDisable = () => {
		setDisabled(!disabled)
		if (input2Ref.current.disabled) {
			alert('Warning!')
		}
	}


	// React Fragment
	const numbers = [1, 2, 3, 4, 5, 6]

	return (
		<div className="App">
			<h1>Lesson 10 - refs, portal, react fragment</h1>

			<hr />
			<h2>Focus input</h2>
			<input type="text" ref={InputRef} />
			<button onClick={handleButtonClick}>Focus Input</button>

			<hr />
			<h2>Focus input 2</h2>
			<div>
				<div>
					<input type="text" ref={InputTextRef} />
					<button onClick={() => InputTextRef.current.focus()}>Focus Text Input</button>
				</div>
				<div>
					<input type='number' ref={InputNumbRef}></input>
					<button onClick={() => InputNumbRef.current.focus()}>Focus Number input</button>
				</div>
			</div>

			<hr />
			<h2>Портали в функціональній компоненті</h2>
			<button onClick={handleButtonModal}>Open Modal</button>
			<Modal title={"Modal Content"} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet necessitatibus mollitia accusamus blanditiis nesciunt voluptatum ad quas recusandae iste harum.</p>
			</Modal>

			<hr />
			<h2>Скрол за допомогою Ref</h2>
			<div ref={scrolRef} style={{ overflow: "auto", height: 200, width: 450, border: "1px solid black", margin: "0 auto" }} onScroll={handleScroll}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus repellendus, consequuntur quidem, officia ipsa quam temporibus laudantium modi iure soluta asperiores? Tenetur est dolor doloremque neque inventore, exercitationem fuga!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod nemo sequi in culpa neque impedit similique esse, rerum totam fugit, facilis, quas enim aspernatur harum. Maxime quod deserunt libero, voluptates deleniti natus temporibus excepturi tempore facere quam. Dolor esse quam eveniet deserunt saepe qui facere tenetur quo aliquid ad!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus accusantium assumenda porro quis distinctio est placeat eligendi recusandae, nemo odio animi magnam! Esse tempora natus cumque repellat! Saepe, soluta!</p>
			</div>

			<hr />
			<h2>Анімація за допомогою Ref</h2>
			<div className={"box"} ref={boxRef}>Animated <br /> box</div>
			<button onClick={handleButtonAnimation}>Animate</button>


			<hr />
			<h2>Зміна input value за допомогою Ref</h2>
			<div>
				<input type="text" ref={inputRef} />
				<button onClick={() => { inputRef.current.value = 'Test' }} >Change value</button>
			</div>

			<hr />
			<h2>Блокування елементу за допомогою Ref</h2>
			<div>
				<input type="text" ref={input2Ref} disabled={disabled} />
				<button onClick={handleButtonDisable}>Toggled Disabled</button>
			</div>


			<hr />
			<h2>React Fragment</h2>
			<h3>
				{"<React.Fragment></React.Fragment>     або    <>  </>"}
			</h3>
			<ul>
				{
					numbers.map((item, index) => (
						<React.Fragment key={index}>
							<li>{item}</li>
							<br />
						</React.Fragment>
					))
				}
			</ul>



			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

		</div>
	);
}





export default App;
