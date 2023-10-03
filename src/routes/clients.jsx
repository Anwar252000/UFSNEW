import React from 'react';
import { Link } from 'react-router-dom';
import clients from '../data/clients';
import Breadcrumb from '../components/common/breadcrumb';
import { Helmet } from 'react-helmet';

const Cleints = () => {
	return (
		<>
			<Helmet>
				<title>Clients | Ultimate Financial Solutions</title>
				<meta
					name='keywords'
					content='Ultimate Financial Solutions, UFS, financial solutions, financial services, financial planning, financial advice money management, best financial solutions, comprehensive financial solutions, holistic financial solutions, financial solutions for individuals, financial solutions for businesses'
				/>
				<meta
					name='description'
					content='Ultimate Financial Solutions is a comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<Breadcrumb title={'Our Clients'} subtitle={'Our Clients'} />
			<h2 className='component-heading mt-4'>Our Clients</h2>
			<div className='container bg-dark-blue px-4 my-4'>
				{clients.map((item, index) => {
					return (
						<div className='card shadow p-5 m-3 bg-green'>
							<div key={item.id}>
								<Link to={item.link} target='_blank'>
									<img
										src={item.img}
										alt='img'
										style={{ width: 130, marginBottom: 10, float: 'right' }}
									/>
									<h4>{item.title}</h4>
								</Link>
								<p>
									<span>
										<b>Annual Turnover: </b>
									</span>
									${item.annualTurnover}
								</p>
								<p>
									<span>
										<b>Industry: </b>
									</span>
									{item.industry}
								</p>
								<p>
									<span>
										<b>About: </b>
									</span>
									{item.about}
								</p>
								<Link to={item.link} target='_blank'>
									<button className='os-btn os-btn-2'>More Info</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Cleints;
