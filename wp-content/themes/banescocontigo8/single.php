<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package banescocontigo
 */
get_header(); ?>
<?php Pacific_theme_setup::setPostViews( get_the_ID() ); ?>

<main id="primary" class="site-main main">
	
	<?php the_content(); ?>

</main><!-- #primary -->

<?php get_footer();
