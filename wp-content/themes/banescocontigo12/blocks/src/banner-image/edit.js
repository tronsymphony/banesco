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

import img from './assets/background.jpg'
import mImg from './assets/background-mobile.jpg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const {
		paddings,
		margins,
		gradient,
		title,
		description,
		button,
		target,
		primaryButton,
		primaryButtonTarget,
		background,
		mBackground
	} = attributes


	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Banner Image'}>
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
					<Flex>
						<FlexBlock>
							<TextControl
								label="Title"
								value={title}
								className="input"
								onChange={(value) => setAttributes({ title: value })}
							/>
						</FlexBlock>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextareaControl
								label="Description"
								value={description}
								className="input"
								onChange={(value) => setAttributes({ description: value })}
							/>
						</FlexBlock>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextControl
								label="Button"
								value={button}
								className="input"
								onChange={(value) => setAttributes({ button: value })}
							/>
						</FlexBlock>
						<FlexBlock>
							<TextControl
								label="Button Target"
								value={target}
								className="input"
								onChange={(value) => setAttributes({ target: value })}
							/>
						</FlexBlock>
					</Flex>
					<Flex>
						<FlexBlock>
							<TextControl
								label="Primary Button"
								value={primaryButton}
								className="input"
								onChange={(value) => setAttributes({ primaryButton: value })}
							/>
						</FlexBlock>
						<FlexBlock>
							<TextControl
								label="Primary Button Target"
								value={primaryButtonTarget}
								className="input"
								onChange={(value) => setAttributes({ primaryButtonTarget: value })}
							/>
						</FlexBlock>
					</Flex>
					<div className="row">
						<BaseControl label="Background">
							<MediaUpload
								onSelect={(value) => setAttributes({ background: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{background.url == 'background.jpg' ? (
											<img src={img} alt={'background'} />
										) : background.url ? (
											<img src={background.url} alt={background.alt} />
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
								onClick={() => setAttributes({ background: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ background: { url: 'background.jpg', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Mobile Background">
							<MediaUpload
								onSelect={(value) => setAttributes({ mBackground: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{mBackground.url == 'background-mobile.jpg' ? (
											<img src={mImg} alt={'background'} />
										) : mBackground.url ? (
											<img src={mBackground.url} alt={mBackground.alt} />
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
								onClick={() => setAttributes({ mBackground: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ mBackground: { url: 'background-mobile.jpg', alt: '' } })}
							/>
						</BaseControl>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
