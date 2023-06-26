<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'accordion-simple-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block accordion-simple';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div class="accordion-simple">
        <div class="container">
           <h2 class="title"><?php the_field('text'); ?></h2>

           <?php 
            if( have_rows('accordion') ):
            // loop through rows (sub repeater)
                ?>
                <div class="accordions" >
                <div class="container">
                    <div class="accordions__inner">
                        <?php while( have_rows('accordion') ): the_row(); ?>
                            <div class="accordions__item">
                            <div class="accordions__item-header">
                                <h3 class="accordions__item-title"><?php the_sub_field('title'); ?></h3>
                            </div>
                            <div class="accordions__item-body">
                                <div class="accordions__item-body-inner">
                                    <div class="accordions__item-content text"><?php the_sub_field('content'); ?></div>
                                </div>
                            </div>
                            </div>
                            <?php endwhile; ?>
                    </div>
                </div>
                </div>
                <?php 
            endif; ?>

        </div>
    </div>
</section>