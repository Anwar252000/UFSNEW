import React from 'react';
import { Formik, Field, FieldArray, Form, useFormik } from 'formik';
import ErrorMsg from './error-msg';
import { Link } from 'react-router-dom';
import { registerSchema } from './validation-schema';
import { store } from '../../../redux/store';
import { userApi } from '../../../redux/api/user-api';
import { toast } from 'react-toastify';

const RegisterForm = () => {
	// contact form
	const handleOnSubmit = (values, { resetForm }) => {
		var res = store.dispatch(userApi.endpoints.register.initiate(values));

		res
			.then(data => {
				if (data?.data?.statusCode === 200) {
					toast.success(data?.data?.message);
					resetForm();
				}

				if (data?.error?.data?.statusCode === 400) {
					toast.warning(data?.error?.data?.message);
				}
			})
			.catch(() => {
				toast.error('Something went wrong!');
			});
	};
	// use formik
	// const {
	// 	handleChange,
	// 	handleSubmit,
	// 	handleBlur,
	// 	// validateOnChange,
	// 	errors,
	// 	// values,
	// 	touched,
	// } = useFormik({
	// 	initialValues: {
	// 		username: '',
	// 		firstName: '',
	// 		lastName: '',
	// 		middleName: '',
	// 		emails: [],
	// 		contacts: [],
	// 		address: '',
	// 		password: '',
	// 	},
	// 	validationSchema: registerSchema,
	// 	onSubmit: handleOnSubmit,
	// });
	return (
		<>
			<Formik
				initialValues={{
					username: '',
					firstName: '',
					lastName: '',
					middleName: '',
					email: '',
					contact: '',
					address: '',
					password: '',
				}}
				onSubmit={handleOnSubmit}
				validationSchema={registerSchema}
			>
				{({ values, errors, touched }) => (
					<Form>
						<label htmlFor='#username'>
							Username <span>*</span>
						</label>
						<Field
							id='username'
							name='username'
							value={values.username}
							// onChange={handleChange}
							// onBlur={handleBlur}
							placeholder='Enter Username'
							type='text'
						/>

						{touched.username && <ErrorMsg error={errors.username} />}
						<label htmlFor='#firstName'>
							First Name <span>*</span>
						</label>
						<Field
							id='firstName'
							value={values.firstName}
							placeholder='Enter First Name'
							type='text'
						/>

						{touched.firstName && <ErrorMsg error={errors.firstName} />}
						<label htmlFor='#middleName'>Middle Name</label>
						<Field
							id='middleName'
							value={values.middleName}
							placeholder='Enter Middle Name'
							type='text'
						/>

						<label htmlFor='#lastName'>
							Last Name <span>*</span>
						</label>
						<Field
							id='lastName'
							value={values.lastName}
							placeholder='Enter Last Name'
							type='text'
						/>
						{touched.lastName && <ErrorMsg error={errors.lastName} />}

						<label htmlFor='#email'>
							Email Address <span>*</span>
						</label>
						<Field
							id='email'
							value={values.email}
							placeholder='Enter Email address...'
							type='email'
						/>
						{touched.email && <ErrorMsg error={errors.email} />}
						{/* <label htmlFor='#email'>
							Email Address <span>*</span>
						</label>
						<FieldArray
							name='emails'
							render={arrayHelpers => (
								<div>
									{values.emails && values.emails.length > 0 ? (
										values.emails.map((email, index) => (
											<div key={index} className='d-flex'>
												<Field name={`emails.${index}`} value={email} />
												<button
													type='button'
													className='os-btn os-btn-2'
													// style={{ paddingTopc: 50, paddingBottom: 50 }}
													onClick={() => arrayHelpers.remove(index)} // remove a email from the list
												>
													-
												</button>
												<button
													type='button'
													className='os-btn os-btn-2'
													onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
												>
													+
												</button>
											</div>
										))
									) : (
										<button
											type='button'
											className='os-btn'
											onClick={() => arrayHelpers.push('')}
										>
											// show this when user has removed all friends from the list
											Add a Email
										</button>
									)}
								</div>
							)}
						/> */}

						<label htmlFor='#contact'>
							Contact Number <span>*</span>
						</label>
						<Field
							id='contact'
							value={values.contact}
							placeholder='Enter Contact Number...'
						/>
						{touched.contact && <ErrorMsg error={errors.contact} />}

						{/* <FieldArray
							name='emails'
							render={arrayHelpers => (
								<div>
									{values.emails && values.emails.length > 0 ? (
										values.emails.map((email, index) => (
											<div key={index} className='d-flex'>
												<Field name={`emails.${index}`} value={email} />
												<button
													type='button'
													className='os-btn os-btn-2'
													// style={{ paddingTopc: 50, paddingBottom: 50 }}
													onClick={() => arrayHelpers.remove(index)} // remove a email from the list
												>
													-
												</button>
												<button
													type='button'
													className='os-btn os-btn-2'
													onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
												>
													+
												</button>
											</div>
										))
									) : (
										<button
											type='button'
											className='os-btn'
											onClick={() => arrayHelpers.push('')}
										>
											// show this when user has removed all friends from the list
											Add a Email
										</button>
									)}
								</div>
							)}
						/> */}

						<label htmlFor='#address'>
							Address <span>*</span>
						</label>
						<Field
							id='address'
							value={values.address}
							placeholder='Enter address...'
							type='text'
						/>
						{touched.address && <ErrorMsg error={errors.address} />}

						<label htmlFor='#password'>
							Password <span>*</span>
						</label>
						<Field
							id='password'
							name='password'
							value={values.password}
							type='password'
							placeholder='Enter password...'
						/>
						{touched.password && <ErrorMsg error={errors.password} />}

						<div className='mt-10'></div>
						<button type='submit' className='os-btn w-100'>
							Register Now
						</button>
						<div className='or-divide'>
							<span>or</span>
						</div>
						<Link to='/login'>
							<a className='os-btn os-btn-black w-100'>login Now</a>
						</Link>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default RegisterForm;
