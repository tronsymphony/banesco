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

import icon from './assets/check.svg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, features } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			features: features.map((feature) => {
				if (feature.name === tab.name) {
					return {
						...feature,
						[attribute]: value,
					}
				}
				return feature
			}),
		})
	}

	const removeItem = (tab) => {
		setAttributes({
			features: features.filter((feature) => feature.name !== tab.name),
		})
	}

	const addItem = (name) => {
		setAttributes({
			features: [
				...features,
				{
					name: name,
					title: 'New',
					mTitle: '',
					text: '',
					mText: '',
					widths: {
						title: '280px',
						mTitle: '100%',
						text: '265px',
						mText: '100%',
					},
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
			<Placeholder label={'Features'}>
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
					<TabPanel tabs={features}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Title"
										value={tab.title}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'title', value)}
									/>
									<TextControl
										label="Mobile title (optional)"
										value={tab.mTitle}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'mTitle', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Text"
										value={tab.text}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'text', value)}
									/>
									<TextControl
										label="Mobile text (optional)"
										value={tab.mText}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'mText', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Title Width"
										value={tab.widths.title}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'widths', { ...tab.widths, title: value })}
									/>
									<TextControl
										label="Mobile Title Width"
										value={tab.widths.mTitle}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'widths', { ...tab.widths, mTitle: value })}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Text Width"
										value={tab.widths.text}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'widths', { ...tab.widths, text: value })}
									/>
									<TextControl
										label="Mobile Text Width"
										value={tab.widths.mText}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'widths', { ...tab.widths, mText: value })}
									/>
								</div>
								<div className="row">
									<BaseControl label="Image">
										<MediaUpload
											onSelect={(value) => setItemAttribute(tab, 'image', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.image.url == 'check.svg' ? (
														<img src={icon} alt={'icon'} />
													) : tab.image.url ? (
														<img src={tab.image.url} alt={tab.image.alt} />
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
											className="default-image-button"
											onClick={() => setItemAttribute(tab, 'image', { url: 'check.svg', alt: '' })}
										/>
									</BaseControl>
								</div>
								{features.length > 1 && (
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
				</div>
			</Placeholder>
		</div>
	)
}
