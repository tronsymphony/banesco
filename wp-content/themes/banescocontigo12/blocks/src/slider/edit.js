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

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, title, slider, counter, button } = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Slider'}>
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
						<TextControl
							label="Title"
							value={title.desktop}
							className="input"
							onChange={(value) => {
								const newTitle = { ...title }
								newTitle.desktop = value
								setAttributes({ title: newTitle })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={title.mobile}
							className="input"
							onChange={(value) => {
								const newTitle = { ...title }
								newTitle.mobile = value
								setAttributes({ title: newTitle })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Slider Title"
							value={slider.title.desktop}
							className="input"
							onChange={(value) => {
								const newLink = { ...slider }
								newLink.title.desktop = value
								setAttributes({ slider: newLink })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={slider.title.mobile}
							className="input"
							onChange={(value) => {
								const newLink = { ...slider }
								newLink.title.mobile = value
								setAttributes({ slider: newLink })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Counter Title"
							value={counter.title.desktop}
							className="input"
							onChange={(value) => {
								const newLink = { ...counter }
								newLink.title.desktop = value
								setAttributes({ counter: newLink })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={counter.title.mobile}
							className="input"
							onChange={(value) => {
								const newLink = { ...counter }
								newLink.title.mobile = value
								setAttributes({ counter: newLink })
							}}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Button Title"
							value={button.title.desktop}
							className="input"
							onChange={(value) => {
								const newLink = { ...button }
								newLink.title.desktop = value
								setAttributes({ button: newLink })
							}}
						/>
						<TextControl
							label="Mobile (optional)"
							value={button.title.mobile}
							className="input"
							onChange={(value) => {
								const newLink = { ...button }
								newLink.title.mobile = value
								setAttributes({ button: newLink })
							}}
						/>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
