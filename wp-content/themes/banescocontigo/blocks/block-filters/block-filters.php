<?php

/**
 * text - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'block-filters-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block block-filters';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<?php 
$block_styling= get_field('styling'); 
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" 
    style="
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

        <?php if(get_field('content')):?>
            <span class="text"><?php the_field('content'); ?></span>
        <?php endif; ?>


        <div class="block-filters-btn-group ">
            <?php
            if( have_rows('tabs') ):
                while( have_rows('tabs') ) : the_row();
                    ?><div class="block-filters-button tabs_header_item" data-column="<?php echo get_row_index(); ?>"><?php the_sub_field('tab__button_title'); ?></div><?php
                endwhile;
            endif;
            ?>
        </div>

        <div class="block-filters-content ">
            
            <?php

            if( have_rows('tabs') ):
                while( have_rows('tabs') ) : the_row();
                ?>
                    <div class="block-filters-content-block tabs_content_item" data-content-col="<?php echo get_row_index(); ?>">

                        <?php if(get_sub_field('content')): ?>
                            <div class="main_content">
                                <?php the_sub_field('content'); ?>
                            </div>
                        <?php endif; ?>

                        <?php 
                            if( have_rows('columns') ):
                                ?>
                                <div class="columns_block"><?php
                                while( have_rows('columns') ) : the_row();
                                ?>
                                    <div class="block">
                                        <?php if(get_sub_field('text')): ?>
                                            <div class="titles"><?php the_sub_field('text'); ?></div>
                                        <?php endif; ?>
                                        <?php if(get_sub_field('image')): ?>
                                            <div class="image"><img src="<?php the_sub_field('image'); ?>" alt=""></div>
                                        <?php endif; ?>
                                    </div>
                                <?php
                                    // the_sub_field('popup_content');

                                endwhile;
                                ?>
                                </div><?php
                            endif;
                            ?>

                            <?php 
                            $memberIndex = 1;
                            if( have_rows('members') ):
                                ?>
                                <div class="members_block"><?php
                                while( have_rows('members') ) : the_row();
                                ?>
                                    <div class="block">
                                        <figure><img src="<?php the_sub_field('photo'); ?>" alt=""></figure>
                                        <h3 class="name"><?php the_sub_field('name'); ?></h3>
                                        <div class="titles"><?php the_sub_field('text'); ?></div>
                                        <?php if(get_sub_field('popup_content')): ?>
                                        <div class="btn" data-target="module_<?= $memberIndex; $memberIndex++; ?>"><?php _e('Leer más'); ?></div>
                                        <?php endif; ?>
                                    </div>
                                <?php
                                    // the_sub_field('popup_content');

                                endwhile;
                                ?>
                                </div><?php
                            endif;
                            ?>
                      
                        
                        <?php
                            if( have_rows('text_blocks') ):
                                ?><div class="text_blocks"><?php
                                while( have_rows('text_blocks') ) : the_row();
                                ?>
                                    <div class="block">
                                        <h3 class="title"><?php the_sub_field('title'); ?></h3>
                                        <div class="content"><?php the_sub_field('content'); ?></div>
                                        <?php if(get_sub_field('link')): ?>
                                            <a href="<?php the_sub_field('link'); ?>" class="label-btn " ><?php _e('Leer más'); ?></a>
                                        <?php endif; ?>
                                    </div>
                                <?php
                                    // the_sub_field('link');
                                endwhile;
                                ?></div><?php
                            endif;
                            ?>
                        
                
                    </div>
                    <?php
                // End loop.
                endwhile;
            endif;
            ?>
            
        </div>

    </div>
</section>


<?php

if( have_rows('tabs') ):
    while( have_rows('tabs') ) : the_row();
    ?>

                <?php 
                if( have_rows('members') ):
                $memberIndex = 1;

                    ?>

                    

                        <?php
                        while( have_rows('members') ) : the_row();
                        ?>
                        <div class="members_block_popup" data-module="module_<?= $memberIndex; $memberIndex++; ?>">
                        <div class="popup_content__modal-close">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </div>
                            <div class="popup_content">
                                <h3 class="popup_content_title"><?php the_sub_field('text'); ?></h3>
                                <?php the_sub_field('popup_content'); ?>
                            </div>
                        </div>

                        <?php
                        endwhile;
                        ?>


                    <?php
                endif;
                ?>
          
            
                
        <?php
    // End loop.
    endwhile;
endif;
?>


<div class="modal_bg"></div>

<script>
    const $trigger = document.querySelectorAll('.tabs_header_item');
    const buttonsArray = [...$trigger];
    const contentDiv = document.querySelectorAll('.tabs_content_item');
    const contentArray = [...contentDiv];

    buttonsArray[0].classList.add('active');
    contentArray[0].classList.add('active');

    buttonsArray.forEach((item) => {
        item.addEventListener("click", function (item) {
            let contentTab = item.srcElement.dataset.column;
            let content = document.querySelector(`[data-content-col="${contentTab}"]`);
            let contentTabs = document.querySelectorAll(`[data-content-col]`);

            buttonsArray.forEach((item) => {
                item.classList.remove('active');
            })
            
            contentTabs.forEach((item) => {
                item.classList.remove('active');
            })

            item.srcElement.classList.add('active');
            content.classList.add('active');
            
        });
    });

	document.querySelectorAll('.btn').forEach(function(item) {
		item.addEventListener('click', function (e) {
			e.preventDefault()
            
            let target = item.dataset.target;
            console.log(target)
            document.querySelectorAll(`[data-module="${target}"]`).forEach(function(item) {
                item.classList.add('active-modal')
            })

			document.querySelector('.modal_bg').classList.add('active-modal')
		})
	})

	document.querySelectorAll('.popup_content__modal-close').forEach(function(item) {
		item.addEventListener('click', function (e) {
            e.preventDefault()
	
        document.querySelectorAll('.members_block_popup').forEach(element => {
            element.classList.remove('active-modal')
        });
        document.querySelector('.modal_bg').classList.remove('active-modal')

		})
	})
    
 

</script>