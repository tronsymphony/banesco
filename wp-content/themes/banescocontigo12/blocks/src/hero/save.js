import { useBlockProps } from '@wordpress/block-editor'

import banner from './assets/banner.png'
import back from './assets/background.jpg'
import mBack from './assets/background-mobile.jpg'

export default function save({ attributes }) {
	const {
		paddings,
		colors,
		margins,
		measurements,
		widths,
		title,
		mTitle,
		description,
		mDescription,
		button,
		whiteButton,
		outlinedButton,
		target,
		image,
		mImage,
		gradient,
		background,
		mBackground,
	} = attributes

	return (
		<section {...useBlockProps.save()}>
			<div
				className="hero"
				style={{
					'--paddings-top': paddings.top ? paddings.top : '0px',
					'--paddings-bottom': paddings.bottom ? paddings.bottom : '0px',
					'--paddings-top-mobile': paddings.mTop ? paddings.mTop : '0px',
					'--paddings-bottom-mobile': paddings.mBottom ? paddings.mBottom : '0px',
					'--gradient': gradient ? gradient : '#EBF0F5',
					'--colors-title': colors.title ? colors.title : '#fff',
					'--colors-description': colors.description ? colors.description : '#fff',
					'--margins-title': margins.title ? margins.title : '0px',
					'--margins-description': margins.description ? margins.description : '0px',
					'--margins-button': margins.button ? margins.button : '0px',
					'--margins-title-mobile': margins.mTitle ? margins.mTitle : '0px',
					'--margins-description-mobile': margins.mDescription ? margins.mDescription : '0px',
					'--margins-button-mobile': margins.mButton ? margins.mButton : '0px',
					'--measurements-image-width': measurements.imageWidth ? measurements.imageWidth : '100px',
					'--measurements-image-height': measurements.imageHeight ? measurements.imageHeight : '100px',
					'--measurements-image-width-mobile': measurements.mImageWidth ? measurements.mImageWidth : '100px',
					'--measurements-image-height-mobile': measurements.mImageHeight
						? measurements.mImageHeight
						: '100px',
					'--measurements-image-transform': measurements.imageTransform ? measurements.imageTransform : '0px',
					'--measurements-image-transform-mobile': measurements.mImageTransform
						? measurements.mImageTransform
						: '0px',
					'--widths-title': widths.title ? widths.title : '400px',
					'--widths-description': widths.description ? widths.description : '500px',
					'--widths-title-mobile': widths.mTitle ? widths.mTitle : '100%',
					'--widths-description-mobile': widths.mDescription ? widths.mDescription : '100%',
				}}
			>
				<div className="container">
					<div className="hero__inner">
						<div className="hero__content">
							<h2 className="hero__title">
								<span
									className={mTitle ? 'only-desktop only-table' : ''}
									dangerouslySetInnerHTML={{ __html: title }}
								/>
								{mTitle && <span className="only-mobile" dangerouslySetInnerHTML={{ __html: mTitle }} />}
							</h2>
							{description && (
								<h3 className="hero__description">
									<span
										className={mDescription ? 'only-desktop only-table' : ''}
										dangerouslySetInnerHTML={{ __html: description }}
									/>

									{mDescription && (
										<span className="only-mobile" dangerouslySetInnerHTML={{ __html: mDescription }} />
									)}
								</h3>
							)}
							{button && (
								<div className="hero__buttons">
									<a
										className={`hero__button ${outlinedButton ? 'outlined-button' : 'primary-button'}`}
										data-white={whiteButton ? 'true' : 'false'}
										href={target}
									>
										{button}
									</a>
								</div>
							)}
						</div>
						{image.url && (
							<div className="hero__image">
								{image.url == 'banner.png' ? (
									<img className={mImage.url ? 'only-table only-desktop' : ''} src={banner} alt={'banner'} />
								) : image.url ? (
									<img
										className={mImage.url ? 'only-table only-desktop' : ''}
										src={image.url}
										alt={image.alt}
									/>
								) : (
									''
								)}
								{mImage.url == 'banner.png' ? (
									<img className="only-mobile" src={banner} alt={'banner'} />
								) : mImage.url ? (
									<img className="only-mobile" src={mImage.url} alt={mImage.alt} />
								) : (
									''
								)}
							</div>
						)}
					</div>
				</div>
				{background.url && (
					<div className="hero__background">
						{background.url == 'background.jpg' ? (
							<img
								className={mBackground.url ? 'only-desktop only-table' : ''}
								src={back}
								alt={'background'}
							/>
						) : background.url ? (
							<img
								className={mBackground.url ? 'only-desktop only-table' : ''}
								src={background.url}
								alt={background.alt}
							/>
						) : (
							''
						)}
						{mBackground.url == 'background-mobile.jpg' ? (
							<img className="only-mobile" src={mBack} alt={'background'} />
						) : mBackground.url ? (
							<img className="only-mobile" src={mBackground.url} alt={mBackground.alt} />
						) : (
							''
						)}
					</div>
				)}
			</div>
		</section>
	)
}
