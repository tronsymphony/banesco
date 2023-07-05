import { useBlockProps } from '@wordpress/block-editor'
import { Placeholder, TextControl, TextareaControl } from '@wordpress/components'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, colors, widths, title, description } = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Hero Pure'}>
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
				</div>
			</Placeholder>
		</div>
	)
}
