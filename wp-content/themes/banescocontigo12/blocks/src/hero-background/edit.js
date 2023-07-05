import { useBlockProps, MediaUpload } from '@wordpress/block-editor'
import { Placeholder, BaseControl, TextControl, TextareaControl, Button } from '@wordpress/components'

import BACK1 from './assets/background-1.jpg'
import MBACK1 from './assets/background-1-mobile.jpg'
import BACK2 from './assets/background-2.jpg'
import MBACK2 from './assets/background-2-mobile.jpg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, colors, widths, title, description, background } = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Hero Background'}>
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
										) : background.desktop.url == 'background-2.jpg' ? (
											<img src={BACK2} alt="background" />
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
								className="default-image-button n1"
								onClick={() => {
									const newValue = { ...background }
									newValue.desktop = { url: 'background-1.jpg', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button n2"
								onClick={() => {
									const newValue = { ...background }
									newValue.desktop = { url: 'background-2.jpg', alt: '' }
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
										) : background.mobile.url == 'background-2-mobile.jpg' ? (
											<img src={MBACK2} alt="background" />
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
								className="default-image-button n1"
								onClick={() => {
									const newValue = { ...background }
									newValue.mobile = { url: 'background-1-mobile.jpg', alt: '' }
									setAttributes({ background: newValue })
								}}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button n2"
								onClick={() => {
									const newValue = { ...background }
									newValue.mobile = { url: 'background-2-mobile.jpg', alt: '' }
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
