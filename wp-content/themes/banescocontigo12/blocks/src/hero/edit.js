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

import banner from './assets/banner.png'
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
		paddings,
		margins,
		colors,
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
		<div {...useBlockProps()}>
			<div className="hero-editor">
				<Placeholder label={'Hero'}>
					<div className="row">
						<TextControl
							label="Padding Top"
							value={paddings.top}
							className="input"
							onChange={(value) => setAttributes({ paddings: { ...paddings, top: value } })}
						/>
						<TextControl
							label="Mobile Padding Top"
							value={paddings.mTop}
							className="input"
							onChange={(value) => setAttributes({ paddings: { ...paddings, mTop: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Padding Bottom"
							value={paddings.bottom}
							className="input"
							onChange={(value) => setAttributes({ paddings: { ...paddings, bottom: value } })}
						/>
						<TextControl
							label="Mobile Padding Bottom"
							value={paddings.mBottom}
							className="input"
							onChange={(value) => setAttributes({ paddings: { ...paddings, mBottom: value } })}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Title"
							value={title}
							className="input"
							onChange={(value) => setAttributes({ title: value })}
						/>
						<TextareaControl
							label="Mobile title (optional)"
							value={mTitle}
							className="input"
							onChange={(value) => setAttributes({ mTitle: value })}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Description"
							value={description}
							className="input"
							onChange={(value) => setAttributes({ description: value })}
						/>
						<TextareaControl
							label="Mobile description (optional)"
							value={mDescription}
							className="input"
							onChange={(value) => setAttributes({ mDescription: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Title Color (optional)"
							value={colors.title}
							className="input"
							onChange={(value) => setAttributes({ colors: { ...colors, title: value } })}
						/>
						<TextControl
							label="Description Color (optional)"
							value={colors.description}
							className="input"
							onChange={(value) => setAttributes({ colors: { ...colors, description: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Title Width"
							value={widths.title}
							className="input"
							onChange={(value) => setAttributes({ widths: { ...widths, title: value } })}
						/>
						<TextControl
							label="Mobile Title Width"
							value={widths.mTitle}
							className="input"
							onChange={(value) => setAttributes({ widths: { ...widths, mTitle: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Description Width"
							value={widths.description}
							className="input"
							onChange={(value) => setAttributes({ widths: { ...widths, description: value } })}
						/>
						<TextControl
							label="Mobile Description Width"
							value={widths.mDescription}
							className="input"
							onChange={(value) => setAttributes({ widths: { ...widths, mDescription: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Button (optional)"
							value={button}
							className="input"
							onChange={(value) => setAttributes({ button: value })}
						/>
						<TextControl
							label="Target (optional)"
							value={target}
							className="input"
							onChange={(value) => setAttributes({ target: value })}
						/>
					</div>
					<div className="row">
						<CheckboxControl
							label="Outlined Button"
							checked={outlinedButton}
							onChange={(value) => setAttributes({ outlinedButton: value })}
							className="checkbox"
						/>
					</div>
					<div className="row">
						<CheckboxControl
							label="White Button"
							checked={whiteButton}
							onChange={(value) => setAttributes({ whiteButton: value })}
							className="checkbox"
						/>
					</div>
					<div className="row">
						<TextControl
							label="Title Margin"
							value={margins.title}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, title: value } })}
						/>
						<TextControl
							label="Mobile Title Margin"
							value={margins.mTitle}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mTitle: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Description Margin"
							value={margins.description}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, description: value } })}
						/>
						<TextControl
							label="Mobile Description Margin"
							value={margins.mDescription}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mDescription: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Button Margin"
							value={margins.button}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, button: value } })}
						/>
						<TextControl
							label="Mobile Button Margin"
							value={margins.mButton}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mButton: value } })}
						/>
					</div>
					<div className="row">
						<BaseControl label="Image (optional)">
							<MediaUpload
								onSelect={(value) => setAttributes({ image: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{image?.url == 'banner.png' ? (
											<img src={banner} alt={'image'} />
										) : image?.url ? (
											<img src={image.url} alt={image.alt} />
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
								onClick={() => setAttributes({ image: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ image: { url: 'banner.png', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Mobile image (optional)">
							<MediaUpload
								onSelect={(value) => setAttributes({ mImage: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{mImage?.url ? <img src={mImage.url} alt={mImage.alt} /> : 'Insert'}
									</Button>
								)}
							/>
							<Button
								icon="dismiss"
								showTooltip="true"
								label="Delete image"
								className="delete-button"
								onClick={() => setAttributes({ mImage: { url: '', alt: '' } })}
							/>
						</BaseControl>
					</div>
					<div className="row">
						<TextControl
							label="Image Width"
							value={measurements.imageWidth}
							className="input"
							onChange={(value) => setAttributes({ measurements: { ...measurements, imageWidth: value } })}
						/>
						<TextControl
							label="Mobile Image Width"
							value={measurements.mImageWidth}
							className="input"
							onChange={(value) => setAttributes({ measurements: { ...measurements, mImageWidth: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Image Height"
							value={measurements.imageHeight}
							className="input"
							onChange={(value) => setAttributes({ measurements: { ...measurements, imageHeight: value } })}
						/>
						<TextControl
							label="Mobile Image Height"
							value={measurements.mImageHeight}
							className="input"
							onChange={(value) => setAttributes({ measurements: { ...measurements, mImageHeight: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Image Transform"
							value={measurements.imageTransform}
							className="input"
							onChange={(value) =>
								setAttributes({ measurements: { ...measurements, imageTransform: value } })
							}
						/>
						<TextControl
							label="Mobile Image Transform"
							value={measurements.mImageTransform}
							className="input"
							onChange={(value) =>
								setAttributes({ measurements: { ...measurements, mImageTransform: value } })
							}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Default background"
							value={gradient}
							className="input"
							onChange={(value) => setAttributes({ gradient: value })}
						/>
					</div>
					<div className="row">
						<BaseControl label="Background (optional)">
							<MediaUpload
								onSelect={(value) => setAttributes({ background: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{background?.url == 'background.jpg' ? (
											<img src={back} alt={'background'} />
										) : background?.url ? (
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
								onClick={() => setAttributes({ background: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ background: { url: 'background.jpg', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Mobile background (optional)">
							<MediaUpload
								onSelect={(value) => setAttributes({ mBackground: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{mBackground?.url == 'background-mobile.jpg' ? (
											<img src={mBack} alt={'background'} />
										) : mBackground?.url ? (
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
								onClick={() => setAttributes({ mBackground: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ background: { url: 'background-mobile.jpg', alt: '' } })}
							/>
						</BaseControl>
					</div>
				</Placeholder>
			</div>
		</div>
	)
}
