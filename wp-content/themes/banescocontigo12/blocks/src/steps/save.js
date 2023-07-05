import { useBlockProps } from '@wordpress/block-editor'

import appstore from './assets/appstore.png'
import googleplay from './assets/googleplay.png'
import background from './assets/background.jpg'

export default function save({ attributes }) {
	const { title, steps } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="steps">
				<div className="container">
					<div className="steps__inner">
						<div className="steps__title">{title}</div>
						<div className="steps__list">
							{steps.map((step) => (
								<div className="steps__item">
									{step.suptitle && <div className="steps__item-suptitle">{step.suptitle}</div>}
									{step.title && <div className="steps__item-title">{step.title}</div>}
									{step.text && <div className="steps__item-text">{step.text}</div>}
									{step.first_link_title && (
										<a className="steps__item-link link-button" href={step.first_link_step}>
											{step.first_link_title}
										</a>
									)}
									{step.second_link_title && (
										<a className="steps__item-link link-button" href={step.second_link_step}>
											{step.second_link_title}
										</a>
									)}
									<div className="steps__item-buttons">
										{step.appstore && (
											<a className="steps__item-appstore" href={step.appstore}>
												<img src={appstore} />
											</a>
										)}
										{step.googleplay && (
											<a className="steps__item-googleplay" href={step.googleplay}>
												<img src={googleplay} />
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="steps__background">
					<img src={background} alt={'background'} />
				</div>
			</div>
		</section>
	)
}
