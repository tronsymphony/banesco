<?php

/**
 * The template for displaying all single promotions
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * 
 * @package banescocontigo
 */

$post_id = get_the_ID();
$post_categories = get_the_terms($post_id, 'categories');

get_header(); ?>

<main id="primary" class="site-main main">

  <article class="promotion">
    <div class="promotion__hero">
      <div class="container">
        <div class="promotion__hero-inner">
          <div class="promotion__hero-text">
            <h2 class="promotion__hero-title"><?php the_title(); ?></h2>
            <div class="promotion__hero-content">
              <div class="promotion__categories">
                <?php foreach ($post_categories as $category) :  ?>
                  <a href="/promociones?category=<?php echo $category->slug; ?>" class="promotion__category"><?php echo $category->name; ?></a>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php if (get_the_post_thumbnail()) : ?>
      <div class="promotion__image">
        <div class="container">
          <div class="promotion__image-inner">
            <?php the_post_thumbnail(); ?>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <div class="promotion__body">
      <div class="container">
        <!-- <h3 class="promotion__title">
          Vuelve tu tarjeta de crédito Banesco VISA Copa Mundial de la FIFA ™
          Edición limitada, que te llevará a Catar gracias a VISA.
        </h3> -->
        <div class="promotion__inner">
          <div class="promotion__content">
            <?php the_content(); ?>
          </div>
          <div class="promotion__sidebar">
            <div class="promotion__form">
              <?php echo do_shortcode('[gravityform id="2" title="false" description="false" ajax="true"]'); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  <?php include get_template_directory() . '/template-parts/sections/terms.php' ?>
  <?= do_blocks('<!-- wp:banescocontigo/attention /-->'); ?>

</main><!-- #primary -->

<?php get_footer();
