<?php

/**
 * Filter Tag Posts Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'filter-tag-posts-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block filter-tag-posts-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$title = get_field('title');
$filter_posts = get_field('filter_posts');
$block_options = get_field('block_options');

$title = Pacific_Helper::generate_paragraph(array(
  'text'  => $title,
  'class' => 'filter-tag-posts-new__title',
));

?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
style="
  --padding-top: <?php echo $block_options['padding_top']; ?>;
  --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
  --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
  --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
  --margin-top: <?php echo $block_options['margin_top']; ?>;
  --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
  --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
  --margin-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
">
  <div class="container">
    <div class="filter-tag-posts-new__filter-wrapper">
      <?php echo $title; ?>
      <?php get_template_part('template-parts/filter/filter'); ?>
      <?php if ( $filter_posts ) : ?>
        <div class="filter-tag-posts-new__post-wrapper">
          <?php foreach( $filter_posts as $post ) : ?>
            <?php
              $bold_title = Pacific_Helper::generate_paragraph(array(
                'text'  => $post['bold_title'],
                'class' => 'filter-tag-posts-new__bold-title'
              ));

              $regular_title = Pacific_Helper::generate_paragraph(array(
                'text'  => $post['regular_title'],
                'class' => 'filter-tag-posts-new__regular-title'
              ));

              $content = Pacific_Helper::generate_paragraph(array(
                'text'  => $post['content'],
                'class' => 'filter-tag-posts-new__content'
              ));
  
              $post_button = Pacific_Helper::generate_acf_link(array(
                'link' => $post['button'],
                'class' => 'filter-tag-posts-new__button ' . $post['button_options'],
                'link_attributes' => array(
                  'title' => $post['button'] ? $post['button']['title'] : null,
                  'target' => $post['button']['target'] ?? null
                )
              ));

              $postBackground = $post['background'] ? $post['background']['url'] : null; 
              $postBackgroundMob = $post['mobile_background'] ? $post['mobile_background']['url'] : null; 
              $postSize = $post['filter_post_size'] ? $post['filter_post_size'] : null;
              $post_tags = explode(',', $post['tag']);
              //'background-image: url( <?php echo $postBackground;
            ?>
            <div 
              class="filter-tag-posts-new__post <?php echo $postSize ? $postSize : null ?>" 
              style="--desktop-image: url('<?php echo $postBackground; ?>');
                    --mobile-image: url('<?php echo $postBackgroundMob; ?>');"
              data-filterValues="<?php echo $post['filter_values']; ?>" 
            >
              <div class="filter-tag-posts-new__tags">
                <?php foreach( $post_tags as $tag ) : ?>
                  <?php
                    $tag = Pacific_Helper::generate_paragraph(array(
                      'text'  => $tag,
                      'class' => 'filter-tag-posts-new__tag ' . $post['tag_color']
                    ));

                    echo $tag;
                  ?>
                <?php endforeach; ?>
              </div>
              <div class="filter-tag-posts-new__content-wrapper <?php echo $post['content_color']; ?>">
                <?php echo $bold_title; ?>
                <?php echo $regular_title; ?>
                <?php echo $content; ?>
              </div>
              <?php if ( $post['add_button'] == 'simple-link' ) : ?>
                <div class="filter-tag-posts-new__button-wrapper">
                  <?php echo $post_button; ?>
                </div>
              <?php endif; ?>

              <?php if ( $post['add_button'] == 'socials' ) : ?>
                <div class="filter-tag-posts-new__social-wrapper">
                  <?php foreach( $post['socials'] as $social ) : ?>
                    <?php
                      $social_button = Pacific_Helper::generate_acf_link(array(
                        'link' => $social['social_link'],
                        'inner_html' => false,
                        'class' => 'filter-tag-posts-new__social-link ' . $social['social_title'],
                        'link_attributes' => array(
                          'title' => $social['social_link'] ? $social['social_link']['title'] : null,
                          'target' => $social['social_link']['target'] ?? null
                        )
                      ));

                      echo $social_button;
                    ?>
                  <?php endforeach; ?>
                </div>
              <?php endif; ?>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>