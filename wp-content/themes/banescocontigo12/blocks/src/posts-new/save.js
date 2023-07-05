import { useBlockProps } from '@wordpress/block-editor'

import IMAGE1 from './assets/1.png'
import IMAGE2 from './assets/2.png'
import MIMAGE1 from './assets/m-1.png'
import MIMAGE2 from './assets/m-2.png'

export default function save({ attributes }) {
	const { title, posts } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="posts-new">
				<div className="container">
					{title && <h2 className="posts-new__title">{title}</h2>}
					<div className="posts-new__inner">
						<div className="posts-new__left">
							<div className="posts-new__item">
								{posts[0].image && (
									<div
										className={`${
											posts[0].big && posts[0].mImage
												? 'posts-new__item-image posts-new__item-image--big only-desktop'
												: posts[0].big
												? 'posts-new__item-image posts-new__item-image--big'
												: posts[0].mImage
												? 'posts-new__item-image only-desktop'
												: 'posts-new__item-image'
										}`}
									>
										{posts[0].image === '1.png' ? (
											<img src={IMAGE1} alt={'IMAGE 1'} />
										) : posts[0].image.url && posts[0].image.alt ? (
											<img src={posts[0].image.url} alt={posts[0].image.alt} />
										) : (
											''
										)}
									</div>
								)}
								{posts[0].mImage && (
									<div
										className={`${
											posts[1].big
												? 'posts-new__item-image posts-new__item-image--big only-mobile'
												: 'posts-new__item-image only-mobile'
										}`}
									>
										{posts[0].mImage === 'm-1.png' ? (
											<img src={MIMAGE1} alt={'MOBILE IMAGE 1'} />
										) : posts[0].mImage.url && posts[0].mImage.alt ? (
											<img src={posts[0].mImage.url} alt={posts[0].mImage.alt} />
										) : (
											''
										)}
									</div>
								)}
								<div className="posts-new__item-content">
									{posts[0].title && <h3 className="posts-new__item-title">{posts[0].title}</h3>}
									{posts[0].description && (
										<h4 className="posts-new__item-description">{posts[0].description}</h4>
									)}
									<div className="posts-new__item-buttons">
										<div className="posts-new__item-link-button">
											{posts[0].button && (
												<a className="link-button" href={posts[0].target}>
													{posts[0].button}
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="posts-new__right">
							<div className="posts-new__item">
								{posts[1].image && (
									<div
										className={`${
											posts[1].big && posts[1].mImage
												? 'posts-new__item-image posts-new__item-image--big only-desktop'
												: posts[1].big
												? 'posts-new__item-image posts-new__item-image--big'
												: posts[1].mImage
												? 'posts-new__item-image only-desktop'
												: 'posts-new__item-image'
										}`}
									>
										{posts[1].image === '2.png' ? (
											<img src={IMAGE2} alt={'IMAGE 2'} />
										) : posts[1].image.url && posts[1].image.alt ? (
											<img src={posts[1].image.url} alt={posts[1].image.alt} />
										) : (
											''
										)}
									</div>
								)}
								{posts[1].mImage && (
									<div
										className={`${
											posts[1].big
												? 'posts-new__item-image posts-new__item-image--big only-mobile'
												: 'posts-new__item-image only-mobile'
										}`}
									>
										{posts[1].mImage === 'm-2.png' ? (
											<img src={MIMAGE2} alt={'MOBILE IMAGE 2'} />
										) : posts[1].mImage.url && posts[1].mImage.alt ? (
											<img src={posts[1].mImage.url} alt={posts[1].mImage.alt} />
										) : (
											''
										)}
									</div>
								)}
								<div className="posts-new__item-content">
									{posts[1].title && <h3 className="posts-new__item-title">{posts[1].title}</h3>}
									{posts[1].description && (
										<h4 className="posts-new__item-description">{posts[1].description}</h4>
									)}
									<div className="posts-new__item-buttons">
										<div className="posts-new__item-link-button">
											{posts[1].button && (
												<a className="link-button" href={posts[1].target}>
													{posts[1].button}
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
