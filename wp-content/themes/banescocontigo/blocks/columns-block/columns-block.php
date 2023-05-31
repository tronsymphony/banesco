<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'columns-block-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block columns-block';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<!-- <section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"> -->


<?php 
$block_styling= get_field('block_styling'); 
?>

<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <div class="columns-block <?php if(get_field('white_text')){ echo 'columns-block-white';} ?>" style="
      --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '0px' ?>;
      --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '0px' ?>;
      --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '0px' ?>;
      --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '0px' ?>;
      --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '0px' ?>;
      --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '0px' ?>;
      --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '0px' ?>;
      --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom-mobile'].'px' : '0px' ?>;
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
    ">
        <div class="container">
            <?php if (get_field('title')) : ?>
            <h2 class="columns-block__title"><?= get_field('title') ?></h2>
            <?php endif; ?>

            <div class="columns-block__inner">

                <?php if( have_rows('columns') ): ?>
                <?php while( have_rows('columns') ): the_row(); 
                    ?>


                <div class="columns-block__content">
                    <div class="columns-block__item">

                        <?php if (get_sub_field('image') || get_sub_field('mobile_image')) : ?>
                        <div class="columns-block__item-image">
                            <?php if (get_sub_field('image')) : ?>
                                <img class="<?= (get_sub_field('image')) ? 'only-desktop' : '' ?>"
                                    src="<?= get_sub_field('image') ?>" alt="image" />
                            <?php endif; ?>

                            <?php if (get_sub_field('mobile_image')) : ?>
                                <img class="<?= (get_sub_field('mobile_image')) ? 'only-mobile' : '' ?>"
                                    src="<?= get_sub_field('mobile_image') ?>" alt="mobile_image" />
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>

                        <div class="columns-block__item-content">
                            <?php if (get_sub_field('tags')) : ?>
                            <div class="columns-block__item-tags">
                                <div class="columns-block__item-tag">
                                    <?= get_sub_field('tags') ?>
                                </div>
                            </div>
                            <?php endif; ?>
                            <?php if (get_sub_field('title')) : ?>
                            <h3 class="columns-block__item-title"><?= get_sub_field('title') ?></h3>
                            <?php endif; ?>
                            <?php if (get_sub_field('description')) : ?>
                            <h4 class="columns-block__item-description"><?= get_sub_field('description') ?></h4>
                            <?php endif; ?>
                            <?php if (get_sub_field('button')) : ?>
                            <div class="columns-block__item-buttons">
                                <a class="columns-block__item-link-btn link-btn"
                                    href="<?= get_sub_field('target') ?>">
                                    <?= get_sub_field('button') ?>
                                </a>
                            </div>
                            <?php endif; ?>
                        </div>

                    </div>
                </div>

                <?php endwhile; ?>
                <?php endif; ?>





            </div>
        </div>
    </div>
</section>