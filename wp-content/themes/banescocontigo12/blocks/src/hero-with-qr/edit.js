import { useBlockProps, MediaUpload } from '@wordpress/block-editor'
import {
	Placeholder,
	BaseControl,
	Flex,
	FlexBlock,
	TabPanel,
	TextControl,
	TextareaControl,
	SelectControl,
	CheckboxControl,
	Button,
} from '@wordpress/components'

import app from './assets/appstore.png'
import google from './assets/googleplay.png'
import q from './assets/qr.png'
import back from './assets/background.jpg'
import mBack from './assets/background-mobile.jpg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
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
		<div {...useBlockProps()}>
			<Placeholder label={'Hero With QR'}>
				<div className="row">
					<TextControl
						label="Title"
						value={title}
						className="input"
						onChange={(value) => setAttributes({ title: value })}
					/>
				</div>
				<div className="row">
					<TextareaControl
						label="Content"
						value={content}
						className="input"
						onChange={(value) => setAttributes({ content: value })}
					/>
					<TextareaControl
						label="Mobile content"
						value={mContent}
						className="input"
						onChange={(value) => setAttributes({ mContent: value })}
					/>
				</div>
				<div className="row">
					<BaseControl label="Appstore">
						<MediaUpload
							onSelect={(value) => setAttributes({ appstore: value })}
							type="image"
							render={({ open }) => (
								<Button className="button" onClick={open}>
									{appstore === 'appstore.png' ? (
										<img src={app} alt={'appstore'} />
									) : appstore && appstore.url && appstore.alt ? (
										<img src={appstore.url} alt={appstore.alt} />
									) : (
										'Insert'
									)}
								</Button>
							)}
						/>
						<Button
							icon="dismiss"
							showTooltip="true"
							label="Delete image"
							className="delete-button"
							onClick={() => setAttributes({ appstore: '' })}
						/>
						<Button
							icon="cover-image"
							showTooltip="true"
							label="Set default image"
							className="default-image-button"
							onClick={() => setAttributes({ appstore: 'appstore.png' })}
						/>
					</BaseControl>
					<BaseControl label="Mobile background">
						<MediaUpload
							onSelect={(value) => setAttributes({ googleplay: value })}
							type="image"
							render={({ open }) => (
								<Button className="button" onClick={open}>
									{googleplay === 'googleplay.png' ? (
										<img src={google} alt={'googleplay'} />
									) : googleplay && googleplay.url && googleplay.alt ? (
										<img src={googleplay.url} alt={googleplay.alt} />
									) : (
										'Insert'
									)}
								</Button>
							)}
						/>
						<Button
							icon="dismiss"
							showTooltip="true"
							label="Delete image"
							className="delete-button"
							onClick={() => setAttributes({ googleplay: '' })}
						/>
						<Button
							icon="cover-image"
							showTooltip="true"
							label="Set default image"
							className="default-image-button"
							onClick={() => setAttributes({ googleplay: 'googleplay.png' })}
						/>
					</BaseControl>
				</div>
				<div className="row">
					<TextControl
						label="App Store Link"
						value={appstoreLink}
						className="input"
						onChange={(value) => setAttributes({ appstoreLink: value })}
					/>
					<TextControl
						label="Google Play Link"
						value={googleplayLink}
						className="input"
						onChange={(value) => setAttributes({ googleplayLink: value })}
					/>
				</div>
				<div className="row">
					<TextareaControl
						label="Text"
						value={qrText}
						className="input"
						onChange={(value) => setAttributes({ qrText: value })}
					/>
					<TextareaControl
						label="Background"
						value={qrBackground}
						className="input"
						onChange={(value) => setAttributes({ qrBackground: value })}
					/>
				</div>
				<div className="row">
					<BaseControl label="QR">
						<MediaUpload
							onSelect={(value) => setAttributes({ qr: value })}
							type="image"
							render={({ open }) => (
								<Button className="button" onClick={open}>
									{qr === 'qr.png' ? (
										<img src={q} alt={'qr'} />
									) : qr && qr.url && qr.alt ? (
										<img src={qr.url} alt={qr.alt} />
									) : (
										'Insert'
									)}
								</Button>
							)}
						/>
						<Button
							icon="dismiss"
							showTooltip="true"
							label="Delete image"
							className="delete-button"
							onClick={() => setAttributes({ qr: '' })}
						/>
						<Button
							icon="cover-image"
							showTooltip="true"
							label="Set default image"
							className="default-image-button"
							onClick={() => setAttributes({ qr: 'qr.png' })}
						/>
					</BaseControl>
				</div>
				<div className="row">
					<BaseControl label="Background">
						<MediaUpload
							onSelect={(value) => setAttributes({ background: value })}
							type="image"
							render={({ open }) => (
								<Button className="button" onClick={open}>
									{background === 'background.jpg' ? (
										<img src={back} alt={'background'} />
									) : background && background.url ? (
										<img src={background.url} alt={background.alt} />
									) : (
										'Insert'
									)}
								</Button>
							)}
						/>
						<Button
							icon="dismiss"
							showTooltip="true"
							label="Delete image"
							className="delete-button"
							onClick={() => setAttributes({ background: '' })}
						/>
						<Button
							icon="cover-image"
							showTooltip="true"
							label="Set default image"
							className="default-image-button"
							onClick={() => setAttributes({ background: 'background.jpg' })}
						/>
					</BaseControl>
					<BaseControl label="Mobile background">
						<MediaUpload
							onSelect={(value) => setAttributes({ mBackground: value })}
							type="image"
							render={({ open }) => (
								<Button className="button" onClick={open}>
									{mBackground === 'background-mobile.jpg' ? (
										<img src={mBack} alt={'background'} />
									) : mBackground && mBackground.url ? (
										<img src={mBackground.url} alt={mBackground.alt} />
									) : (
										'Insert'
									)}
								</Button>
							)}
						/>
						<Button
							icon="dismiss"
							showTooltip="true"
							label="Delete image"
							className="delete-button"
							onClick={() => setAttributes({ mBackground: '' })}
						/>
						<Button
							icon="cover-image"
							showTooltip="true"
							label="Set default image"
							className="default-image-button"
							onClick={() => setAttributes({ mBackground: 'background-mobile.jpg' })}
						/>
					</BaseControl>
				</div>
			</Placeholder>
		</div>
	)
}
