import React from 'react';

import HeroSlider from '../components/common/hero-slider';
import OurTeam from '../components/our-team';
import SubscribeArea from '../components/subscribe-area';
import VideoBox from '../components/video-box';
import Clients from '../components/common/brands/brands-2';
import Introduction from '../components/Introduction';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import OurServices from '../components/our-services';
import Experience from '../components/experience';
import SecretarialService from '../components/secretarial-service';
import BackToTopButton from '../components/back-to-top-button';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<>
			<Helmet>
				{/* <title>UFS | Ultimate Financial Solutions</title> */}
				<title>UFS | Ultimate Financial Solutions</title>
				<meta
					name='keywords'
					content='Ultimate Financial Solutions, UFS, financial solutions, financial services, financial planning, financial advice money management, best financial solutions, comprehensive financial solutions, holistic financial solutions, financial solutions for individuals, financial solutions for businesses'
				/>
				<meta
					name='description'
					content='Ultimate Financial Solutions is a comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<HeroSlider />
			<Introduction />
			<WhoWeAre />
			<WhatWeDo />
			<OurServices />
			<Experience />
			<SecretarialService />
			<OurTeam />
			<Clients />
			{/* <VideoBox /> */}
			<BackToTopButton />
			<SubscribeArea />
		</>
	);
};

export default Home;
