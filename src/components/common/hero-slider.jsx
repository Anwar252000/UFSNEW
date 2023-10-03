/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { home_slider } from '../../data/slider-data';

function HeroSlider({ home_six }) {
	// slick setting
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: false,
		arrows: false,
	};
	return (
		<>
			{/* <!-- slider area start --> */}
			<section
				className={`slider__area ${
					home_six ? 'slider__area-2' : ''
				} p-relative`}
			>
				<Slider className='slider-active' {...settings}>
					{home_slider.map((slider, index) => {
						return (
							<div key={index}>
								<div
									className={`single-slider slider__height ${
										home_six ? 'single-slider-2 slider__height-5' : ''
									} d-flex align-items-center`}
									style={{
										backgroundImage: `url(${slider.bgImg})`,
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center',
										backgroundSize: 'cover',
									}}
								>
									<div className='container'>
										<div className='row'>
											<div className='col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12'>
												<div className='slider__content p-relative z-index-1'>
													<h2 className='text-shadow text-dark'>
														{slider.title}
													</h2>
													<p className='text-dark text-shadow'>
														{slider.subtitle1}
														<br />
														<b>{slider.subtitle2}</b>
													</p>
													<div className='hero-slider-btn'>
														<a
															href='UFS_profile.pdf'
															download='UFS_profile.pdf'
															className='os-btn os-btn-slider'
														>
															Download Profile
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</section>
			{/* <!-- slider area end --> */}
		</>
	);
}

export default HeroSlider;
