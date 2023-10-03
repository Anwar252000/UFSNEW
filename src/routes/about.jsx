import React from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import { Helmet } from 'react-helmet';
import OurTeam from '../components/our-team';

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Us | Ultimate Financial Solutions</title>
				<meta
					name='keywords'
					content='Ultimate Financial Solutions, UFS, financial solutions, financial services, financial planning, financial advice money management, best financial solutions, comprehensive financial solutions, holistic financial solutions, financial solutions for individuals, financial solutions for businesses'
				/>
				<meta
					name='description'
					content='Ultimate Financial Solutions is a comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<Breadcrumb title={'About Us'} subtitle={'About Us'} />
			<h1 className='component-heading my-4'>About Us</h1>
			<div className='container my-4'>
				<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
					<div className='col-sm-12 col-md-6'>
						<p>
							<strong>Ultimate Financial Solutions</strong> is a comprehensive
							business management group consist of investment holding principal
							company
						</p>
						<p>
							Our group of company aim to provide solutions for business owner
							and investor in terms of sustainability, growth, and
							capitalization in their business venture and nurturing them from
							the formation stage.
						</p>
						<p>
							Our role is to support and help business owner to learn more about
							their business, providing aid to our customers by giving them the
							on time advice on their business vital and business compliances.
						</p>
						<p>
							Ultimately, we provide our customers strategy for long term growth
							and sustainability through capital market.
						</p>
						<div />
					</div>
					<div className='col-sm-12 col-md-6'>
						<img
							src='img/intro/about.gif'
							className='img-fluid float-start'
							alt='Right-hand side image'
						/>
					</div>
				</div>
			</div>
			<OurTeam />
		</>
	);
};

export default About;
