import { useBlockProps } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const { title, content } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div className="text">
				<div className="container">
					<div className="text__inner">
						{title && <h2 className="text__title">{title}</h2>}
						{content && <div className="text__content" dangerouslySetInnerHTML={{ __html: content }} />}
					</div>
				</div>
			</div>
		</section>
	)
}
