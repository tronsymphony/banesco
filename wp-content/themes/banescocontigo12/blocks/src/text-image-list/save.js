import { useBlockProps } from '@wordpress/block-editor'

import img from './assets/image.png'
import mImg from './assets/image-mobile.png'

export default function save({ attributes }) {
	const { title, content, image, mImage } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="text-image-list">
				<div className="container">
					<div className="text-image-list__inner">
						{image && (
							<div className={`text-image-list__image${mImage ? ' only-desktop' : ''}`}>
								{image === 'image.png' ? (
									<img src={img} alt={'image'} />
								) : image.url ? (
									<img src={image.url} alt={image.alt} />
								) : (
									''
								)}
							</div>
						)}
						{mImage && (
							<div className="text-image-list__image only-mobile">
								{mImage === 'image-mobile.png' ? (
									<img src={mImg} alt={'image'} />
								) : mImage.url ? (
									<img src={mImage.url} alt={mImage.alt} />
								) : (
									''
								)}
							</div>
						)}
						{(title || content) && (
							<div className="text-image-list__text">
								{title && (
									<h2 className="text-image-list__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
								)}
								{content && (
									<div className="text-image-list__content" dangerouslySetInnerHTML={{ __html: content }} />
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
