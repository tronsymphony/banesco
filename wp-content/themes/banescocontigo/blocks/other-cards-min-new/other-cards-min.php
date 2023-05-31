<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'other-cards-min-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block other-cards-min';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div style="">
        <div class="container">
            <?php if (get_field('title')) : ?>
            <h2 class="other-cards-min__title"><?= get_field('title') ?></h2>
            <?php endif; ?>

            <?php if( have_rows('items') ):  ?>
            <div class="other-cards-min__inner">

                <?php while( have_rows('items') ) : the_row(); ?>

                <a class="other-cards-min__item" href="<?= get_field('link') ?>">

                    <?php if (get_sub_field('title') || get_sub_field('text')) : ?>

                    <div class="other-cards-min__item-content">
                        <?php if (get_sub_field('title')) : ?>
                          <h3 class="other-cards-min__item-title"><?= get_sub_field('title') ?></h3>
                        <?php endif; ?>

                        <?php if (get_sub_field('text')) : ?>
                          <div class="other-cards-min__item-text"><?= get_sub_field('text') ?></div>
                        <?php endif; ?>

                        <?php if (get_sub_field('target_text')) : ?>
                          <div class="other-cards-min__item-target_link">
                              <?= get_sub_field('target_text') ?>
                          </div>
                        <?php endif; ?>

                    </div>
                    
                    <?php endif; ?>
                </a>
                <?php endwhile; ?>
            </div>
            <?php endif; ?>

            <?php if (get_field('extra')) : ?>
              <div class="other-cards-min__extra"><?= get_field('extra') ?></div>
            <?php endif; ?>
            
        </div>
    </div>
</section>