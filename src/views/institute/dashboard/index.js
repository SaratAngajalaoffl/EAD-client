import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../utils/Auth';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function InstituteDashboard() {
	const { auth } = useContext(AuthContext);
	const [teachers, setTeachers] = useState([]);
	const [students, setStudents] = useState([]);
	const [courses, setCourses] = useState([]);
	const [studentmodal, setstudentmodel] = useState(false);
	const [modal1, setmodel1] = useState(false);
	const [modal2, setmodel2] = useState(false);
	const [name, setname] = useState('');
	const [email, setemail] = useState('');

	const loaddata = async () => {
		let res = await axios.get('http://localhost:3001/institute/students', {
			headers: {
				Authorization: `Bearer ${auth.user.token}`,
			},
		});
		setStudents(res.data);
		res = await axios.get('http://localhost:3001/institute/teachers', {
			headers: {
				Authorization: `Bearer ${auth.user.token}`,
			},
		});
		setTeachers(res.data);
		res = await axios.get('http://localhost:3001/institute/courses', {
			headers: {
				Authorization: `Bearer ${auth.user.token}`,
			},
		});
		setCourses(res.data);
	};

	useEffect(() => {
		console.log('Token is', auth.user.token);
		loaddata();
	}, [auth.user.token]);

	const AddStudent = async () => {
		try {
			await axios.post(
				'http://localhost:3001/institute/add-student',
				{
					email,
					name,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${auth.user.token}`,
					},
				}
			);
			setname('');
			setemail('');
			loaddata();
			setstudentmodel();
			setmodel1();
			setmodel2();
		} catch (err) {
			console.log(err);
		}
	};
	const AddCourse = async () => {
		try {
			await axios.post(
				'http://localhost:3001/institute/add-course',
				{
					name,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${auth.user.token}`,
					},
				}
			);
			setname('');
			setemail('');
			loaddata();
			setstudentmodel();
			setmodel1();
			setmodel2();
		} catch (err) {
			console.log(err);
		}
	};
	const AddTeacher = async () => {
		try {
			await axios.post(
				'http://localhost:3001/institute/add-teacher',
				{
					email,
					name,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${auth.user.token}`,
					},
				}
			);
			setname('');
			setemail('');
			loaddata();
			setstudentmodel();
			setmodel1();
			setmodel2();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Dialog
				open={studentmodal}
				onClose={() => setstudentmodel(false)}
				aria-labelledby=''>
				<DialogTitle style={{ color: '#000' }} id=''>
					<Typography variant='h5' color='textPrimary'>
						Add New Student
					</Typography>
				</DialogTitle>
				<DialogContent>
					<TextField
						id=''
						fullWidth
						label='Enter Student Name'
						value={name}
						onChange={(e) => {
							setname(e.target.value);
						}}
					/>
					<TextField
						id=''
						fullWidth
						label='Enter Student Email'
						value={email}
						onChange={(e) => {
							setemail(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={AddStudent} color='default'>
						Add
					</Button>
					<Button
						onClick={() => setstudentmodel(false)}
						color='default'>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={modal1}
				onClose={() => setmodel1(false)}
				aria-labelledby=''>
				<DialogTitle style={{ color: '#000 ' }} id=''>
					<Typography variant='h5' color='textPrimary'>
						Add New Instructor
					</Typography>
				</DialogTitle>
				<DialogContent>
					<TextField
						id=''
						fullWidth
						label='Enter Instructor Name'
						value={name}
						onChange={(e) => {
							setname(e.target.value);
						}}
					/>
					<TextField
						id=''
						fullWidth
						label='Enter Instructor Email'
						value={email}
						onChange={(e) => {
							setemail(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={AddTeacher} color='default'>
						Add
					</Button>
					<Button onClick={() => setmodel1(false)} color='default'>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={modal2}
				onClose={() => setmodel2(false)}
				aria-labelledby=''>
				<DialogTitle style={{ color: '#000 ' }} id=''>
					<Typography variant='h5' color='textPrimary'>
						Add New Course
					</Typography>
				</DialogTitle>
				<DialogContent>
					<TextField
						id=''
						fullWidth
						label='Enter Course Name'
						value={name}
						onChange={(e) => {
							setname(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={AddCourse} color='default'>
						Add
					</Button>
					<Button onClick={() => setmodel2(false)} color='default'>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
			<div
				style={{
					width: '100%',
					height: '20vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<h1>{auth.user.name}'s Dashboard</h1>
			</div>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<div
					style={{
						margin: '20px',
						height: '50vh',
						overflowY: 'scroll',
						flex: 1,
					}}>
					<h1 style={{ textAlign: 'left' }}>
						Students
						<IconButton
							aria-label=''
							onClick={() => setstudentmodel(true)}>
							<AddIcon style={{ color: '#fff' }} />
						</IconButton>
					</h1>
					<ul>
						{students.map((it) => (
							<li>
								{it.name} || {it.email}
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						margin: '20px',
						height: '50vh',
						overflowY: 'scroll',
						flex: 1,
					}}>
					<h1 style={{ textAlign: 'left' }}>
						Teachers
						<IconButton
							aria-label=''
							onClick={() => setmodel1(true)}>
							<AddIcon style={{ color: '#fff' }} />
						</IconButton>
					</h1>
					<ul>
						{teachers.map((it) => (
							<li>
								{it.name} || {it.email}
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						margin: '20px',
						height: '50vh',
						overflowY: 'scroll',
						flex: 1,
					}}>
					<h1 style={{ textAlign: 'left' }}>
						Courses
						<IconButton
							aria-label=''
							onClick={() => setmodel2(true)}>
							<AddIcon style={{ color: '#fff' }} />
						</IconButton>
					</h1>
					<ul>
						{courses.map((it) => (
							<li>
								{it.name} || {it.students.length}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default InstituteDashboard;
