import React from 'react';
import teams from '../data/team';

const OurTeam = () => {
	return (
		<>
			<h1 className='component-heading'>OUR FOUNDERS</h1>
			<div className='m-3 p-3 rounded text-center'>
				<div className=''>
					<div className='teams my-4 mx-2 d-flex flex-column flex-md-row'>
						{teams.map((item, index) => {
							return (
								<div className='card m-2 w-100 shadow'>
									<div style={{ backgroundImage: "url('img/team/bg.png')" }}>
										<img
											className='my-1 w-25 rounded-circle'
											src={item.img}
											alt=''
										/>
									</div>
									<div className='card-body'>
										<h3 className='card-title'>{item.name}</h3>
										<p className='card-text'>{item.info}</p>
										<p>{item.ass}</p>
										<p className='px-4'>{item.exp}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurTeam;
