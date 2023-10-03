import React from 'react';

const Introduction = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='row justify-content-center align-items-center'>
					<div className='col-md-6 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i className='fa fa-handshake pt-3' style={{ fontSize: 40 }}></i>
							<div className='section__title my-3'>
								<h2>INTRODUCTION</h2>
							</div>
							<p className='px-1'>
								Ultimate financial solution offers expert accounting and
								financial services. We have branches based in USA, AUS &
								Malaysia. Our Skilled Accountants provide Bookkeeping, Financial
								modelling & forecasting, CFO services to companies worldwide.
							</p>
						</div>
					</div>
					<div className='col-md-6 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i
								className='fas fa-bullseye-pointer pt-3'
								style={{ fontSize: 40 }}
							></i>
							<div className='section__title my-3'>
								<h2>MISSION</h2>
							</div>
							<p className='px-1'>
								Leading accountants & advisers, renowned for quality services to
								valued clients. Committed to financial standards & best
								practices, ensuring excellence in accounting and business
								guidance.
							</p>
						</div>
					</div>
					<div className='col-md-6 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i class='fa fa-eye pt-3' style={{ fontSize: 40 }}></i>
							<div className='section__title my-3'>
								<h2>VISION</h2>
							</div>
							<p className='px-1'>
								We strive to lead in Accounting, Taxation, and Secretarial
								Services from Pakistan. Advocating global financial standards,
								promoting sustainability, and adhering to local regulations for
								optimal local business support.
							</p>
						</div>
					</div>
					<div className='col-md-6 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i class='fa fa-thumbs-up pt-3' style={{ fontSize: 40 }}></i>
							<div className='section__title my-3'>
								<h2>VALUE</h2>
							</div>
							<p className='px-1'>
								Our Ultimate Financial Solutions values are inspired by
								International Federation of Accountancy (IFAC) Code of Conduct
								and Association of Chartered Certified Accountants(ACCA).
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Introduction;
