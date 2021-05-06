import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: '',
		paragraph:
			' ',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className='center-content'
					/>
					<div className={splitClasses}>
						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-12'>
								Accessible to Every Age Group
								</div>
								<p className='m-0'>
									We have a friendly and simple UI 
									so that a user can access anything in 
									our website with a minimal number of 
									clicks which means a better accesability.
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/national-cancer-institute-N_aihp118p8-unsplash.jpg')}
									alt='Features split 01'
									width={200}
									height={200}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-right'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-12'>
									Detailed Report
								</div>
								
								<p className='m-0'>
									We Also provide detailed analysis to Institutions and 
									Teachers of the students performance in their 
									respective courses. Also the teacher can know
									 which students are enrolled in their course. 
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/myriam-jessier-eveI7MOcSmw-unsplash.jpg')}
									alt='Features split 02'
									width={200}
									height={200}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-12'>
									Online / Remote Assesment
								</div>
								
								<p className='m-0'>
									With Our Application the users can register
									 themselves as an Institution and can be used 
									 in this pandemic for hosting their courses 
									 and remotely assigning them to the teachers.
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/museums-victoria-n1LIveUPls4-unsplash.jpg')}
									alt='Features split 03'
									width={200}
									height={200}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
