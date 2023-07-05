import { useBlockProps } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const { space, mSpace } = attributes

	return (
		<div {...useBlockProps.save()}>
			<div
				className="spacer"
				style={{
					'--space': space ? space : '20px',
					'--space-mobile': mSpace ? mSpace : '10px',
				}}
			></div>
		</div>
	)
}
