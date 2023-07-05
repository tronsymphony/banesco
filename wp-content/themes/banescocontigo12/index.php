<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package banescocontigo
 */

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$args = array(
	'post_type' => 'post',
	'paged' => $paged,
);

if ($paged == 1) {
	$args['posts_per_page'] = 2;
	$args['offset'] = 0;
} else if ($paged == 2) {
	$args['posts_per_page'] = 6;
	$args['offset'] = 2;
} else if ($paged == 3) {
	$args['posts_per_page'] = 6;
	$args['offset'] = 8;
} else {
	$args['posts_per_page'] = 6;
	$args['offset'] = 14;
}

if (is_category()) {
	$args = array(
		'category_name' => get_queried_object()->slug,
		'post_type' => 'post',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
	);
}

if (is_tag()) {
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
		'tax_query' => array(
			array(
				'taxonomy' => 'post_tag',
				'field' => 'slug',
				'terms' => [get_queried_object()->slug]
			)
		)
	);
}

if (is_post_type_archive('events')) {
	$args = array(
		'post_type' => 'events',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
	);
}

if (is_post_type_archive('services')) {
	$args = array(
		'post_type' => 'services',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
	);
}

if (is_post_type_archive('responsibilities')) {
	$args = array(
		'post_type' => 'responsibilities',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
	);
}

if (is_post_type_archive('library')) {
	$args = array(
		'post_type' => 'library',
		'posts_per_page' => 6,
		'paged' => get_query_var('paged'),
	);
}


$query = new WP_Query($args);

$page2 = null;

if ($query->found_posts <= 2) {
	$page2 = 1;
} else {
	$page2 = ceil((($query->found_posts - 2) / 6) + 1);
}

if (is_category()) {
	$page2 = null;
}

if (is_archive()) {
	$page2 = null;
}

if (is_tag()) {
	$page2 = null;
}


get_header();
?>

<?php if (is_home() || is_category() || is_tag() || is_archive()) : ?>
	<main id="primary" class="site-main main">
		<section class="blog">
			<div class="blog__hero">
				<div class="container">
					<div class="blog__hero-inner">
						<div class="blog__hero-text">
							<h2 class="blog__hero-title">¿Qué negocio puedo poner en mi hogar?</h2>
							<div class="blog__hero-content">
								Acondiciona un lugar en tu hogar que te ayude a mantenerte enfocado en tu negocio y, además represente un ambiente agradable para trabajar.
							</div>
							<div class="blog__hero-buttons">
								<div class="blog__hero-button">
									<a class="link-button" href="#">
										Leer más
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="blog__hero-background">
					<img src="<?php echo get_theme_url() . '/assets/images/blog.jpg'; ?>" class="only-desktop" alt="blog" />
					<img src="<?php echo get_theme_url() . '/assets/images/blog-mobile.jpg'; ?>" class="only-mobile" alt="promotions" />
				</div>
			</div>
			<div class="blog__filters">
				<div class="container">
					<div class="blog__filters-inner">
						<a class="blog__filters-item<?= (is_home() || is_category() || is_tag()) ? ' active' : '' ?>" href="/blog/">Blog</a>
						<a class="blog__filters-item<?= (is_post_type_archive('events')) ? ' active' : '' ?>" href="/blog/eventos/">Eventos</a>
						<a class="blog__filters-item<?= (is_post_type_archive('services')) ? ' active' : '' ?>" href="/blog/sroductos-y-servicios/">Productos y Servicios</a>
						<a class="blog__filters-item<?= (is_post_type_archive('responsibilities')) ? ' active' : '' ?>" href="/blog/responsabilidad-social-empresarial/">Responsabilidad Social Empresarial</a>
						<a class="blog__filters-item<?= (is_post_type_archive('library')) ? ' active' : '' ?>" href="/blog/biblioteca-digital-banesco/">Biblioteca Digital Banesco</a>
					</div>
				</div>
			</div>
			<div class="blog__body">
				<div class="container">
					<div class="blog__inner">
						<div class="blog__content">
							<?php
							if ($paged == 1 && is_home()) :
							?>
								<div class="blog__title-wrapper">
									<h3 class="blog__title">
										Lo más destacado
									</h3>
								</div>
								<?php
								$posts = get_posts([
									'post_type'     => 'post',
									'posts_per_page'   => 3,
									'meta_key' => 'post_views_count',
									'orderby' => 'meta_value_num',
									'order' => 'DESC'
								]);
								$post_categories1 = get_the_category($posts[0]);
								$post_categories2 = get_the_category($posts[1]);
								$post_categories3 = get_the_category($posts[2]);
								?>
								<div class="blog__main-post">
									<a href="<?php echo the_permalink(); ?>" class="blog__main-post-image">
										<?php echo get_the_post_thumbnail($posts[0]->ID); ?>
									</a>
									<div class="blog__main-post-inner">
										<a href="<?php echo the_permalink(); ?>" class="blog__main-post-title">
											<?php echo get_the_title($posts[0]->ID); ?>
										</a>
										<div class="blog__main-post-details">
											<div class="blog__main-post-date">
												<?php echo get_the_date(null, $posts[0]->ID); ?>
											</div>
											<div class="blog__main-post-tags">
												<?php foreach ($post_categories1 as $category) :  ?>
													<a href="/blog/category/<?php echo $category->slug; ?>" class="blog__main-post-tag"><?php echo $category->name; ?></a>
												<?php endforeach; ?>
											</div>
										</div>
										<div class="blog__main-post-content">
											<?php echo get_the_excerpt($posts[0]->ID); ?>
										</div>
										<div class="blog__main-post-buttons">
											<a class="blog__main-post-button link-button" href="<?php the_permalink($posts[0]->ID); ?>">
												Leer más
											</a>
										</div>
									</div>
								</div>
								<div class="blog__other-posts">
									<div class="blog__other-post">
										<a href="<?php echo the_permalink(); ?>" class="blog__other-post-title">
											<?php echo get_the_title(null, $posts[1]->ID); ?>
										</a>
										<div class="blog__other-post-details">
											<div class="blog__other-post-date">
												<?php echo get_the_date(null, $posts[1]->ID); ?>
											</div>
											<div class="blog__other-post-tags">
												<?php foreach ($post_categories2 as $category) :  ?>
													<a href="/blog/category/<?php echo $category->slug; ?>" class="blog__other-post-tag"><?php echo $category->name; ?></a>
												<?php endforeach; ?>
											</div>
										</div>
										<div class="blog__other-post-inner">
											<div class="blog__other-post-image">
												<?php echo get_the_post_thumbnail($posts[1]->ID); ?>
											</div>
											<div class="blog__other-post-content">
												<div class="blog__other-post-text">
													<?php echo get_the_excerpt($posts[1]->ID); ?>
												</div>
												<div class="blog__other-post-buttons">
													<a class="blog__other-post-button link-button" href="<?php the_permalink($posts[1]->ID); ?>">
														Leer más
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="blog__other-post">
										<a href="<?php echo the_permalink(); ?>" class="blog__other-post-title">
											<?php echo get_the_title(null, $posts[2]->ID); ?>
										</a>
										<div class="blog__other-post-details">
											<div class="blog__other-post-date">
												<?php echo get_the_date(null, $posts[2]->ID); ?>
											</div>
											<div class="blog__other-post-tags">
												<?php foreach ($post_categories3 as $category) :  ?>
													<a href="/blog/category/<?php echo $category->slug; ?>" class="blog__other-post-tag"><?php echo $category->name; ?></a>
												<?php endforeach; ?>
											</div>
										</div>
										<div class="blog__other-post-inner">
											<div class="blog__other-post-image">
												<?php echo get_the_post_thumbnail($posts[2]->ID); ?>
											</div>
											<div class="blog__other-post-content">
												<div class="blog__other-post-text">
													<?php echo get_the_excerpt($posts[2]->ID); ?>
												</div>
												<div class="blog__other-post-buttons">
													<a class="blog__other-post-button link-button" href="<?php the_permalink($posts[2]->ID); ?>">
														Leer más
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							<?php endif; ?>
							<?php if ($query->have_posts()) : ?>
								<div class="blog__title-wrapper">
									<h3 class="blog__title">
										Lo último
									</h3>
								</div>

								<div class="blog__posts">
									<?php while ($query->have_posts()) : $query->the_post();								?>
										<div class="blog__post">
											<a href="<?php echo the_permalink(); ?>" class="blog__post-image">
												<?php echo get_the_post_thumbnail(); ?>
											</a>
											<div class="blog__post-inner">
												<div class="blog__post-details">
													<div class="blog__post-date">
														<?php echo get_the_date(); ?> - VISITAS: <?php echo gt_get_post_view(); ?>
													</div>
												</div>
												<a href="<?php echo the_permalink(); ?>" class="blog__post-title">
													<?php echo get_the_title(); ?>
												</a>
												<div class="blog__post-content">
													<?php echo get_the_excerpt(); ?>
												</div>
											</div>
										</div>
									<?php endwhile; ?>
									<?php wp_reset_postdata(); ?>
								</div>
							<?php endif; ?>
							<div class="blog__pagination">
								<?php custom_pagination($query, $page2) ?>
							</div>
						</div>
						<div class="blog__sidebar">
							<div class="blog__search">
								<div class="article__search">
									<input class="article__search-entry" type="text" placeholder="¿Qué estas buscando?" />
									<button class="article__search-button" type="submit">
										<svg>
											<use xlink:href="<?php the_theme_url(); ?>/assets/images/icons/sprite.svg#search" />
										</svg>
									</button>
								</div>
								<?php
								if ($paged == 1 && is_home()) :
								?>
									<div class="blog__categories">
										<div class="blog__categories-title">
											Categorías
										</div>
										<div class="blog__categories-list">
											<ul>
												<?php $categories = get_categories(array(
													'orderby' => 'name',
													'order'   => 'ASC'
												));
												foreach ($categories as $category) : ?>
													<li><a class="<?php if (get_queried_object()->slug === $category->slug) : ?> active<?php endif; ?>" href="/blog/category/<?php echo $category->slug; ?>"><?php echo $category->name ?></a></li>
												<?php endforeach; ?>
											</ul>
										</div>
									</div>
								<?php endif; ?>
							</div>
							<div class="blog__instagram">
								<a href="https://www.instagram.com/" class="blog__instagram-top">
									<div class="blog__instagram-title">
										Banesco República Dominicana <img src="<?php echo get_theme_url() . '/assets/images/instagram-icon.png'; ?>" alt="" />
									</div>
									<div class="blog__instagram-top-image">
										<img src="<?php echo get_theme_url() . '/assets/images/instagram.png'; ?>" alt="" />
									</div>
								</a>
								<div class="blog__instagram-date">
									2 Sep 2022
								</div>
								<div class="blog__instagram-image">
									<?php echo do_shortcode('[instagram-feed feed=1]'); ?>
								</div>
								<div class="blog__instagram-text">
									Renueva tu hogar antes de que termine el año. 🏠✨ Aprovecha un 15% de devolución en consumos con tu Tarjeta de Crédito Banesco en establecimientos de decoración como: pintura - cerámica... <a href="https://www.instagram.com/">leer más.</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?= do_blocks('<!-- wp:banescocontigo/videos /-->'); ?>

	</main><!-- #primary -->

<?php else : ?>

	<main id="primary" class="site-main main">

		<?php the_content() ?>

	</main><!-- #primary -->

<?php endif; ?>

<?php get_footer();
