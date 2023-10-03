import ContactForm from '../common/form/contact-form';
import { Helmet } from 'react-helmet';

const ContactArea = () => {
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
					content='Ultimate Financial Solutions is a Comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<section className='login-area my-4'>
				<h1 className='component-heading'>Contact Us</h1>
				<div className='container bg-dark-blue'>
					<div className='row'>
						<div className='col-lg-8 offset-lg-2'>
							<h6 className='my-2'>
								Customer feedback is the lifeblood of our business. Tell us
								what’s on your mind, good or bad. We respond to all customer
								feedback and look forward to hearing from you!
							</h6>
							<div className='basic-login my-4'>
								{/* login form start */}
								<ContactForm />
								{/* login form end */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactArea;
