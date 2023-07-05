<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package banescocontigo
 */

$post_id = get_the_ID();
$post_categories = get_the_category($post_id);
$post_tags = get_the_tags($post_id);
gt_set_post_view();

get_header(); ?>

<main id="primary" class="site-main main">
	<article class="article">
		<div class="article__hero">
			<div class="container">
				<div class="article__hero-inner">
					<div class="article__hero-text">
						<h2 class="article__hero-title"><?php the_title(); ?></h2>
						<div class="article__hero-content">
							<div class="article__hero-date"><?php echo get_the_date(); ?> - <span>VISITAS: <?php echo gt_get_post_view(); ?></span></div>
							<div class="article__hero-categories">
								<?php foreach ($post_categories as $category) :  ?>
									<a href="/blog/category/<?php echo $category->slug; ?>" class="article__hero-category"><?php echo $category->name; ?><?php if ($category !== end($post_categories)) {
																																															echo ',';
																																														} ?></a>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php if (get_the_post_thumbnail()) : ?>
			<div class="article__image">
				<div class="container">
					<div class="article__image-inner">
						<?php the_post_thumbnail(); ?>
					</div>
				</div>
			</div>
		<?php endif; ?>
		<div class="article__body">
			<div class="container">
				<div class="article__inner">
					<div class="article__content">
						<div class="article__text">
							<?php the_content(); ?>
						</div>
						<div class="article__tags">
							<?php foreach ($post_tags as $tag) :  ?>
								<a href="/blog/tag/<?php echo $tag->slug ?>" class="article__tag"><?php echo $tag->name; ?></a>
							<?php endforeach; ?>
						</div>
						<div class="article__share">
							<span>Compartir:</span>
							<a href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>&p[title]=<?php the_title(); ?>">
								<img src="<?php echo get_theme_url() . '/assets/images/facebook.svg'; ?>" alt=""></a>
							<a href="http://twitter.com/share?text=<?php the_title(); ?>&url=<?php the_permalink(); ?>">
								<img src="<?php echo get_theme_url() . '/assets/images/twitter.svg'; ?>" alt=""></a>
							<a href="javascript:if(window.print)window.print()">
								<img src="<?php echo get_theme_url() . '/assets/images/print.svg'; ?>" alt="">
							</a>
						</div>
					</div>
					<div class="article__sidebar">
						<div class="article__search">
							<input class="article__search-entry" type="text" placeholder="¿Qué estas buscando?" />
							<button class="article__search-button" type="submit">
								<svg>
									<use xlink:href="<?php the_theme_url(); ?>/assets/images/icons/sprite.svg#search" />
								</svg>
							</button>
						</div>
						<div class="article__posts">
							<?php
							$posts = get_posts([
								'post_type'     => 'post',
								'posts_per_page'   => 3,
								'meta_key' => 'post_views_count',
								'orderby' => 'meta_value_num',
								'order' => 'DESC'
							]);
							?>

							<section class="popular-posts">
								<h2 class="popular-posts__title">Lo más popular</h2>
								<div class="popular-posts__inner">
									<?php foreach ($posts as $post) : ?>
										<a class="popular-posts__item" href="<?php the_permalink($post->ID); ?>">
											<div class="popular-posts__item-image">
												<?php the_post_thumbnail($post->ID); ?>
											</div>
											<div class="popular-posts__item-content">
												<h3 class="popular-posts__item-title">
													<?php echo get_the_title($post->ID); ?>
												</h3>
												<div class="popular-posts__item-details">
													<?php echo get_the_date(null, $post->ID); ?> - VISITAS: <?php echo gt_get_post_view(); ?>
												</div>
											</div>
										</a>
									<?php endforeach; ?>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>

	<?php include get_template_directory() . '/template-parts/sections/other-posts.php' ?>

</main><!-- #primary -->

<?php get_footer();
