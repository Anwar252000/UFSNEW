import React from 'react';
import {
	// Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Wrapper from './layout/wrapper';
import Home from './routes';
// import Termsofuse from './pages/termsofuse';
// import Privacypolicy from './pages/privacypolicy';
import Contact from './components/contact';
import About from './routes/about';
import Vision from './routes/vision';
import Cleints from './routes/clients';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Wrapper />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '/contact',
		element: <Wrapper />,
		children: [
			{
				index: true,
				element: <Contact />,
			},
		],
	},
	{
		path: '/about',
		element: <Wrapper />,
		children: [
			{
				index: true,
				element: <About />,
			},
		],
	},
	{
		path: '/vision',
		element: <Wrapper />,
		children: [
			{
				index: true,
				element: <Vision />,
			},
		],
	},
	{
		path: '/clients',
		element: <Wrapper />,
		children: [
			{
				index: true,
				element: <Cleints />,
			},
		],
	},

	// {
	// 	path: '/privacypolicy',
	// 	element: <Wrapper />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			element: <Privacypolicy />,
	// 		},
	// 	],
	// },
	// {
	// 	path: '/termsofuse',
	// 	element: <Wrapper />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			element: <Termsofuse />,
	// 		},
	// 	],
	// },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
