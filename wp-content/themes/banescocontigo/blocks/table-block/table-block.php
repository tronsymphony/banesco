<?php

/**
 * table - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'table-block-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block table-block';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>


<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div class="table-block">
        <div class="container">
            <header>
            <?php if(get_field('title')):?>
           <h2 class="title"><?php the_field('title'); ?></h2>
           <?php endif; ?>
           <?php if(get_field('subtitle')):?>
           <span class="subtitle"><?php the_field('subtitle'); ?></span>
            <?php endif; ?>
            </header>
           <div class="table"><?php the_field('table_content'); ?></div>
        </div>
    </div>
</section>