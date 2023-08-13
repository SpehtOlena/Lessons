import './Modal.css'
import ReactDOM from 'react-dom';

// Портали в функціональній компоненті
const Modal = ({ isOpen, onClose, children, title }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className={"modal_overlay"}>
			<div className={"modal"}>
				<div className="modal_header">
					<h2>{title}</h2>
				</div>
				<div className="modal_content">
					{
						children
					}
				</div>
				<div className={"modal_footer"}>
					<button>Save</button>
					<button>Reset</button>
					<button onClick={onClose}>Close Modal</button>
				</div>
			</div>
		</div>,
		document.getElementById('modal-root')
	)
}


export default Modal