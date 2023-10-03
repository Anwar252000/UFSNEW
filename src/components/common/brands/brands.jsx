import Slider from 'react-slick';
import { Link } from 'react-router-dom';
// import brands from '../../../data/brands';
import clients from '../../../data/clients';

const settings = {
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const Brands = ({ df }) => {
	return (
		<>
			<section className={`client__area ${df ? 'pt-80' : 'pt-80 pb-80'}`}>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='section__title-wrapper text-center mb-55'>
								<div className='section__title mb-10'>
									<h2>Our Clients</h2>
								</div>
								{/* <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div> */}
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xl-12'>
							<div
								className={`client__slider ${df ? 'pb-80' : ''} text-center`}
							>
								<Slider {...settings}>
									{clients.map((item, index) => {
										return (
											<div key={item.id}>
												<Link to='#'>
													{/* <img src={item.img} alt='client' /> */}
													<strong>{item.title}</strong>
												</Link>
												{/* <h6>{item.title}</h6> */}
												<p>$ {item.annualTurnover}</p>
												<p>{item.industry}</p>
												<p>{item.about}</p>
												<Link to='#'>
													<button className='os os-btn'>Get More</button>
												</Link>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Brands;
