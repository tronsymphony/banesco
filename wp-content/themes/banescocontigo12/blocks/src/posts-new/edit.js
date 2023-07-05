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

import IMAGE1 from './assets/1.png'
import IMAGE2 from './assets/2.png'
import MIMAGE1 from './assets/m-1.png'
import MIMAGE2 from './assets/m-2.png'

/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

export default function Edit({ attributes, setAttributes }) {
	const { title, posts } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			posts: posts.map((post) => {
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

	return (
		<div {...useBlockProps()}>
			<div className="posts-new-editor">
				<Placeholder label={'Posts New'}>
					<div className="row">
						<TextControl
							label="Title"
							value={title}
							className="input"
							onChange={(value) => setAttributes({ title: value })}
						/>
					</div>
					<TabPanel tabs={posts}>
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
										label="Description"
										value={tab.description}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'description', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Button"
										value={tab.button}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'button', value)}
									/>
									<TextControl
										label="Button target"
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
													{tab.image === '1.png' ? (
														<img src={IMAGE1} alt={'IMAGE 1'} />
													) : tab.image === '2.png' ? (
														<img src={IMAGE2} alt={'IMAGE 2'} />
													) : tab.image && tab.image.url && tab.image.alt ? (
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
											onClick={() => setItemAttribute(tab, 'image', '')}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute(tab, 'image', '1.png')}
										/>
									</BaseControl>
									<BaseControl label="Mobile image">
										<MediaUpload
											onSelect={(value) => setItemAttribute(tab, 'mImage', value)}
											type="image"
											render={({ open }) => (
												<Button className="button" onClick={open}>
													{tab.mImage === 'm-1.png' ? (
														<img src={MIMAGE1} alt={'MOBILE IMAGE 1'} />
													) : tab.mImage === 'm-2.png' ? (
														<img src={MIMAGE2} alt={'MOBILE IMAGE 2'} />
													) : tab.mImage && tab.mImage.url && tab.mImage.alt ? (
														<img src={tab.mImage.url} alt={tab.mImage.alt} />
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
											onClick={() => setItemAttribute(tab, 'mImage', '')}
										/>
										<Button
											icon="cover-image"
											showTooltip="true"
											label="Set default image"
											className="default-image-button"
											onClick={() => setItemAttribute(tab, 'mImage', 'm-1.png')}
										/>
									</BaseControl>
								</div>
								<div className="row">
									<CheckboxControl
										label="Large image"
										checked={tab.big}
										onChange={(value) => setItemAttribute(tab, 'big', value)}
										className="checkbox"
									/>
								</div>
							</Placeholder>
						)}
					</TabPanel>
				</Placeholder>
			</div>
		</div>
	)
}
