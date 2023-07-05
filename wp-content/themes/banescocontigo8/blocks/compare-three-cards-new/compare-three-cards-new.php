<?php

/**
 * Text With Background Image Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'compare-three-cards-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block compare-three-cards-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$cards = get_field('cards');
$checkbox_title = get_field('checkbox_title');
$block_options = get_field('block_options');
$counter = 1;


?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
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
    <div class="compare-three-cards-new__cards">
      <?php if ( $cards ) : ?>
        <?php foreach( $cards as $card ) : ?>
          <?php
            $card_title = Pacific_Helper::generate_paragraph(array(
              'text'  => get_the_title($card),
              'class' => 'compare-three-cards-new__card-title'
            )); 

            $card_description = Pacific_Helper::generate_paragraph(array(
              'text'  =>  get_the_content(null, false, $card),
              'class' => 'compare-three-cards-new__card-description'
            ));

            $page_link = get_field('pagina_de_la_tarjeta', $card);
          ?>
          <div class="compare-three-cards-new__card" data-url="<?php echo get_post($card)->post_name; ?>" data-thumbnailUrl="<?php echo get_the_post_thumbnail_url($card); ?>">
            <div class="compare-three-cards-new__card-top" >
              <?php echo get_the_post_thumbnail($card, 'card', array(
                'class' => 'compare-three-cards-new__card-image',
                'title' => esc_html( get_the_title( $card ) ),
                'alt' => esc_html( get_the_title( $card ) )
                )); ?>
              <a href="<?php echo $page_link; ?>" title="<?php echo esc_html(get_the_title($card)); ?>">
                <?php echo $card_title; ?>
              </a>
            </div>
            <div class="compare-three-cards-new__card-bottom">
              <?php echo $card_description; ?>
              <?php if ( $checkbox_title ) : ?>
                <fieldset>
                  <div class="compare-three-cards-new__checkbox-wrapper">
                    <input type="checkbox" id="compare<?php echo $counter; ?>" name="compare<?php echo $counter; ?>" class="compare-three-cards-new__checkbox">
                    <label for="compare<?php echo $counter; ?>" class="compare-three-cards-new__checkbox-label"><?php echo $checkbox_title; ?></label>
                  </div>
                </fieldset>
              <?php endif; ?>
            </div>
          </div>
          <?php $counter++; ?>
				<?php endforeach; ?>
      <?php endif; ?>
    </div>
  </div>
  <?php get_template_part( 'template-parts/cards/pop-up', null ); ?>
</section>
