import { useBlockProps } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const { title, values } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="values">
				<div className="container">
					<div className="values__inner">
						<div className="values__title">{title}</div>
						<div className="values__list">
							{values.map((value) => (
								<div className="values__item" style={{ borderTopColor: value.color }}>
									<div
										className="values__item-number"
										style={{ borderColor: value.color, color: value.color }}
									>
										{value.number}
									</div>
									<div className="values__item-title">{value.title}</div>
									<div className="values__item-text">{value.text}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
