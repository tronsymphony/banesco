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

import img from './assets/image.png'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, measurements, title, text, image, button, target, reverseDirection, shadow } =
		attributes

	return (
		<div {...useBlockProps()}>
			<div className="text-image-editor">
				<Placeholder label={'Text Image'}>
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
					</div>
					<div className="row">
						<TextareaControl
							label="Text"
							value={text}
							className="input"
							onChange={(value) => setAttributes({ text: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Button"
							value={button}
							className="input"
							onChange={(value) => setAttributes({ button: value })}
						/>
						<TextControl
							label="Target"
							value={target}
							className="input"
							onChange={(value) => setAttributes({ target: value })}
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
						<TextControl
							label="Image Margin"
							value={margins.image}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, image: value } })}
						/>
						<TextControl
							label="Mobile Image Margin"
							value={margins.mImage}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mImage: value } })}
						/>
					</div>
					<div className="row">
						<BaseControl label="Image">
							<MediaUpload
								onSelect={(value) => setAttributes({ image: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{image.url == 'image.png' ? (
											<img src={img} alt={'image'} />
										) : image.url ? (
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
								onClick={() => setAttributes({ image: '' })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ image: 'image.png' })}
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
						<CheckboxControl
							label="Reverse Direction"
							checked={reverseDirection}
							onChange={(value) => setAttributes({ reverseDirection: value })}
							className="checkbox"
						/>
					</div>
					<div className="row">
						<CheckboxControl
							label="Image Shadow"
							checked={shadow}
							onChange={(value) => setAttributes({ shadow: value })}
							className="checkbox"
						/>
					</div>
				</Placeholder>
			</div>
		</div>
	)
}
