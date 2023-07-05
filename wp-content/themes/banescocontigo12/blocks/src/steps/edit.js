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
	const { steps } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			steps: steps.map((step) => {
				if (step.name === tab.name) {
					return {
						...step,
						[attribute]: value,
					}
				}
				return step
			}),
		})
	}

	const removeItem = (tab) => {
		setAttributes({
			steps: steps.filter((value) => value.name !== tab.name),
		})
	}

	const addItem = (name) => {
		setAttributes({
			steps: [
				...steps,
				{
					name: name,
					suptitle: '',
					title: 'New',
					text: '',
					first_link_title: '',
					first_link_value: '',
					second_link_title: '',
					second_link_value: '',
					appstore: '',
					googleplay: '',
				},
			],
		})
	}

	return (
		<div {...useBlockProps()}>
			<div className="steps-editor">
				<Placeholder label={'Steps'}>
					<TabPanel tabs={steps}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Number"
										value={tab.suptitle}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'suptitle', value)}
									/>
								</div>
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
										value={tab.text}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'text', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="First Link Title"
										value={tab.first_link_title}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'first_link_title', value)}
									/>
									<TextControl
										label="First Link Value"
										value={tab.first_link_value}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'first_link_value', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Second Link Title"
										value={tab.second_link_title}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'second_link_title', value)}
									/>
									<TextControl
										label="Second Link Value"
										value={tab.second_link_value}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'second_link_value', value)}
									/>
								</div>
								<div className="row">
									<TextControl
										label="Second Link Title"
										value={tab.appstore}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'appstore', value)}
									/>
									<TextControl
										label="Second Link Value"
										value={tab.googleplay}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'googleplay', value)}
									/>
								</div>
								{/* {values.length > 1 && (
									<Button
										variant="primary"
										className="primary-button"
										onClick={() => removeItem(tab)}
									>
										Remove
									</Button>
								)} */}
							</Placeholder>
						)}
					</TabPanel>
					{/* <Button
						variant="primary"
						className="primary-button"
						onClick={() => addItem(Math.random())}
					>
						Add new
					</Button> */}
				</Placeholder>
			</div>
		</div>
	)
}
