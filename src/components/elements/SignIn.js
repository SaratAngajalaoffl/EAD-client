import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<form className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						autoComplete='off'
						required
						InputProps={{
							className: classes.multilineColor,
						}}
						InputLabelProps={{
							className: classes.multilineColor,
						}}
						fullWidth
						id='institute_id'
						label='Enter Institute ID'
						name='id'
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						InputProps={{
							className: classes.multilineColor,
						}}
						InputLabelProps={{
							className: classes.multilineColor,
						}}
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='off'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						Sign In
					</Button>
				</form>
			</div>
		</Container>
	);
}
