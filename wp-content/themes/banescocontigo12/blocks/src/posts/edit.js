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

import IMAGE1 from './assets/1.jpg'
import MIMAGE1 from './assets/m-1.jpg'
import IMAGE2 from './assets/2.jpg'
import MIMAGE2 from './assets/m-2.jpg'
import IMAGE3 from './assets/3.jpg'
import MIMAGE3 from './assets/m-3.jpg'
import IMAGE4 from './assets/4.jpg'
import MIMAGE4 from './assets/m-4.jpg'
import IMAGE5 from './assets/5.jpg'
import MIMAGE5 from './assets/m-5.jpg'
import IMAGE6 from './assets/6.jpg'
import MIMAGE6 from './assets/m-6.jpg'
import IMAGE7 from './assets/7.jpg'
import MIMAGE7 from './assets/m-7.jpg'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { paddings, margins, gradient, title, posts1, posts2 } = attributes

	const setItemAttribute1 = (tab, attribute, value) => {
		setAttributes({
			posts1: posts1.map((posts) => {
				if (posts.name === tab.name) {
					return {
						...posts,
						[attribute]: value,
					}
				}
				return posts
			}),
		})
	}

	const removeItem1 = (tab) => {
		setAttributes({
			posts1: posts1.filter((value) => value.name !== tab.name),
		})
	}

	const addItem1 = (name) => {
		setAttributes({
			posts1: [
				...posts1,
				{
					name: name,
					title: 'New',
					description: '',
					button: 'Conoce más',
					target: '/',
					primaryButton: 'Me interesa',
					primaryTarget: '/',
					image: {
						url: "",
						alt: ""
					},
					mImage: {
						url: "",
						alt: ""
					},
					whiteText: true,
					big: true,
					mHide: false,
				},
			],
		})
	}

	const setItemAttribute2 = (tab, attribute, value) => {
		setAttributes({
			posts2: posts2.map((post) => {
				if (post.name === tab.name) {
					return {
						...post,
						[attribute]: value,
					}
				}
				return post
			}),
		})
	}

	const removeItem2 = (tab) => {
		setAttributes({
			posts2: posts2.filter((value) => value.name !== tab.name),
		})
	}

	const addItem2 = (name) => {
		setAttributes({
			posts2: [
				...posts2,
				{
					name: name,
					title: 'New',
					description: '',
					button: 'Conoce más',
					target: '/',
					primaryButton: 'Me interesa',
					primaryTarget: '/',
					image: {
						url: '',
						alt: '',
					},
					mImage: {
						url: '',
						alt: '',
					},
					big: false,
				},
			],
		})
	}

	return (
		<div {...useBlockProps()}>
			<Placeholder label={'Posts'}>
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
					<TextControl
						label="Title"
						value={title}
						className="input"
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TabPanel tabs={posts1}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Title"
										value={tab.title}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'title', value)}
									/>
								</div>{' '}
								<div className="row">
									<TextareaControl
										label="Description"
										value={tab.description}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'description', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Button"
										value={tab.button}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'button', value)}
									/>
									<TextControl
										label="Button target"
										value={tab.target}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'target', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Primary button"
										value={tab.primaryButton}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'primaryButton', value)}
									/>
									<TextControl
										label="Primary button target"
										value={tab.primaryTarget}
										className="input"
										onChange={(value) => setItemAttribute1(tab, 'primaryTarget', value)}
									/>
								</div>
								<div className="row">
									<BaseControl label="Background">
										<MediaUpload
											onSelect={(value) => setItemAttribute1(tab, 'image', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.image.url === '1.jpg' ? (
														<img src={IMAGE1} alt="image" />
													) : tab.image.url === '2.jpg' ? (
														<img src={IMAGE2} alt="image" />
													) : tab.image.url === '3.jpg' ? (
														<img src={IMAGE3} alt="image" />
													) : tab.image.url === '4.jpg' ? (
														<img src={IMAGE4} alt="image" />
													) : tab.image.url === '5.jpg' ? (
														<img src={IMAGE5} alt="image" />
													) : tab.image.url === '6.jpg' ? (
														<img src={IMAGE6} alt="image" />
													) : tab.image.url === '7.jpg' ? (
														<img src={IMAGE7} alt="image" />
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
											onClick={() => setItemAttribute1(tab, 'image', {url: '', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute1(tab, 'image', {url: '1.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button second"
											onClick={() => setItemAttribute1(tab, 'image', {url: '2.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button third"
											onClick={() => setItemAttribute1(tab, 'image', {url: '3.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fourth"
											onClick={() => setItemAttribute1(tab, 'image', {url: '4.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fifth"
											onClick={() => setItemAttribute1(tab, 'image', {url: '5.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button sixth"
											onClick={() => setItemAttribute1(tab, 'image', {url: '6.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button seventh"
											onClick={() => setItemAttribute1(tab, 'image', {url: '7.jpg', alt: ''})}
										/>
									</BaseControl>
									<BaseControl label="Mobile background">
										<MediaUpload
											onSelect={(value) => setItemAttribute1(tab, 'mImage', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.mImage.url == 'm-1.jpg' ? (
														<img src={MIMAGE1} alt="image" />
													) : tab.mImage.url == 'm-2.jpg' ? (
														<img src={MIMAGE2} alt="image" />
													) : tab.mImage.url == 'm-3.jpg' ? (
														<img src={MIMAGE3} alt="image" />
													) : tab.mImage.url == 'm-4.jpg' ? (
														<img src={MIMAGE4} alt="image" />
													) : tab.mImage.url == 'm-5.jpg' ? (
														<img src={MIMAGE5} alt="image" />
													) : tab.mImage.url == 'm-6.jpg' ? (
														<img src={MIMAGE6} alt="image" />
													) : tab.mImage.url == 'm-7.jpg' ? (
														<img src={MIMAGE7} alt="image" />
													) : tab.mImage.url ? (
														<img src={tab.mImage.url} alt="image" />
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
											onClick={() => setItemAttribute1(tab, 'mImage', {url: '', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-1.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button second"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-2.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button third"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-3.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fourth"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-4.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fifth"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-5.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button sixth"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-6.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button seventh"
											onClick={() => setItemAttribute1(tab, 'mImage', {url: 'm-7.jpg', alt: ''})}
										/>
									</BaseControl>
								</div>
								<div className="row">
									<CheckboxControl
										label="Big"
										checked={tab.big}
										onChange={(value) => setItemAttribute1(tab, 'big', value)}
										className="checkbox"
									/>
								</div>
								<div className="row">
									<CheckboxControl
										label="White text"
										checked={tab.whiteText}
										onChange={(value) => setItemAttribute1(tab, 'whiteText', value)}
										className="checkbox"
									/>
								</div>
								<div className="row">
									<CheckboxControl
										label="Mobile hidden"
										checked={tab.mHide}
										onChange={(value) => setItemAttribute1(tab, 'mHide', value)}
										className="checkbox"
									/>
								</div>
								{posts1.length > 1 && (
									<Button variant="primary" className="primary-button" onClick={() => removeItem1(tab)}>
										Remove
									</Button>
								)}
							</Placeholder>
						)}
					</TabPanel>
					<Button variant="primary" className="primary-button" onClick={() => addItem1(Math.random())}>
						Add new
					</Button>
					<TabPanel tabs={posts2}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Title"
										value={tab.title}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'title', value)}
									/>
								</div>{' '}
								<div className="row">
									<TextareaControl
										label="Description"
										value={tab.description}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'description', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Button"
										value={tab.button}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'button', value)}
									/>
									<TextControl
										label="Button target"
										value={tab.target}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'target', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Primary button"
										value={tab.primaryButton}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'primaryButton', value)}
									/>
									<TextControl
										label="Primary button target"
										value={tab.primaryTarget}
										className="input"
										onChange={(value) => setItemAttribute2(tab, 'primaryTarget', value)}
									/>
								</div>
								<div className="row">
									<BaseControl label="Background">
										<MediaUpload
											onSelect={(value) => setItemAttribute2(tab, 'image', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.image.url == '1.jpg' ? (
														<img src={IMAGE1} alt="image" />
													) : tab.image.url == '2.jpg' ? (
														<img src={IMAGE2} alt="image" />
													) : tab.image.url == '3.jpg' ? (
														<img src={IMAGE3} alt="image" />
													) : tab.image.url == '4.jpg' ? (
														<img src={IMAGE4} alt="image" />
													) : tab.image.url == '5.jpg' ? (
														<img src={IMAGE5} alt="image" />
													) : tab.image.url == '6.jpg' ? (
														<img src={IMAGE6} alt="image" />
													) : tab.image.url == '7.jpg' ? (
														<img src={IMAGE7} alt="image" />
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
											onClick={() => setItemAttribute2(tab, 'image', {url: '', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute2(tab, 'image', {url: '1.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button second"
											onClick={() => setItemAttribute2(tab, 'image', {url: '2.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button third"
											onClick={() => setItemAttribute2(tab, 'image', {url: '3.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fourth"
											onClick={() => setItemAttribute2(tab, 'image', {url: '4.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fifth"
											onClick={() => setItemAttribute2(tab, 'image', {url: '5.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button sixth"
											onClick={() => setItemAttribute2(tab, 'image', {url: '6.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button seventh"
											onClick={() => setItemAttribute2(tab, 'image',  {url: '7.jpg', alt: ''})}
										/>
									</BaseControl>
									<BaseControl label="Mobile background">
										<MediaUpload
											onSelect={(value) => setItemAttribute2(tab, 'mImage', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.mImage.url == 'm-1.jpg' ? (
														<img src={MIMAGE1} alt="image" />
													) : tab.mImage.url == 'm-2.jpg' ? (
														<img src={MIMAGE2} alt="image" />
													) : tab.mImage.url == 'm-3.jpg' ? (
														<img src={MIMAGE3} alt="image" />
													) : tab.mImage.url == 'm-4.jpg' ? (
														<img src={MIMAGE4} alt="image" />
													) : tab.mImage.url == 'm-5.jpg' ? (
														<img src={MIMAGE5} alt="image" />
													) : tab.mImage.url == 'm-6.jpg' ? (
														<img src={MIMAGE6} alt="image" />
													) : tab.mImage.url == 'm-7.jpg' ? (
														<img src={MIMAGE7} alt="image" />
													) : tab.mImage.url ? (
														<img src={tab.mImage.url} alt="image" />
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
											onClick={() => setItemAttribute2(tab, 'mImage', {url: '', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute2(tab, 'mImage', {url: 'm-1.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button second"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-2.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button third"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-3.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fourth"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-4.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button fifth"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-5.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button sixth"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-6.jpg', alt: ''})}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button seventh"
											onClick={() => setItemAttribute2(tab, 'mImage',  {url: 'm-7.jpg', alt: ''})}
										/>
									</BaseControl>
								</div>
								<div className="row">
									<CheckboxControl
										label="Big"
										checked={tab.big}
										onChange={(value) => setItemAttribute2(tab, 'big', value)}
										className="checkbox"
									/>
								</div>
								<div className="row">
									<CheckboxControl
										label="White text"
										checked={tab.whiteText}
										onChange={(value) => setItemAttribute2(tab, 'whiteText', value)}
										className="checkbox"
									/>
								</div>
								<div className="row">
									<CheckboxControl
										label="Mobile hidden"
										checked={tab.mHide}
										onChange={(value) => setItemAttribute2(tab, 'mHide', value)}
										className="checkbox"
									/>
								</div>
								{posts2.length > 1 && (
									<Button variant="primary" className="primary-button" onClick={() => removeItem2(tab)}>
										Remove
									</Button>
								)}
							</Placeholder>
						)}
					</TabPanel>
					<Button variant="primary" className="primary-button" onClick={() => addItem2(Math.random())}>
						Add new
					</Button>
				</div>
			</Placeholder>
		</div>
	)
}
