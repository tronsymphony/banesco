<?php

/**
 * The template for displaying archive promotions pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * 
 * @package banescocontigo
 */

if (isset($_GET['category'])) {
  $args = array(
    'post_type' => 'promociones',
    'posts_per_page' => -1,
    'tax_query' => array(
      array(
        'taxonomy' => 'categories',
        'field' => 'slug',
        'terms' => [trim($_GET["category"])] 
      )
    )
  );
} else {
  $args = array(
    'post_type' => 'promociones',
    'posts_per_page' => -1
  );
}

$query = new WP_Query($args);

$term_query = new WP_Term_Query(array(
  'taxonomy' => 'categories',
  'orderby'                => 'name',
  'order'                  => 'ASC',
  'child_of'               => 0,
  'parent'                 => 0,
  'fields'                 => 'all',
  'hide_empty'             => false,
));

get_header();

?>

<main id="primary" class="site-main main">
  <section class="promotions">
    <div class="promotions__hero">
      <div class="container">
        <div class="promotions__hero-inner">
          <div class="promotions__hero-text">
            <h2 class="promotions__hero-title">Promociones y descuentos</h2>
            <div class="promotions__hero-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tristique quam. Sed eget metus est. Mauris vel orci quis mi convallis lacinia in sed magna.
            </div>
          </div>
        </div>
      </div>
      <div class="promotions__hero-background">
        <img class="only-desktop" src="<?php echo get_theme_url() . '/assets/images/promotions.jpg'; ?>" alt="promotions" />
        <img class="only-mobile" src="<?php echo get_theme_url() . '/assets/images/promotions-mobile.jpg'; ?>" alt="promotions" />
      </div>
    </div>

    <div class="promotions__inner">
      <div class="container">
        <div class="promotions__filters">
          <button class="misha_button promotions__filter<?php if (!isset($_GET['category'])) : ?> active<?php endif; ?>" data-slug="all">Ver todo</button>
          <?php foreach ($term_query->terms as $term) :  ?>
            <button class="misha_button promotions__filter<?php if (isset($_GET['category']) && trim($_GET["category"]) === $term->slug) : ?> active<?php endif; ?>" data-slug="<?php echo $term->slug ?>"><?php echo $term->name ?></button>
          <?php endforeach; ?>
        </div>
        <?php if ($query->have_posts()) : ?>
          <div class="promotions__posts" id="category-post-content">
            <?php while ($query->have_posts()) : $query->the_post(); ?>
              <?php $post_id = get_the_ID();  ?>
              <?php $post_categories = get_the_terms($post_id, 'categories'); ?>
              <div class="promotions__post">
                <a class="promotions__post-image" href="<?php the_permalink(); ?>">
                  <?php the_post_thumbnail(); ?>
                </a>
                <div class="promotions__post-content">
                  <a class="promotions__post-title" href="<?php the_permalink(); ?>"><?php the_title() ?></a>
                  <a class="promotions__post-excerpt" href="<?php the_permalink(); ?>">
                    <?php the_excerpt() ?>
                  </a>
                  <div class="promotions__post-categories">
                    <?php foreach ($post_categories as $category) :  ?>
                      <a class="promotions__post-category" href="?category=<?php echo $category->slug; ?>"><?php echo $category->name; ?></a>
                    <?php endforeach; ?>
                  </div>
                </div>
              </div>
            <?php endwhile;
            wp_reset_query(); ?>
          </div>
        <?php else : ?>
          <div class="promotions__no-posts">No se han encontrado publicaciones</div>
        <?php endif; ?>
      </div>
    </div>

  </section>

  <?= do_blocks('<!-- wp:banescocontigo/attention /-->'); ?>

</main><!-- #primary -->

<script>
  jQuery(function($) {
    function cats_ajax_get(id) {
      $.ajax({
        url: '<?php echo admin_url("admin-ajax.php") ?>',
        type: 'POST',
        data: {
          "action": "promotions",
          cat: id
        },
        success: function(data) {
          jQuery("#category-post-content").html(data);
          return false;
        }
      });
    }
    $(".misha_button").click(function() {
      $(".misha_button").removeClass("active");
      $(this).addClass("active");
      cats_ajax_get($(this).data('slug'));
    });
  });
</script>

<?php get_footer();
