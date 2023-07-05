import { useBlockProps } from '@wordpress/block-editor'

import img from './assets/image.png'

export default function save({ attributes }) {
	const { paddings, margins, measurements, title, text, image, button, target, reverseDirection, shadow } =
		attributes

	return (
		<section {...useBlockProps.save()}>
			<div
				className={reverseDirection ? 'text-image text-image--reverse' : 'text-image'}
				style={{
					'--paddings-top': paddings.top ? paddings.top : '0px',
					'--paddings-bottom': paddings.bottom ? paddings.bottom : '0px',
					'--paddings-top-mobile': paddings.mTop ? paddings.mTop : '0px',
					'--paddings-bottom-mobile': paddings.mBottom ? paddings.mBottom : '0px',
					'--margins-title': margins.title ? margins.title : '0px',
					'--margins-description': margins.description ? margins.description : '0px',
					'--margins-button': margins.button ? margins.button : '0px',
					'--margins-image': margins.image ? margins.image : '0px',
					'--margins-title-mobile': margins.mTitle ? margins.mTitle : '0px',
					'--margins-description-mobile': margins.mDescription ? margins.mDescription : '0px',
					'--margins-button-mobile': margins.mButton ? margins.mButton : '0px',
					'--margins-image-mobile': margins.mImage ? margins.mImage : '0px',
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
				}}
				data-shadow={shadow ? 'true' : 'false'}
			>
				<div className="container">
					<div className="text-image__inner">
						<div className="text-image__content">
							{title ? (
								<h2 className="text-image__title">{title}</h2>
							) : (
								<h2 className="text-image__title hidden">Text image</h2>
							)}
							{text && <div className="text-image__description" dangerouslySetInnerHTML={{ __html: text }} />}
							{button && (
								<div className="text-image__buttons">
									<a className="text-image__button primary-button" href={target}>
										{button}
									</a>
								</div>
							)}
						</div>
						{image.url && (
							<div className="text-image__image">
								{image.url == 'image.png' ? (
									<img src={img} alt="image" />
								) : image.url ? (
									<img src={image.url} alt={image.alt} />
								) : (
									''
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
