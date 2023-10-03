import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		};

		emailjs.sendForm(
			'service_21m7vl1',
			'template_s3e39bc',
			form.current,
			'DBRDHMNcESjXGSPqj',
			data
		);
		form.current.reset();
	};

	return (
		<>
			<Helmet>
				<title>Contact Us | Ultimate Financial Solutions</title>
				<meta
					name='keywords'
					content='Ultimate Financial Solutions, UFS, financial solutions, financial services, financial planning, financial advice money management, best financial solutions, comprehensive financial solutions, holistic financial solutions, financial solutions for individuals, financial solutions for businesses'
				/>
				<meta
					name='description'
					content='Ultimate Financial Solutions is a comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<form ref={form} onSubmit={sendEmail} id='contact-form'>
				<div className='row'>
					<div className='col-xl-12 col-lg-12'>
						<div className='contact__input'>
							<label>
								Name <span className='required'>*</span>
							</label>
							<input
								type='text'
								name='name'
								className='rounded-pill'
								required
							/>
						</div>
					</div>
					<div className='col-xl-12 col-lg-12'>
						<div className='contact__input'>
							<label>
								Email <span className='required'>*</span>
							</label>
							<input
								type='email'
								name='email'
								className='rounded-pill'
								required
							/>
						</div>
					</div>
				</div>
				{/* <div className='row'>
					<div className='col-xl-12'>
					<div className='contact__input'>
					<label>
					Subject <span className='required'>*</span>
					</label>
					<input
					id='sub'
					value={values.sub}
					onChange={handleChange}
					onBlur={handleBlur}
					type='text'
					/>
					{touched.sub && <ErrorMsg error={errors.sub} />}
					</div>
					</div>
				</div> */}
				<div className='row'>
					<div className='col-xl-12'>
						<div className='contact__input'>
							<label>Message</label>
							<textarea
								cols='30'
								rows='10'
								type='text'
								name='message'
								className='rounded'
								required
							></textarea>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-xl-12'>
						<div className='contact__submit'>
							<button type='submit' className='os-btn os-btn-2'>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
