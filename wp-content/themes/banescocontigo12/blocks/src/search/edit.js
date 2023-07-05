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
	const { margins, title, description, placeholder } = attributes

	return (
		<div {...useBlockProps()}>
			<div className="search-editor">
				<Placeholder label={'Search'}>
					<div className="row">
						<TextControl
							label="Margin Top"
							value={margins.top}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, top: value } })}
						/>
						<TextControl
							label="Mobile Margin Top"
							value={margins.mTop}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mTop: value } })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Margin Bottom"
							value={margins.bottom}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, bottom: value } })}
						/>
						<TextControl
							label="Mobile Margin Bottom"
							value={margins.mBottom}
							className="input"
							onChange={(value) => setAttributes({ margins: { ...margins, mBottom: value } })}
						/>
					</div>
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
							label="Description"
							value={description}
							className="input"
							onChange={(value) => setAttributes({ description: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Placeholder"
							value={placeholder}
							className="input"
							onChange={(value) => setAttributes({ placeholder: value })}
						/>
					</div>
				</Placeholder>
			</div>
		</div>
	)
}
