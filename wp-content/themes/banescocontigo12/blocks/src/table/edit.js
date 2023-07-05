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
	const { paddings, margins, gradient, items, info } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			items: items.map((item) => {
				if (item.name === tab.name) {
					return {
						...item,
						[attribute]: value,
					}
				}
				return item
			}),
		})
	}

	const removeItem = (tab) => {
		setAttributes({
			items: items.filter((item) => item.name !== tab.name),
		})
	}

	const addItem = (name) => {
		setAttributes({
			items: [
				...items,
				{
					name: name,
					title: 'New',
					html: '',
					id: '',
				},
			],
		})
	}

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Table'}>
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
				<div className="settings">
					<TabPanel tabs={items}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Button"
										value={tab.title}
										className="input"
										onChange={(value) => setFilterAttribute(tab, 'title', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="ID"
										value={tab.id}
										className="input"
										onChange={(value) => setFilterAttribute(tab, 'id', value)}
									/>
								</div>
								<div className="row">
									<TextareaControl
										label="HTML"
										value={tab.html}
										className="input long"
										onChange={(value) => setItemAttribute(tab, 'html', value)}
									/>
								</div>
								{items.length > 1 && (
									<Button variant="primary" className="primary-button" onClick={() => removeItem(tab)}>
										Remove
									</Button>
								)}
							</Placeholder>
						)}
					</TabPanel>
					<Button variant="primary" className="primary-button" onClick={() => addItem(Math.random())}>
						Add new
					</Button>
					<div className="row">
						<TextareaControl
							label="Information"
							value={info}
							className="input"
							onChange={(value) => setAttributes({ info: value })}
						/>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
