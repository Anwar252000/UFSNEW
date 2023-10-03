import React, { useState, useEffect } from 'react';

function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
			<button onClick={scrollToTop}>
				<i className='fas fa-angle-double-up text-light'></i>
			</button>
		</div>
	);
}

export default BackToTopButton;
