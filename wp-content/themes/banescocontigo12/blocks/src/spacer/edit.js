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
	const { space, mSpace } = attributes

	return (
		<div {...useBlockProps()}>
			<div className="spacer-editor">
				<Placeholder label={'Spacer'}>
					<div className="row">
						<TextControl
							label="Space"
							value={space}
							className="input"
							onChange={(value) => setAttributes({ space: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Mobile Space"
							value={mSpace}
							className="input"
							onChange={(value) => setAttributes({ mSpace: value })}
						/>
					</div>
				</Placeholder>
			</div>
		</div>
	)
}
