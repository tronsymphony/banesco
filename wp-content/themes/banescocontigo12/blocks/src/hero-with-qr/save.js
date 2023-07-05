import { useBlockProps } from '@wordpress/block-editor'

import app from './assets/appstore.png'
import google from './assets/googleplay.png'
import q from './assets/qr.png'
import back from './assets/background.jpg'
import mBack from './assets/background-mobile.jpg'

export default function save({ attributes }) {
	const {
		title,
		content,
		mContent,
		appstore,
		appstoreLink,
		googleplay,
		googleplayLink,
		qr,
		qrText,
		qrBackground,
		background,
		mBackground,
	} = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="hero-with-qr">
				<div className="container">
					{(title || content) && (
						<div className="hero-with-qr__inner">
							<div className="hero-with-qr__text">
								{title && <h2 className="hero-with-qr__title">{title}</h2>}
								{content && (
									<div
										className={`hero-with-qr__content${mContent ? ' only-desktop' : ''}`}
										dangerouslySetInnerHTML={{ __html: content }}
									></div>
								)}
								{mContent && (
									<div
										className="hero-with-qr__content only-mobile"
										dangerouslySetInnerHTML={{ __html: mContent }}
									></div>
								)}
							</div>
						</div>
					)}
					{(appstoreLink || googleplayLink) && (
						<div className="hero-with-qr__buttons">
							{appstore && (
								<a className="hero-with-qr__appstore" href={appstoreLink}>
									{appstore === 'appstore.png' ? (
										<img src={app} alt={'appstore'} />
									) : appstore.url && appstore.alt ? (
										<img src={appstore.url} alt={appstore.alt} />
									) : (
										''
									)}
								</a>
							)}
							{googleplay && (
								<a className="hero-with-qr__googleplay" href={googleplayLink}>
									{googleplay === 'googleplay.png' ? (
										<img src={google} alt={'googleplay'} />
									) : googleplay.url && googleplay.alt ? (
										<img src={googleplay.url} alt={googleplay.alt} />
									) : (
										''
									)}
								</a>
							)}
						</div>
					)}
					{(qr || qrText) && (
						<div className="hero-with-qr__qr">
							{qrText && (
								<div className="hero-with-qr__qr-text" dangerouslySetInnerHTML={{ __html: qrText }}></div>
							)}
							{qr && (
								<div className="hero-with-qr__qr-image">
									{qr === 'qr.png' ? (
										<img src={q} alt={'qr'} />
									) : qr.url && qr.alt ? (
										<img src={qr.url} alt={qr.alt} />
									) : (
										''
									)}
								</div>
							)}
							{qrBackground && (
								<div className="hero-with-qr__qr-background" style={{ background: qrBackground }}></div>
							)}
						</div>
					)}
				</div>
				{background && (
					<div className={`hero-with-qr__background${mBackground ? ' only-desktop' : ''}`}>
						{background === 'background.jpg' ? (
							<img src={back} alt={'background'} />
						) : background.url ? (
							<img src={background.url} alt={background.alt} />
						) : (
							''
						)}
					</div>
				)}
				{mBackground && (
					<div className="hero-with-qr__background only-mobile">
						{mBackground === 'background-mobile.jpg' ? (
							<img src={mBack} alt={'background'} />
						) : mBackground.url ? (
							<img src={mBackground.url} alt={mBackground.alt} />
						) : (
							''
						)}
					</div>
				)}
			</div>
		</section>
	)
}
