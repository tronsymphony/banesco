<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'columns-accordion-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block columns-accordion';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
 
        <div class="container">
            <div class="tabs">
                <div class="tabs_header">
                    <?php

                    if( have_rows('columns') ):

                        while( have_rows('columns') ) : the_row();
                            $column_title = get_sub_field('column_title');
                            ?>
                                <div class="tabs_header_item" data-column="<?php echo get_row_index(); ?>">
                                    <?php echo $column_title; ?>
                                </div>
                            <?php
                        endwhile;

                    endif;
                    ?>
                </div>
                <div class="tabs_content">
                <?php

                if( have_rows('columns') ):

                    while( have_rows('columns') ) : the_row();

                        $content = get_sub_field('content');
                        $image = get_sub_field('image');
                        $additional_content = get_sub_field('additional_content');
                        $additional_content_set = get_sub_field('additional_content_set');

                        
                        ?>
                            <div class="tabs_content_item" data-content-col="<?php echo get_row_index(); ?>">
                                <div class="tabs_content_item__image">
                                    <figure>
                                        <img src="<?php echo $image['url']; ?>" alt="">
                                    </figure>
                                </div>
                                <div class="tabs_content_item__text">
                                    <?php echo $content; ?>

                                    <?php 
                                    if($additional_content_set){
                                        
                                        ?>
                                        <div class="additional_content_trigger"><?php _e('Ver menos detalles'); ?></div>
                                        <div class="additional_content_content"><?php echo $additional_content; ?></div>
                                        <?php
                                    }
                                    ?>
                                </div>
                                
                                
                                
                            </div>
                        <?php

                    endwhile;

                endif;
                ?>
                </div>
            </div>

        </div>
</section>




<script>
    const $trigger = document.querySelectorAll('.tabs_header_item');
    const buttonsArray = [...$trigger];
    const contentDiv = document.querySelectorAll('.tabs_content_item');
    const contentArray = [...contentDiv];
    const additionalContentTrigger = document.querySelectorAll('.additional_content_trigger');
    const additionalContentTriggerArray = [...additionalContentTrigger];
    
    buttonsArray[0].classList.add('active');
    contentArray[0].classList.add('active');

    buttonsArray.forEach((item) => {
        item.addEventListener("click", function (item) {
            let contentTab = item.srcElement.dataset.column;
            let content = document.querySelector(`[data-content-col="${contentTab}"]`);
            

            buttonsArray.forEach((item) => {
                item.classList.remove('active');
            })
            contentArray.forEach((item) => {
                item.classList.remove('active');
            })

            item.srcElement.classList.add('active');
            content.classList.add('active');
            
        });
    });

    additionalContentTriggerArray.forEach((item) => {

        item.addEventListener("click", function (item) {
            item.target.classList.toggle('active')
            item.target.nextElementSibling.classList.toggle('active')
            
        });
    });
    
</script>