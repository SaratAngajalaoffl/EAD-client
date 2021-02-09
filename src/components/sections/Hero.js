import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import { GoogleLogin } from 'react-google-login';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Signin from '../elements/SignIn';
import Modal from '../elements/Modal';
import config from '../../config';
import Typography from '@material-ui/core/Typography';
const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [ismodal1open, setismodal1open] = useState(false);
	const [ismodal2open, setismodal2open] = useState(false);
	const [message, setmessage] = useState('');

	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const HandleSuccess = async (response) => {
		console.log(response.tokenId);
	};

	const HandleFailure = (response) => {
		setmessage('Google Authentication Failed');
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container-sm'>
				<div className={innerClasses}>
					<div className='hero-content'>
						<h1
							className='mt-0 mb-16 reveal-from-bottom'
							data-reveal-delay='200'>
							A ONE STOP DESTINATION FOR HANDLING{' '}
							<span className='text-color-primary'>
								COURSE WORK
							</span>
						</h1>
						<div className='container-xs'>
							<p
								className='m-0 mb-32 reveal-from-bottom'
								data-reveal-delay='400'>
								We are a solution for conducting exams during
								this pandemic with the added flexibility of our
								API for accessing statistics.
							</p>
							<div
								className='reveal-from-bottom'
								data-reveal-delay='600'>
								<ButtonGroup>
									<Button
										color='primary'
										wideMobile
										onClick={() => setismodal1open(true)}>
										Student/Instructer Login
									</Button>
									<Button
										color='dark'
										wideMobile
										onClick={() => setismodal2open(true)}>
										Institute Login
									</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
					<div
						className='hero-figure reveal-from-bottom illustration-element-01'
						data-reveal-value='20px'
						data-reveal-delay='800'>
						<Image
							className='has-shadow'
							src={require('./../../assets/images/video-placeholder.jpg')}
							alt='Hero'
							width={700}
							height={500}
						/>
					</div>
				</div>
				<Modal
					handleClose={() => setismodal1open(false)}
					show={ismodal1open}>
					<h3>Student/Instructer Login</h3>
					<div className=''>
						<div className='error-msg'>{message}</div>
						<GoogleLogin
							clientId={config.GOOGLE_CLIENT_ID}
							render={(renderProps) => (
								<button
									className='button'
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}>
									LOGIN WITH GOOGLE
								</button>
							)}
							onSuccess={HandleSuccess}
							onFailure={HandleFailure}
						/>
					</div>
				</Modal>
				<Modal
					handleClose={() => setismodal2open(false)}
					show={ismodal2open}>
					<Typography variant='h3' component='h6'>
						Institute Login
					</Typography>
					<Signin />
				</Modal>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
