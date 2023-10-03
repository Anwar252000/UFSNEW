import { Link } from 'react-router-dom';
import React from 'react';

const Breadcrumb = ({ img, title, subtitle }) => {
	return (
		<>
			<section
				className='page__title p-relative d-flex align-items-center'
				style={{
					background: `url( ${img ? img : 'img/Slider/S2.jpg'})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: 40,
				}}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='page__title-inner text-center'>
								<h1 className='text-light'>{title}</h1>
								<div className='page__title-breadcrumb'>
									<nav aria-label='breadcrumb'>
										<ol className='breadcrumb justify-content-center'>
											<li className='breadcrumb-item'>
												<Link to='/'>
													<a className='text-light'>Home</a>
												</Link>
											</li>
											<li
												className='breadcrumb-item active text-light'
												aria-current='page'
											>
												{' '}
												{subtitle}
											</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Breadcrumb;
