import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import ErrorMsg from './error-msg';
import { loginSchema } from './validation-schema';
import { store } from '../../../redux/store';
import { userApi } from '../../../redux/api/user-api';
import { toast } from 'react-toastify';

const LoginForm = () => {
	// contact form
	const handleOnSubmit = (values, { resetForm }) => {
		let res = store.dispatch(userApi.endpoints.login.initiate(values));

		res
			.then(data => {
				if (
					(data?.data?.statusCode === 200 && data?.data?.token != '') ||
					data?.data?.token != null
				) {
					toast.success(data?.data?.message);
					resetForm();
				}
			})
			.catch(() => {});
	};
	// use formik
	const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
		useFormik({
			initialValues: { username: '', password: '' },
			validationSchema: loginSchema,
			onSubmit: handleOnSubmit,
		});
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='#username'>
					Username <span>*</span>
				</label>
				<input
					id='username'
					name='username'
					value={values.usernmae}
					onChange={handleChange}
					onBlur={handleBlur}
					type='text'
					placeholder='Username...'
				/>
				{touched.username && <ErrorMsg error={errors.username} />}
				<label htmlFor='pass'>
					Password <span>*</span>
				</label>
				<input
					id='pass'
					name='password'
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
					type='password'
					placeholder='Enter password...'
				/>
				{touched.password && <ErrorMsg error={errors.password} />}
				<div className='login-action mb-20 fix'>
					<span className='log-rem f-left'>
						<input id='remember' type='checkbox' />
						<label htmlFor='remember'>Remember me!</label>
					</span>
					<span className='forgot-login f-right'>
						<Link to='/forgotPassword'>Lost your password?</Link>
					</span>
				</div>
				<button type='submit' className='os-btn w-100'>
					Login Now
				</button>
				<div className='or-divide'>
					<span>or</span>
				</div>
				<Link to='/register'>
					<a className='os-btn os-btn-black w-100'>Register Now</a>
				</Link>
			</form>
		</>
	);
};

export default LoginForm;
