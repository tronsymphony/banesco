<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'navigation-tabs-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block navigation-tabs';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div class="container">

            <?php
                // Check rows existexists.
                if( have_rows('tabs') ):

                  // Loop through rows.
                  while( have_rows('tabs') ) : the_row();
                  
                      // Load sub field value.
                      $title = get_sub_field('title');
                      ?>
                        <span class="links-tab <?php if(get_row_index() == 1){echo 'links-tab-active';} ?>" data-tab-option="<?php echo get_row_index(); ?>">
                          <?php echo $title; ?>
                        </span>
                                
 
                        <?php
                  // End loop.
                  endwhile;

                  // Do something...
                endif;
                ?>

       

    </div>
</section>