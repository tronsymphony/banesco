import { useBlockProps } from '@wordpress/block-editor'

import IMAGE1 from './assets/1.jpg'
import MIMAGE1 from './assets/m-1.jpg'
import IMAGE2 from './assets/2.jpg'
import MIMAGE2 from './assets/m-2.jpg'
import IMAGE3 from './assets/3.jpg'
import MIMAGE3 from './assets/m-3.jpg'
import IMAGE4 from './assets/4.jpg'
import MIMAGE4 from './assets/m-4.jpg'
import IMAGE5 from './assets/5.jpg'
import MIMAGE5 from './assets/m-5.jpg'
import IMAGE6 from './assets/6.jpg'
import MIMAGE6 from './assets/m-6.jpg'
import IMAGE7 from './assets/7.jpg'
import MIMAGE7 from './assets/m-7.jpg'

export default function save({ attributes }) {
	const { paddings, margins, gradient, title, posts1, posts2 } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="posts"
			style={{
				'--paddings-top': paddings.desktop.top ? paddings.desktop.top : '0px',
				'--paddings-top--mobile': paddings.mobile.top ? paddings.mobile.top : '0px',
				'--paddings-bottom': paddings.desktop.bottom ? paddings.desktop.bottom : '0px',
				'--paddings-bottom--mobile': paddings.mobile.bottom ? paddings.mobile.bottom : '0px',
				'--margins-top': margins.desktop.top ? margins.desktop.top : '0px',
				'--margins-top--mobile': margins.mobile.top ? margins.mobile.top : '0px',
				'--margins-bottom': margins.desktop.bottom ? margins.desktop.bottom : '0px',
				'--margins-bottom--mobile': margins.mobile.bottom ? margins.mobile.bottom : '0px',
				'--gradient': gradient ? gradient : '#fff',
			}}
			>
				<div className="container">
					{title && <h2 className="posts__title">{title}</h2>}
					<div className="posts__inner">
						<div className="posts__left">
							{posts1.map((post) => (
								<div
									className="posts__item"
									data-size={post.big ? 'big' : 'small'}
									data-color={post.whiteText ? 'white' : 'default'}
									data-mhidden={post.mHide ? 'true' : 'false'}
								>
									{post.image && (
										<div className={`posts__item-image${post.mImage ? ' only-desktop' : ''}`}>
											{post.image === '1.jpg' ? (
												<img src={IMAGE1} alt={'IMAGE 1'} />
											) : post.image === '2.jpg' ? (
												<img src={IMAGE2} alt={'IMAGE 2'} />
											) : post.image === '3.jpg' ? (
												<img src={IMAGE3} alt={'IMAGE 3'} />
											) : post.image === '4.jpg' ? (
												<img src={IMAGE4} alt={'IMAGE 4'} />
											) : post.image === '5.jpg' ? (
												<img src={IMAGE5} alt={'IMAGE 5'} />
											) : post.image === '6.jpg' ? (
												<img src={IMAGE6} alt={'IMAGE 6'} />
											) : post.image === '7.jpg' ? (
												<img src={IMAGE7} alt={'IMAGE 7'} />
											) : post.image.url && post.image.alt ? (
												<img src={post.image.url} alt={post.image.alt} />
											) : (
												''
											)}
										</div>
									)}
									{post.mImage && (
										<div className="posts__item-image only-mobile">
											{post.mImage === 'm-1.jpg' ? (
												<img src={MIMAGE1} alt={'MIMAGE 1'} />
											) : post.mImage === 'm-2.jpg' ? (
												<img src={MIMAGE2} alt={'MIMAGE 2'} />
											) : post.mImage === 'm-3.jpg' ? (
												<img src={MIMAGE3} alt={'MIMAGE 3'} />
											) : post.mImage === 'm-4.jpg' ? (
												<img src={MIMAGE4} alt={'MIMAGE 4'} />
											) : post.mImage === 'm-5.jpg' ? (
												<img src={MIMAGE5} alt={'MIMAGE 5'} />
											) : post.mImage === 'm-6.jpg' ? (
												<img src={MIMAGE6} alt={'MIMAGE 6'} />
											) : post.mImage === 'm-7.jpg' ? (
												<img src={MIMAGE7} alt={'MIMAGE 7'} />
											) : post.mImage.url && post.mImage.alt ? (
												<img src={post.mImage.url} alt={post.mImage.alt} />
											) : post.image.url && post.image.alt ? (
												<img src={post.image.url} alt={post.image.alt} />
											) : (
												''
											)}
										</div>
									)}
									<div className="posts__item-content">
										{post.title && <h3 className="posts__item-title">{post.title}</h3>}
										{post.description && <h4 className="posts__item-description" dangerouslySetInnerHTML={{ __html: post.description }} />}
										{(post.button || post.primaryButton) && (
											<div className="posts__item-buttons">
												{post.button && (
													<div className="posts__item-link-button">
														<a className="link-button" href={post.target}>
															{post.button}
														</a>
													</div>
												)}
												{post.primaryButton && (
													<div className="posts__item-primary-button">
														<a className="primary-button" href={post.primaryTarget}>
															{post.primaryButton}
														</a>
													</div>
												)}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
						<div className="posts__right">
							{posts2.map((post) => (
								<div
									className="posts__item"
									data-size={post.big ? 'big' : 'small'}
									data-color={post.whiteText ? 'white' : 'default'}
									data-mhidden={post.mHide ? 'true' : 'false'}
								>
									{post.image && (
										<div className={`posts__item-image${post.mImage ? ' only-desktop' : ''}`}>
											{post.image === '1.jpg' ? (
												<img src={IMAGE1} alt={'IMAGE 1'} />
											) : post.image === '2.jpg' ? (
												<img src={IMAGE2} alt={'IMAGE 2'} />
											) : post.image === '3.jpg' ? (
												<img src={IMAGE3} alt={'IMAGE 3'} />
											) : post.image === '4.jpg' ? (
												<img src={IMAGE4} alt={'IMAGE 4'} />
											) : post.image === '5.jpg' ? (
												<img src={IMAGE5} alt={'IMAGE 5'} />
											) : post.image === '6.jpg' ? (
												<img src={IMAGE6} alt={'IMAGE 6'} />
											) : post.image === '7.jpg' ? (
												<img src={IMAGE7} alt={'IMAGE 7'} />
											) : post.image.url && post.image.alt ? (
												<img src={post.image.url} alt={post.image.alt} />
											) : (
												''
											)}
										</div>
									)}
									{post.mImage && (
										<div className="posts__item-image only-mobile">
											{post.mImage === 'm-1.jpg' ? (
												<img src={MIMAGE1} alt={'MIMAGE 1'} />
											) : post.mImage === 'm-2.jpg' ? (
												<img src={MIMAGE2} alt={'MIMAGE 2'} />
											) : post.mImage === 'm-3.jpg' ? (
												<img src={MIMAGE3} alt={'MIMAGE 3'} />
											) : post.mImage === 'm-4.jpg' ? (
												<img src={MIMAGE4} alt={'MIMAGE 4'} />
											) : post.mImage === 'm-5.jpg' ? (
												<img src={MIMAGE5} alt={'MIMAGE 5'} />
											) : post.mImage === 'm-6.jpg' ? (
												<img src={MIMAGE6} alt={'MIMAGE 6'} />
											) : post.mImage === 'm-7.jpg' ? (
												<img src={MIMAGE7} alt={'MIMAGE 7'} />
											) : post.mImage.url && post.mImage.alt ? (
												<img src={post.mImage.url} alt={post.mImage.alt} />
											) : post.image.url && post.image.alt ? (
												<img src={post.image.url} alt={post.image.alt} />
											) : (
												''
											)}
										</div>
									)}
									<div className="posts__item-content">
										{post.title && <h3 className="posts__item-title">{post.title}</h3>}
										{post.description && <h4 className="posts__item-description" dangerouslySetInnerHTML={{ __html: post.description }} />}
										{(post.button || post.primaryButton) && (
											<div className="posts__item-buttons">
												{post.button && (
													<div className="posts__item-link-button">
														<a className="link-button" href={post.target}>
															{post.button}
														</a>
													</div>
												)}
												{post.primaryButton && (
													<div className="posts__item-primary-button">
														<a className="primary-button" href={post.primaryTarget}>
															{post.primaryButton}
														</a>
													</div>
												)}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
