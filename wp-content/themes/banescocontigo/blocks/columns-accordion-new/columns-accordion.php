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


    <div class="tarjetas_slider">
        <div class="swiper tarjeta_swiper">
            <div class="swiper-wrapper">
                <!-- Slides -->

                <?php

                    if( have_rows('tarjetas') ):

                        while( have_rows('tarjetas') ) : the_row();
                            ?>
                            <div class="swiper-slide" <?php if (get_sub_field('active_tarjeta')){ echo "id='activetarjeta' data-slidesindex='". get_row_index() . "'"; } ?>    data-slidecolumn="<?php echo get_sub_field('column'); ?>" data-textrow="<?php echo get_sub_field('text_row'); ?>">
                                <div class="card">
                                
                                    <h3 class="title"><?php echo get_sub_field('title'); ?></h3>
                                    <div class="content">
                                    <?php echo get_sub_field('text'); ?>
                                    </div>
                                    <div class="link">
                                    
                                        <?php $link = get_sub_field('link'); ?>
                                        <?php if(!empty($link['url'])): ?>
                                        <a href="<?php echo $link['url']; ?>">
                                        <?php echo $link['title']; ?>
                                        </a>
                                        <?php endif; ?>
                                    </div>
                                    <figure class="cardimage">
                                        <img src="<?php $img = get_sub_field('image'); echo $img; ?>" alt="">
                                    </figure>
                                </div>
                            </div>
                            <?php
                        endwhile;

                    endif;
                    ?>


            </div>
            <div class="swiper-button-prev">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 29L24.7302 18.6567C25.147 18.3181 25.147 17.6819 24.7302 17.3433L12 7" stroke="#232323"
                        stroke-width="3.38462" stroke-linecap="round" />
                </svg>

            </div>
            <div class="swiper-button-next">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 29L24.7302 18.6567C25.147 18.3181 25.147 17.6819 24.7302 17.3433L12 7" stroke="#232323"
                        stroke-width="3.38462" stroke-linecap="round" />
                </svg>

            </div>

        </div>
    </div>


    <div class="container">


                <?php
                    if( have_rows('info_blocks') ):
                        
                        
                        while( have_rows('info_blocks') ) : the_row();

                        if(get_row_index() == 1){
                            echo '<div class="info_columns active" data-infocolumn="'.get_row_index().'">';
                        } else {
                            echo '<div class="info_columns" data-infocolumn="'.get_row_index().'">';
                        }

                            if( have_rows('block') ):
                                while( have_rows('block') ) : the_row();
                                ?>
                                <div class="info_columns_item">
                                    <figure>
                                        <img src="<?php echo get_sub_field('icon'); ?>" alt="">
                                    </figure>
                                    <h2 class="info_columns_title"><?php echo get_sub_field('title'); ?></h2>
                                </div>
                            <?php
                                endwhile;
                            endif;
                        echo '</div>';
                            
                        endwhile;
                    endif;
                    ?>
        
    </div>


    <div class="container">

        <div class="tabs" style="background:<?php the_field('column_bg_color'); ?>">
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
                            <?php if(!empty($image['url'])): ?>
                            <img src="<?php echo $image['url']; ?>" alt="">
                            <?php endif; ?>
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
    item.addEventListener("click", function(item) {
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

    item.addEventListener("click", function(item) {
        item.target.classList.toggle('active')
        item.target.nextElementSibling.classList.toggle('active')

    });
});
</script>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

<script type="module">

const activetarjeta = document.getElementById('activetarjeta');
console.log(activetarjeta)
let initSlide = activetarjeta.dataset.slidesindex - 1;


const tarjeta_swiper = new Swiper(".tarjeta_swiper", {
    loop: true,
    // slidesPerView: auto,
    slidesPerView: 'auto',


    initialSlide: initSlide,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        realIndexChange: function() {
            let index = this.realIndex + 1; /* slide 1 => slides[1] */
            let current_data = this.slides[index].dataset.slidecolumn;
            let textrow = this.slides[index].dataset.textrow;

            let contentTab = document.querySelector(`[data-column="${current_data}"]`);
            let content = document.querySelector(`[data-content-col="${current_data}"]`);
            let infoColumns = document.querySelector(`[data-infocolumn="${textrow}"]`);

            const contentInfo = document.querySelectorAll('.info_columns');
            const contentInfoArray = [...contentInfo];

            contentInfoArray.forEach((item) => {
                item.classList.remove('active');
            })
            buttonsArray.forEach((item) => {
                item.classList.remove('active');
            })
            contentArray.forEach((item) => {
                item.classList.remove('active');
            })

            infoColumns.classList.add('active');
            contentTab.classList.add('active');
            content.classList.add('active');


        },
    }


});
</script>