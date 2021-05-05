import React, { useContext, useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import './App.css';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import InstituteLayout from './layouts/InstituteLayout';
import StudentLayout from './layouts/StudentLayout';
import TeacherLayout from './layouts/TeacherLayout';

// Views
import Home from './views/Home';
import InstituteDashboard from './views/institute/dashboard';
import StudentDashboard from './views/student/dashboard';
import TeacherDashboard from './views/teacher/dashboard';
import AuthContext from './utils/Auth';
import { useHistory } from 'react-router';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	const { auth } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		if (!auth.isloading) {
			const page = location.pathname;
			document.body.classList.add('is-loaded');
			childRef.current.init();
			trackPage(page);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth.isloading, location]);

	if (auth.isloading) return <h1>Loading...</h1>;

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute
						exact
						path='/'
						component={Home}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path='/institute'
						component={InstituteDashboard}
						layout={InstituteLayout}
					/>
					<AppRoute
						exact
						path='/student'
						component={StudentDashboard}
						layout={StudentLayout}
					/>
					<AppRoute
						exact
						path='/teacher'
						component={TeacherDashboard}
						layout={TeacherLayout}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
