import React from 'react';

const WhoWeAre = () => {
	return (
		<>
			<div>
				<svg
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', width: 300 }}
				>
					<path
						fill='#8A3FFC'
						d='M53.4,-36.4C62.6,-31,59.1,-9.2,52.3,8.6C45.6,26.3,35.7,39.9,21,49C6.4,58.1,-13,62.7,-24.7,55.5C-36.5,48.3,-40.5,29.2,-47,8.5C-53.4,-12.1,-62.3,-34.4,-54.9,-39.4C-47.4,-44.4,-23.7,-32.1,-0.8,-31.4C22.1,-30.8,44.2,-41.8,53.4,-36.4Z'
						transform='translate(100 100)'
					/>
				</svg>
				<h1 className='component-heading' style={{ position: 'relative' }}>
					WHO WE ARE
				</h1>
				<div className='container my-2 py-4' style={{ position: 'relative' }}>
					{/* <h3 className='heading'>We do things better</h3> */}
					<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6 py-3'>
							<p>
								<b>Ultimate Financial Solutions</b> provide to our prestigious
								customer for best Financial and Accounting service.
							</p>

							<p>
								We are a BPO firm dealing with many Clients based in USA,
								Australia, Canada & Malaysia we are already working with a CPA
								firm and as a growing business looking for another collaboration
								for bookkeeping for your clients.
							</p>
							<p>
								We serve sole trader businesses, close corporation sand limited
								companies. Our dedicated staff members will meet your needs and
								provide professional service regardless of the size of your
								business. Wear aware that all businesses are different and each
								has distinct financial budgets.
							</p>
						</div>
						<div className='col-sm-12 col-md-6'>
							<img
								src='img/intro/p1.gif'
								className='img-fluid float-start'
								alt='Right-hand side image'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhoWeAre;
