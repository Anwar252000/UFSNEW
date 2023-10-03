import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h1 className='component-heading'>WHAT WE DO</h1>
			{/* <svg
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
				style={{ position: 'absolute', width: 300 }}
			>
				<path
					fill='#8A3FFC'
					d='M30.6,-35.2C39.1,-29.2,45.3,-19.1,54,-4.4C62.7,10.4,74.1,29.8,67,35.5C59.9,41.2,34.5,33,16.9,34.1C-0.8,35.2,-10.6,45.6,-16.3,43.9C-22.1,42.2,-23.8,28.5,-32.7,17C-41.6,5.5,-57.7,-3.7,-61.8,-16.2C-65.9,-28.7,-58.1,-44.3,-45.8,-49.6C-33.5,-55,-16.8,-50,-2.9,-46.5C11,-43.1,22,-41.2,30.6,-35.2Z'
					transform='translate(100 100)'
				/>
			</svg> */}
			<div className='container my-2 py-4'>
				{/* <h3 className='heading' style={{ position: 'relative' }}>
					We do things better
				</h3> */}
				<div
					className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'
					style={{ position: 'relative' }}
				>
					<div className='col-sm-12 col-md-6'>
						<img src='img/intro/p2.gif' className='img-fluid' alt='img' />
					</div>
					<div className=' col-sm-12 col-md-6 my-2'>
						<p>
							<i class='fa fa-check'></i> We have a team with diverse
							qualifications like CPA, ACCA & CA.
						</p>
						<p>
							<i class='fa fa-check'></i> Creating CSV's, translation of Data
							for accurate bookkeeping (QuickBooks Online)
						</p>
						<p>
							<i class='fa fa-check'></i> Landlord statements reconciliation
							like App folio, Cooper, Newrez (Shellpoint)
						</p>
						<p>
							<i class='fa fa-check'></i> QuickBooks Online, XERO & ZOHO Cleanup
							Bookkeeping
						</p>
						<p>
							<i class='fa fa-check'></i> Migration of Data from QB Desktop to
							QB Online
						</p>
						<p>
							<i class='fa fa-check'></i> Financial Statement Preparation and
							Analysis
						</p>
						<p>
							<i class='fa fa-check'></i> Bookkeeping including Invoicing and
							Collections
						</p>
						<p>
							<i class='fa fa-check'></i> Budgets and Financial Forecasting
						</p>
						<p>
							<i class='fa fa-check'></i> Bank and Credit Card Reconciliation
						</p>
						<p>
							<i class='fa fa-check'></i> Reconciling Line of Credit.
						</p>
						{/* <svg
							viewBox='0 0 200 200'
							xmlns='http://www.w3.org/2000/svg'
							style={{ position: 'absolute', width: 100 }}
						>
							<path
								fill='#8A3FFC'
								d='M42.9,-56.3C57.6,-48.5,72.8,-38.5,76.5,-25.3C80.2,-12.1,72.4,4.5,64.8,19C57.3,33.6,50,46.2,39.2,53.3C28.5,60.4,14.2,62.1,-1.5,64.1C-17.1,66.2,-34.3,68.5,-47.6,62.1C-60.9,55.8,-70.3,40.9,-71.8,25.8C-73.2,10.8,-66.6,-4.3,-62.2,-21C-57.8,-37.6,-55.7,-55.7,-45.8,-65.1C-35.8,-74.4,-17.9,-75,-1.9,-72.5C14.1,-69.9,28.3,-64.1,42.9,-56.3Z'
								transform='translate(100 100)'
							/>
						</svg> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default WhatWeDo;
