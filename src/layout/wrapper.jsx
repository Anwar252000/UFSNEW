import React from 'react';
import Header from './headers/header';
import Footer from './footers/footer';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
	return (
		<>
			<Header header_big={true} />
			<Outlet />
			<Footer />
		</>
	);
};

export default Wrapper;
