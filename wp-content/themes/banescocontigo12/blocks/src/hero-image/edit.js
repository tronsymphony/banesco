import { useBlockProps, MediaUpload } from '@wordpress/block-editor'
import { Placeholder, BaseControl, TextControl, TextareaControl, Button } from '@wordpress/components'

import IMG1 from './assets/image-1.png'
import MIMG1 from './assets/image-1-mobile.png'
import BACK1 from './assets/background-1.jpg'
import MBACK1 from './assets/background-1-mobile.jpg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, colors, widths, title, description, image, background } = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Hero Image'}>
				<div className="paddings">
					<div className="row">
						<TextControl
							label="padding top"
							value={paddings.desktop.top}
							className="input"
							onChange={(value) => {
								const newPaddings = { ...paddings }
								newPaddings.desktop.top = value
								setAttributes({ paddings: newPaddings })
							}}
						/>
						<TextControl
							label="for mobile"
							value={paddings.mobile.top}
							className="input"
							onChange={(value) => {
								const newPaddings = { ...paddings }
								newPaddings.mobile.top = value
								setAttributes({ paddings: newPaddings })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="padding bottom"
							value={paddings.desktop.bottom}
							className="input"
							onChange={(value) => {
								const newPaddings = { ...paddings }
								newPaddings.desktop.bottom = value
								setAttributes({ paddings: newPaddings })
							}}
						/>
						<TextControl
							label="for mobile"
							value={paddings.mobile.bottom}
							className="input"
							onChange={(value) => {
								const newPaddings = { ...paddings }
								newPaddings.mobile.bottom = value
								setAttributes({ paddings: newPaddings })
							}}
						/>
					</div>
				</div>
				<div className="margins">
					<div className="row">
						<TextControl
							label="margin top"
							value={margins.desktop.top}
							className="input"
							onChange={(value) => {
								const newMargins = { ...margins }
								newMargins.desktop.top = value
								setAttributes({ margins: newMargins })
							}}
						/>
						<TextControl
							label="for mobile"
							value={margins.mobile.top}
							className="input"
							onChange={(value) => {
								const newMargins = { ...margins }
								newMargins.mobile.top = value
								setAttributes({ margins: newMargins })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="margin bottom"
							value={margins.desktop.bottom}
							className="input"
							onChange={(value) => {
								const newMargins = { ...margins }
								newMargins.desktop.bottom = value
								setAttributes({ margins: newMargins })
							}}
						/>
						<TextControl
							label="for mobile"
							value={margins.mobile.bottom}
							className="input"
							onChange={(value) => {
								const newMargins = { ...margins }
								newMargins.mobile.bottom = value
								setAttributes({ margins: newMargins })
							}}
						/>
					</div>
				</div>
				<div className="background">
					<div className="row">
						<TextControl
							label="Default background"
							value={gradient}
							className="input"
							onChange={(value) => setAttributes({ gradient: value })}
						/>
					</div>
				</div>
				<div className="settings">
					<div className="row">
						<TextareaControl
							label="Title"
							value={title.desktop}
							className="input"
							onChange={(value) => {
								const newValue = { ...title }
								newValue.desktop = value
								setAttributes({ title: newValue })
							}}
						/>
						<TextareaControl
							label="Mobile (optional)"
							value={title.mobile}
							className="input"
							onChange={(value) => {
								const newValue = { ...title }
								newValue.mobile = value
								setAttributes({ title: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Color (optional)"
							value={colors.title}
							className="input"
							onChange={(value) => {
								const newValue = { ...colors }
								newValue.title = value
								setAttributes({ colors: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Max Width"
							value={widths.desktop.title}
							className="input"
							onChange={(value) => {
								const newValue = { ...widths }
								newValue.desktop.title = value
								setAttributes({ widths: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={widths.mobile.title}
							className="input"
							onChange={(value) => {
								const newValue = { ...widths }
								newValue.mobile.title = value
								setAttributes({ widths: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Margin"
							value={margins.desktop.title}
							className="input"
							onChange={(value) => {
								const newValue = { ...margins }
								newValue.desktop.title = value
								setAttributes({ margins: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={margins.mobile.title}
							className="input"
							onChange={(value) => {
								const newValue = { ...margins }
								newValue.mobile.title = value
								setAttributes({ margins: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Description"
							value={description.desktop}
							className="input"
							onChange={(value) => {
								const newValue = { ...description }
								newValue.desktop = value
								setAttributes({ description: newValue })
							}}
						/>
						<TextareaControl
							label="Mobile (optional)"
							value={description.mobile}
							className="input"
							onChange={(value) => {
								const newValue = { ...description }
								newValue.mobile = value
								setAttributes({ description: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Color (optional)"
							value={colors.description}
							className="input"
							onChange={(value) => {
								const newValue = { ...colors }
								newValue.description = value
								setAttributes({ colors: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Max Width"
							value={widths.desktop.description}
							className="input"
							onChange={(value) => {
								const newValue = { ...widths }
								newValue.desktop.description = value
								setAttributes({ widths: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={widths.mobile.description}
							className="input"
							onChange={(value) => {
								const newValue = { ...widths }
								newValue.mobile.description = value
								setAttributes({ widths: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Margin"
							value={margins.desktop.description}
							className="input"
							onChange={(value) => {
								const newValue = { ...margins }
								newValue.desktop.description = value
								setAttributes({ margins: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={margins.mobile.description}
							className="input"
							onChange={(value) => {
								const newValue = { ...margins }
								newValue.mobile.description = value
								setAttributes({ margins: newValue })
							}}
						/>
					</div>
					<div className="row">
						<BaseControl label="Image">
							<MediaUpload
								onSelect={(value) => {
									const newValue = { ...image }
									newValue.desktop = value
									setAttributes({ image: newValue })
								}}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{image.desktop.url == 'image-1.png' ? (
											<img src={IMG1} alt="image" />
										) : image.desktop.url ? (
											<img src={image.desktop.url} alt="image" />
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
								onClick={() => {
									const newValue = { ...image }
									newValue.desktop = { url: '', alt: '' }
									setAttributes({ image: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => {
									const newValue = { ...image }
									newValue.desktop = { url: 'image-1.png', alt: '' }
									setAttributes({ image: newValue })
								}}
							/>
						</BaseControl>
						<BaseControl label="Mobile (optional)">
							<MediaUpload
								onSelect={(value) => {
									const newValue = { ...image }
									newValue.mobile = value
									setAttributes({ image: newValue })
								}}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{image.mobile.url == 'image-1-mobile.png' ? (
											<img src={MIMG1} alt="image" />
										) : image.mobile.url ? (
											<img src={image.mobile.url} alt="image" />
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
								onClick={() => {
									const newValue = { ...image }
									newValue.mobile = { url: '', alt: '' }
									setAttributes({ image: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => {
									const newValue = { ...image }
									newValue.mobile = { url: 'image-1-mobile.png', alt: '' }
									setAttributes({ image: newValue })
								}}
							/>
						</BaseControl>
					</div>
					<div className="row">
						<TextControl
							label="Width"
							value={image.width.desktop}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.width.desktop = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={image.width.mobile}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.width.mobile = value
								setAttributes({ image: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Height"
							value={image.height.desktop}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.height.desktop = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={image.height.mobile}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.height.mobile = value
								setAttributes({ image: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Position Top"
							value={image.position.desktop.top}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.desktop.top = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Position Bottom"
							value={image.position.desktop.bottom}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.desktop.bottom = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Position Left"
							value={image.position.desktop.left}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.desktop.left = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Position Right"
							value={image.position.desktop.right}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.desktop.right = value
								setAttributes({ image: newValue })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Mobile"
							value={image.position.mobile.top}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.mobile.top = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Mobile"
							value={image.position.mobile.bottom}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.mobile.bottom = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Mobile"
							value={image.position.mobile.left}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.mobile.left = value
								setAttributes({ image: newValue })
							}}
						/>
						<TextControl
							label="Mobile"
							value={image.position.mobile.right}
							className="input"
							onChange={(value) => {
								const newValue = { ...image }
								newValue.position.mobile.right = value
								setAttributes({ image: newValue })
							}}
						/>
					</div>
					<div className="row">
						<BaseControl label="Background">
							<MediaUpload
								onSelect={(value) => {
									const newValue = { ...background }
									newValue.desktop = value
									setAttributes({ background: newValue })
								}}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{background.desktop.url == 'background-1.jpg' ? (
											<img src={BACK1} alt="background" />
										) : background.desktop.url ? (
											<img src={background.desktop.url} alt="background" />
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
								onClick={() => {
									const newValue = { ...background }
									newValue.desktop = { url: '', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => {
									const newValue = { ...background }
									newValue.desktop = { url: 'background-1.jpg', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
						</BaseControl>
						<BaseControl label="Mobile (optional)">
							<MediaUpload
								onSelect={(value) => {
									const newValue = { ...background }
									newValue.mobile = value
									setAttributes({ background: newValue })
								}}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{background.mobile.url == 'background-1-mobile.jpg' ? (
											<img src={MBACK1} alt="background" />
										) : background.mobile.url ? (
											<img src={background.mobile.url} alt="background" />
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
								onClick={() => {
									const newValue = { ...background }
									newValue.mobile = { url: '', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => {
									const newValue = { ...background }
									newValue.mobile = { url: 'background-1-mobile.jpg', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
						</BaseControl>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
