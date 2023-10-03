import React from 'react';

const SecretarialService = () => {
	return (
		<>
			<div>
				<h1 className='component-heading' style={{ position: 'relative' }}>
					SECRETARIAL SERVICE
				</h1>
				{/* <svg
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', width: 200 }}
				>
					<path
						fill='#8A3FFC'
						d='M29.4,-46C37.2,-34.8,42.1,-25,48.2,-13.9C54.3,-2.7,61.7,9.9,59.4,20.1C57.2,30.3,45.3,38.1,33.8,45.4C22.3,52.7,11.1,59.5,1.3,57.7C-8.6,55.9,-17.1,45.7,-25.6,37.4C-34.1,29.1,-42.5,22.8,-53.3,12C-64.1,1.2,-77.3,-14.1,-74.1,-24.1C-70.8,-34.1,-51.2,-38.8,-36.1,-47.6C-21.1,-56.5,-10.5,-69.5,0.1,-69.7C10.8,-69.9,21.6,-57.3,29.4,-46Z'
						transform='translate(100 100)'
					/>
				</svg> */}
				<div className='container my-2 py-4'>
					<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6'>
							<p>
								Welcome to Ultimate Financial Solutions, your trusted partner in
								financial planning and wealth management. With a passion for
								helping individuals and businesses achieve their financial
								goals, we provide expert guidance and personalized Solutions
								tailored to your unique needs. At Ultimate Financial Solutions,
								we understand that managing your finance scan be complex and
								over whelming. That's why our team of experienced financial
								solutions is here to simplify the process, offering you clarity
								and peace of mind. Whether you're planning for retirement,
								looking to grow your investments, or seeking strategies for tax
								optimization, we have the knowledge and expertise to guide you
								every step of the way.
							</p>
						</div>
						<div className='col-sm-12 col-md-6'>
							<img
								src='img/intro/p5.gif'
								className='img-fluid float-right'
								alt='Right-hand side image'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecretarialService;
