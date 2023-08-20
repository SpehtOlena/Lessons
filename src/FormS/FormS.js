import { useState } from 'react';
import './FormS.css'

function FormS() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		age: null
	});
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		console.log(formData.username);
		console.log(formData);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = {}
		if (!formData.username) {
			validationErrors.username = "Ім'я юзера є обов'язковим"
		}
		if (!formData.email) {
			validationErrors.email = "Email повинен містити знак @"
		}
		if (!formData.password) {
			validationErrors.password = "Мінімальна довжина пароля 8 символів"
		}
		if (!formData.confirmPassword) {
			validationErrors.confirmPassword = "Пароль не співпадає"
		}
		if (!formData.age) {
			validationErrors.age = "Вкажіть Ваш вік"
		}
		if (Object.keys(validationErrors).length === 0) {
			console.log('Form submitted', formData)
			setErrors({})
		} else {
			setErrors(validationErrors)
		}
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<label>Username:</label>
					{errors.username && <span>{errors.username}</span>}
					<input onChange={handleChange} value={formData.username} type="text" name={'username'} />
				</div>
				<div>
					<label>Email:</label>
					{errors.email && <span>{errors.email}</span>}
					<input onChange={handleChange} value={formData.email} type="email" name={'email'} />
				</div>
				<div>
					<label>Password:</label>
					{errors.password && <span>{errors.password}</span>}
					<input onChange={handleChange} type="password" name={'password'} />
				</div>
				<div>
					<label>Confirm Password:</label>
					{errors.confirmPassword && <span>{errors.confirmPassword}</span>}
					<input onChange={handleChange} value={formData.confirmPassword} type="password" name={'confirmPassword'} />
				</div>
				<div>
					<label>Age:</label>
					{errors.age && <span>{errors.age}</span>}
					<input onChange={handleChange} value={formData.age} type="number" name={'age'} />
				</div>
				<button type='submit'>Submit</button>
			</form>


		</div >
	);
}

export default FormS;
