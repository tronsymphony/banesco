import { useBlockProps, MediaUpload, InspectorAdvancedControls } from '@wordpress/block-editor'
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

// import SVG1 from './assets/card1.png'
// import SVG2 from './assets/card2.png'
// import SVG3 from './assets/card3.png'
// import SVG4 from './assets/card4.png'
// import SVG5 from './assets/card5.png'
// import SVG6 from './assets/card6.png'
// import SVG7 from './assets/card7.png'
// import SVG8 from './assets/card8.png'
// import SVG9 from './assets/card9.png'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, filter1, filter2, filter3 } = attributes

	// const setItemAttribute = (tab, attribute, value) => {
	// 	setAttributes({
	// 		cards: cards.map((card) => {
	// 			if (card.name === tab.name) {
	// 				return {
	// 					...card,
	// 					[attribute]: value,
	// 				}
	// 			}
	// 			return card
	// 		}),
	// 	})
	// }

	// const removeItem = (tab) => {
	// 	setAttributes({
	// 		cards: cards.filter((card) => card.name !== tab.name),
	// 	})
	// }

	// const addItem = (name) => {
	// 	setAttributes({
	// 		cards: [
	// 			...cards,
	// 			{
	// 				name: name,
	// 				title: 'New',
	// 				image: '',
	// 			},
	// 		],
	// 	})
	// }

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Cards'}>
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
						label="Filter #1"
						value={filter1}
						className="input"
						onChange={(value) => setAttributes({ filter1: value })}
					/>
				</div>
				<div className="row">
					<TextControl
						label="Filter #2"
						value={filter2}
						className="input"
						onChange={(value) => setAttributes({ filter2: value })}
					/>
				</div>
				<div className="row">
					<TextControl
						label="Filter #3"
						value={filter3}
						className="input"
						onChange={(value) => setAttributes({ filter3: value })}
					/>
				</div>
			</Placeholder>
		</div>
	)
}
