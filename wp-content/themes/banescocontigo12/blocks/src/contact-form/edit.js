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

import tel from './assets/tel.svg'
import email from './assets/mail.svg'
import whats from './assets/whatsapp.png'

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
		telephoneTitle,
		telephoneItem1,
		telephoneItem1Mobile,
		telephoneItem2,
		telephoneItem1Link,
		telephoneItem2Link,
		mailTitle,
		mailItem,
		mailItemLink,
		whatsappTitle,
		whatsappItem,
		whatsappItemLink,
		telephone,
		mail,
		whatsapp,
	} = attributes

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Contact Form'}>
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
							label="Telephone title"
							value={telephoneTitle}
							className="input"
							onChange={(value) => setAttributes({ telephoneTitle: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Telephone first line"
							value={telephoneItem1}
							className="input"
							onChange={(value) => setAttributes({ telephoneItem1: value })}
						/>
						<TextControl
							label="Telephone mobile first line"
							value={telephoneItem1Mobile}
							className="input"
							onChange={(value) => setAttributes({ telephoneItem1Mobile: value })}
						/>
						<TextControl
							label="Telephone first line link"
							value={telephoneItem1Link}
							className="input"
							onChange={(value) => setAttributes({ telephoneItem1Link: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Telephone second line"
							value={telephoneItem2}
							className="input"
							onChange={(value) => setAttributes({ telephoneItem2: value })}
						/>
						<TextControl
							label="Telephone second line link"
							value={telephoneItem2Link}
							className="input"
							onChange={(value) => setAttributes({ telephoneItem2Link: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Mail title"
							value={mailTitle}
							className="input"
							onChange={(value) => setAttributes({ mailTitle: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Mail line"
							value={mailItem}
							className="input"
							onChange={(value) => setAttributes({ mailItem: value })}
						/>
						<TextControl
							label="Mail line link"
							value={mailItemLink}
							className="input"
							onChange={(value) => setAttributes({ mailItemLink: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Whatsapp title"
							value={whatsappTitle}
							className="input"
							onChange={(value) => setAttributes({ whatsappTitle: value })}
						/>
					</div>
					<div className="row">
						<TextControl
							label="Whatsapp line"
							value={whatsappItem}
							className="input"
							onChange={(value) => setAttributes({ whatsappItem: value })}
						/>
						<TextControl
							label="Whatsapp line link"
							value={whatsappItemLink}
							className="input"
							onChange={(value) => setAttributes({ whatsappItemLink: value })}
						/>
					</div>
					<div className="row">
						<BaseControl label="Telephone icon">
							<MediaUpload
								onSelect={(value) => setAttributes({ telephone: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{telephone.url == 'tel.svg' ? (
											<img src={tel} alt="icon" />
										) : telephone.url ? (
											<img src={telephone.url} alt="icon" />
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
								onClick={() => setAttributes({ telephone: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ telephone: { url: 'tel.svg', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Mail icon">
							<MediaUpload
								onSelect={(value) => setAttributes({ mail: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{mail.url == 'mail.svg' ? (
											<img src={email} alt="icon" />
										) : mail.url ? (
											<img src={mail.url} alt="icon" />
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
								onClick={() => setAttributes({ mail: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ mail: { url: 'mail.svg', alt: '' } })}
							/>
						</BaseControl>
						<BaseControl label="Whatsapp icon">
							<MediaUpload
								onSelect={(value) => setAttributes({ whatsapp: value })}
								type="image"
								render={({ open }) => (
									<Button className="button" onClick={open}>
										{whatsapp.url === 'whatsapp.png' ? (
											<img src={whats} alt="icon" />
										) : whatsapp.url ? (
											<img src={whatsapp.url} alt="icon" />
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
								onClick={() => setAttributes({ whatsapp: { url: '', alt: '' } })}
							/>
							<Button
								icon="cover-image"
								showTooltip="true"
								label="Set default image"
								className="default-image-button"
								onClick={() => setAttributes({ whatsapp: { url: 'whatsapp.png', alt: '' } })}
							/>
						</BaseControl>
					</div>
				</div>
			</Placeholder>
		</div>
	)
}
