import React from 'react';
import Header from '../components/teacher_layout/Header';
import Footer from '../components/teacher_layout/Footer';

const LayoutDefault = ({ children }) => (
	<>
		<Header navPosition='right' className='reveal-from-bottom' />
		<main
			style={{ margin: '150px', marginTop: '100px' }}
			className='site-content'>
			{children}
		</main>
		<Footer />
	</>
);

export default LayoutDefault;
