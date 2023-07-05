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
	const { values } = attributes

	const setItemAttribute = (tab, attribute, value) => {
		setAttributes({
			values: values.map((valueL) => {
				if (valueL.name === tab.name) {
					return {
						...valueL,
						[attribute]: value,
					}
				}
				return valueL
			}),
		})
	}

	const removeItem = (tab) => {
		setAttributes({
			values: values.filter((value) => value.name !== tab.name),
		})
	}

	const addItem = (name) => {
		setAttributes({
			values: [
				...values,
				{
					name: name,
					title: 'New',
					text: '',
					number: '',
					color: '',
				},
			],
		})
	}

	return (
		<div {...useBlockProps()}>
			<div className="values-editor">
				<Placeholder label={'Values'}>
					<TabPanel tabs={values}>
						{(tab) => (
							<Placeholder className={'placeholder'}>
								<div className="row">
									<TextControl
										label="Number"
										value={tab.number}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'number', value)}
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
										label="Color"
										value={tab.color}
										className="input"
										onChange={(value) => setItemAttribute(tab, 'color', value)}
									/>
								</div>
								{values.length > 1 && (
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
				</Placeholder>
			</div>
		</div>
	)
}
