import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthContext from '../../utils/Auth';
import useForm from '../../utils/useForm';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	multilineColor: {
		color: '#ffffff',
	},
}));

export default function SignIn() {
	const classes = useStyles();
	const { form, HandleChange } = useForm({ username: '', password: '' });

	const { auth, institute_login } = useContext(AuthContext);

	const HandleSubmit = async () => {
		await institute_login(form.username, form.password);
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<TextField
					InputProps={{ className: classes.multilineColor }}
					value={form.username}
					onChange={HandleChange}
					name='username'
					color=''
					label='Enter Institute ID'
					variant='outlined'
					margin='normal'
					fullWidth
				/>
				<TextField
					InputProps={{ className: classes.multilineColor }}
					className={classes.multilineColor}
					value={form.password}
					onChange={HandleChange}
					variant='outlined'
					margin='normal'
					required
					color=''
					fullWidth
					name='password'
					label='Password'
					type='password'
				/>
				<Button
					variant='contained'
					fullWidth
					color='primary'
					onClick={HandleSubmit}
					className={classes.submit}>
					Sign In
				</Button>
			</div>
		</Container>
	);
}
