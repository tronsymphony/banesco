<?php

/**
 * text-banner - Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'text-banner-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block text-banner';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<?php 
$block_styling= get_field('block_styling'); 
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
      --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '20px' ?>;
      --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '20px' ?>;
      --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '20px' ?>;
      --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '20px' ?>;
      --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '20px' ?>;
      --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '20px' ?>;
      --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '20px' ?>;
      --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '20px' ?>;
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
    ">
    <div class="container">
        <?php if(get_field('main_title')):?>
        <h2 class="main_title"><?php the_field('main_title'); ?></h2>
        <?php endif; ?>
        <?php if(get_field('subtitle')):?>
        <span class="subtitle"><?php the_field('subtitle'); ?></span>
        <?php endif; ?>
        <?php if(get_field('link_1') || get_field('link_2')):?>

        <div class="btn-links">
            <?php if(get_field('link_1')): $field = get_field('link_1'); ?>
            <span class="link link1"><a href="<?php echo $field['url'];?>" class="outlined-button"><?php  echo $field['title']; ?></a></span>
            <?php endif; ?>
            <?php if(get_field('link_1')): $field = get_field('link_2'); ?>
            <span class="link link2"><a href="<?php echo $field['url'];?>" class="primary-button"><?php  echo $field['title']; ?></a></span>
            <?php endif; ?>
        </div>

        <?php endif; ?>
    </div>
</section>