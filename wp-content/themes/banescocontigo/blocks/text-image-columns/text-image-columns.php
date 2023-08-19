<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'text-image-columns-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block text-image-columns';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
$content = get_field('content');
$add_read_more_content = get_field('add_read_more_content');
$read_more_text = get_field('read_more_text');
$read_less_text = get_field('read_less_text');
$read_more_content = get_field('read_more_content');
$hidden_content = get_field('hidden_content');

$content = Pacific_Helper::generate_wysiwyg(array(
    'content'=> $content,
    'classes' => array('text-image-columns__content')
));

$read_more_content = Pacific_Helper::generate_wysiwyg(array(
    'content'=> $read_more_content,
    'classes' => array('text-image-columns__content read-more-content')
));

$read_more_button = Pacific_Helper::generate_paragraph(array(
	'text'  => $read_more_text,
	'class' => 'text-image-columns__readmore-button',
    // 'attributes' => array(
    //     'data-readmore' => $read_more_text,
    //     'data-readless' => $read_less_text,
    // ),
));
?>

<?php 
$block_styling = get_field('block_styling'); 
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
    <div class="<?php if( get_field('reverse_image_and_columns') ){ _e('text-image-columns-reverse'); } ?>">
        <div class="container">
            <div class="text-image-columns__inner">
                <div class="text-image-columns__image">
                    <?php if(get_field('image')): ?>
                    <img decoding="async" src="<?php $image = get_field('image'); echo $image['url']; ?>" alt="">
                    <?php endif; ?>
                </div>
                <div class="text-image-columns__text">
                    <h2 class="text-image-columns__title"><?php echo get_field('title'); ?></h2>
                    <div class="text-image-columns__content">
                        <div data-content>
                            <?php echo $content; ?>
                            <?php if ( $add_read_more_content && $read_less_text && $read_more_text && $read_more_content ) : ?>
                                <?php echo $read_more_content; ?>
                                <div 
                                    class="text-image-columns__readmore-wrapper" 
                                    data-readmore="<?php echo $read_more_text; ?>" 
                                    data-readless="<?php echo $read_less_text; ?>"
                                >
                                    <span class="text-image-columns__pluss"></span>
                                    <?php echo $read_more_button; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <div data-view-more></div>
                    </div>
                    <?php if(get_field('enable_popup')): ?>
                    <div class="text-image-columns__modal text-image-columns__modal-popup" data-target="<?= $module_name; ?>">+
                        <?php echo get_field('popup_link_text'); ?></div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<?php if(get_field('enable_popup')): ?>
<div class="text-image-columns__modal-content" data-module="<?= $module_name; ?>">
    <h2 class="text-image-columns__modal-content-title"><?php echo get_field('popup_title'); ?></h2>
    <?php echo get_field('popup_content'); ?>
    <span class="text-image-columns__modal-close">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.1159 9.22559L18.5659 3.10827C18.8483 2.83976 19.007 2.47558 19.007 2.09585C19.007 1.71611 18.8483 1.35193 18.5659 1.08342C18.2834 0.814911 17.9003 0.664062 17.5009 0.664062C17.1014 0.664062 16.7183 0.814911 16.4359 1.08342L10.0009 7.215L3.56589 1.08342C3.28343 0.814911 2.90034 0.664062 2.50089 0.664062C2.10143 0.664063 1.71834 0.814911 1.43588 1.08342C1.15343 1.35193 0.994747 1.71611 0.994747 2.09585C0.994747 2.47558 1.15343 2.83976 1.43588 3.10827L7.88589 9.22559L1.43588 15.3429C1.29529 15.4755 1.1837 15.6332 1.10755 15.8069C1.0314 15.9807 0.992188 16.1671 0.992188 16.3553C0.992188 16.5436 1.0314 16.73 1.10755 16.9037C1.1837 17.0775 1.29529 17.2352 1.43588 17.3678C1.57533 17.5014 1.74123 17.6075 1.92402 17.6799C2.10681 17.7523 2.30287 17.7895 2.50089 17.7895C2.6989 17.7895 2.89496 17.7523 3.07775 17.6799C3.26054 17.6075 3.42644 17.5014 3.56589 17.3678L10.0009 11.2362L16.4359 17.3678C16.5753 17.5014 16.7412 17.6075 16.924 17.6799C17.1068 17.7523 17.3029 17.7895 17.5009 17.7895C17.6989 17.7895 17.895 17.7523 18.0778 17.6799C18.2605 17.6075 18.4264 17.5014 18.5659 17.3678C18.7065 17.2352 18.8181 17.0775 18.8942 16.9037C18.9704 16.73 19.0096 16.5436 19.0096 16.3553C19.0096 16.1671 18.9704 15.9807 18.8942 15.8069C18.8181 15.6332 18.7065 15.4755 18.5659 15.3429L12.1159 9.22559Z"
                fill="#708090" />
        </svg>
    </span>
</div>
<div class="text-image-columns__modal-content-overlay" data-overlay="<?= $module_name; ?>"></div>
<?php endif; ?>