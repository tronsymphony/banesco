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

import img from './assets/image.png'
import mImg from './assets/image-mobile.png'

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
		item1title,
		item1description,
		item2title,
		item2description,
		item3title,
		item3description,
		item4title,
		item4description,
		image,
		mImage,
		background
	} = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Promo Grid'}>
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
					<div className="row">
						<TextareaControl
							label="First block title"
							value={item1title}
							className="input"
							onChange={(value) => setAttributes({ item1title: value })}
						/>
						<TextareaControl
							label="First block description"
							value={item1description}
							className="input"
							onChange={(value) => setAttributes({ item1description: value })}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Second block title"
							value={item2title}
							className="input"
							onChange={(value) => setAttributes({ item2title: value })}
						/>
						<TextareaControl
							label="Second block description"
							value={item2description}
							className="input"
							onChange={(value) => setAttributes({ item2description: value })}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Third block title"
							value={item3title}
							className="input"
							onChange={(value) => setAttributes({ item3title: value })}
						/>
						<TextareaControl
							label="Third block description"
							value={item3description}
							className="input"
							onChange={(value) => setAttributes({ item3description: value })}
						/>
					</div>
					<div className="row">
						<TextareaControl
							label="Fourth block title"
							value={item4title}
							className="input"
							onChange={(value) => setAttributes({ item4title: value })}
						/>
						<TextareaControl
							label="Fourth block description"
							value={item4description}
							className="input"
							onChange={(value) => setAttributes({ item4description: value })}
						/>
					</div>
					<div className="row">
						<BaseControl label="Image">
							<MediaUpload
								onSelect={(value) => setAttributes({ image: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{image.url == 'image.png' ? (
											<img src={img} alt="image" />
										) : image.url ? (
											<img src={image.url} alt="image" />
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
								onClick={() => setAttributes({ image: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ image: { url: 'image.png', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Mobile image">
							<MediaUpload
								onSelect={(value) => setAttributes({ mImage: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{mImage.url == 'image-mobile.png' ? (
											<img src={mImg} alt="image" />
										) : mImage.url ? (
											<img src={mImage.url} alt="image" />
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
								onClick={() => setAttributes({ mImage: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ mImage: { url: 'image-mobile.png', alt: '' } })}
							/>
						</BaseControl>
					</div>
					<div className="row">
						<TextControl
							label="Inner background"
							value={background}
							className="input"
							onChange={(value) => setAttributes({ background: value })}
						/>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
