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

import img1 from './assets/image-1.png'
import img2 from './assets/image-2.png'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, title, cards, extra, button, buttonTarget } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			cards: cards.map((card) => {
				if (card.name === tab.name) {
					return {
						...card,
						[attribute]: value,
					}
				}
				return card
			}),
		})
	}

	const removeItem = (tab) => {
		setAttributes({
			cards: cards.filter((card) => card.name !== tab.name),
		})
	}

	const addItem = (name) => {
		setAttributes({
			cards: [
				...cards,
				{
					name: name,
					title: 'New',
					text: '',
					link: '',
					linkTarget: '',
					button: '',
					buttonTarget: '',
					image: {
						alt: '',
						url: 'check.svg',
					},
				},
			],
		})
	}

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Other Cards White'}>
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
					<div className="row">
						<TextControl
							label="Title"
							value={title}
							className="input"
							onChange={(value) => setAttributes({ title: value })}
						/>
					</div>
					<TabPanel tabs={cards}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Title"
										value={tab.title}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'title', value)}
									/>
								</div>
								<div className="row">
									<TextareaControl
										label="Text"
										value={tab.text}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'text', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Target"
										value={tab.target}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'target', value)}
									/>
								</div>
								<div className="row">
									<BaseControl label="Image">
										<MediaUpload
											onSelect={(value) => setItemAttribute(tab, 'image', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.image.url == 'image-1.png' ? (
														<img src={img1} alt="image" />
													) : tab.image.url == 'image-2.png' ? (
														<img src={img2} alt="image" />
													) : tab.image.url ? (
														<img src={tab.image.url} alt="image" />
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
											onClick={() => setItemAttribute(tab, 'image', { url: '', alt: '' })}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-butto n1n"
											onClick={() => setItemAttribute(tab, 'image', { url: 'image-1.png', alt: '' })}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button n2"
											onClick={() => setItemAttribute(tab, 'image', { url: 'image-2.png', alt: '' })}
										/>
									</BaseControl>
								</div>
								{cards.length > 1 && (
									<Button variant="primary" className="primary-button" onClick={() => removeItem(tab)}>
										Delete
									</Button>
								)}
							</Placeholder>
						)}
					</TabPanel>
					<Button variant="primary" className="primary-button" onClick={() => addItem(Math.random())}>
						Add new
					</Button>
					<div className="row">
						<TextControl
							label="Extra title"
							value={extra}
							className="input"
							onChange={(value) => setAttributes({ extra: value })}
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
							label="Button Target"
							value={buttonTarget}
							className="input"
							onChange={(value) => setAttributes({ buttonTarget: value })}
						/>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
