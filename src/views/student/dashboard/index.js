import React, { useContext } from 'react';
import AuthContext from '../../../utils/Auth';

function StudentDashboard() {
	const { auth } = useContext(AuthContext);

	return <h1>Welcome {auth.user?.name}</h1>;
}

export default StudentDashboard;
