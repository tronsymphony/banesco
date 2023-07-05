import { useBlockProps } from '@wordpress/block-editor'

import icon from './assets/icon.svg'

export default function save({ attributes }) {
	const { margins, title, description, placeholder } = attributes

	return (
		<section {...useBlockProps.save()}>
			<div
				className="search"
				style={{
					'--margins-top': margins.top ? margins.top : '0px',
					'--margins-bottom': margins.bottom ? margins.bottom : '0px',
					'--margins-top-mobile': margins.mTop ? margins.mTop : '0px',
					'--margins-bottom-mobile': margins.mBottom ? margins.mBottom : '0px',
				}}
			>
				<div className="container">
					<div className="search__inner">
						<div className="search__content">
							{title && <h2 className="search__title">{title}</h2>}
							{description && <h3 className="search__description">{description}</h3>}
						</div>
						<div className="search__input">
							<div class="search-input search-input--only-button-right active" data-id="block-search">
								<form class="search-input__form" action="#">
									<input type="text" class="search-input__entry" placeholder={placeholder} />
									<button class="search-input__button" type="submit">
										<img src={icon} alt="search" />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
