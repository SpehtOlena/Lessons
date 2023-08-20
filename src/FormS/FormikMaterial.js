import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

const validationSchema = yup.object({
	name: yup
		.string('Enter your name')
		.required('Name is required'),
	photo: yup
		.string('Enter your photo')
		.required('Photo is required'),
	description: yup
		.string('Enter your description')
		.required('Description is required'),
});

export const FormikMaterial = ({ setData, data }) => {
	const formik = useFormik({
		initialValues: {
			name: '',
			photo: '',
			description: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			setData([...data, values])
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="name"
					name="name"
					label="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<TextField
					fullWidth
					id="photo"
					name="photo"
					label="photo"
					value={formik.values.photo}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.photo && Boolean(formik.errors.photo)}
					helperText={formik.touched.photo && formik.errors.photo}
				/>
				<TextField
					fullWidth
					id="description"
					name="description"
					label="description"
					multiline
					minRows={6}
					value={formik.values.description}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.description && Boolean(formik.errors.description)}
					helperText={formik.touched.description && formik.errors.description}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};
