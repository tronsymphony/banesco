import { useBlockProps, InspectorAdvancedControls } from '@wordpress/block-editor'
import {
	Placeholder,
	Flex,
	FlexBlock,
	TextControl,
	TextareaControl,
} from '@wordpress/components'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, title, content } = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Bordered content'}>
				<InspectorAdvancedControls>
					<div className="paddings">
						<Flex>
							<FlexBlock>
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
							</FlexBlock>
							<FlexBlock>
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
							</FlexBlock>
						</Flex>
						<Flex>
							<FlexBlock>
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
							</FlexBlock>
							<FlexBlock>
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
							</FlexBlock>
						</Flex>
					</div>
					<div className="margins">
						<Flex>
							<FlexBlock>
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
							</FlexBlock>
							<FlexBlock>
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
							</FlexBlock>
						</Flex>
						<Flex>
							<FlexBlock>
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
							</FlexBlock>
							<FlexBlock>
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
							</FlexBlock>
						</Flex>
					</div>
					<div className="background">
						<Flex>
							<FlexBlock>
								<TextControl
									label="Default background"
									value={gradient}
									className="input"
									onChange={(value) => setAttributes({ gradient: value })}
								/>
							</FlexBlock>
						</Flex>
					</div>
				</InspectorAdvancedControls>
				<div className="row">
					<TextControl
						label="Title"
						value={title.desktop}
						className="input"
						onChange={(value) => {
							const newValue = { ...title }
							newValue.desktop = value
							setAttributes({ title: newValue })
						}}
					/>
					<TextControl
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
					<TextareaControl
						label="Content"
						help="You could use all HTML tags in the content field."
						value={content.desktop}
						className="input long"
						onChange={(value) => {
							const newValue = { ...content }
							newValue.desktop = value
							setAttributes({ content: newValue })
						}}
					/>
					<TextareaControl
						label="Mobile (optional)"
						value={content.mobile}
						className="input long"
						onChange={(value) => {
							const newValue = { ...content }
							newValue.mobile = value
							setAttributes({ content: newValue })
						}}
					/>
				</div>
			</Placeholder>
		</div>
	)
}
