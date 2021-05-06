import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'What Our Application Does and how does it work ?',
		paragraph:
			'Our Applications is an online and course management for Students, Teachers and as well as Institutions.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className='center-content'
					/>
					<div className={tilesClasses}>
						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-01.svg')}
											alt='Features tile icon 01'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Minimalistic UI</h4>
									<p className='m-0 text-sm'>
										We have a simple and friendly UI for any age group for easy access.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-02.svg')}
											alt='Features tile icon 02'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Reports and Statistics</h4>
									<p className='m-0 text-sm'>
										The Institutions or Teachers can analyse the statistics by the student's performance.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-03.svg')}
											alt='Features tile icon 03'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Institute Support</h4>
									<p className='m-0 text-sm'>
										We have institute login where they can host courses and assign them to teachers.
									</p>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-04.svg')}
											alt='Features tile icon 04'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Teacher Support</h4>
									<p className='m-0 text-sm'>
										Teachers can know which students are enrolled in their courses and manage them accordingly for their use which has additional information like their email-id.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-05.svg')}
											alt='Features tile icon 05'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Security as a Feature</h4>
									<p className='m-0 text-sm'>
										We have made Security as a feature which means our application is safe to use for our clients/Institutions
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/feature-tile-icon-06.svg')}
											alt='Features tile icon 06'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Feedback/Support</h4>
									<p className='m-0 text-sm'>
										We get Regular feedbacks from our clients and users so that we can improve our application in a better mannner.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
