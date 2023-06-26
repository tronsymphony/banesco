<?php

/**
 * form-blocks - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'form-blocks-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block form-blocks';
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
<!-- <section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" > -->

<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <div class="form-tabs" style="
      --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '0px' ?>;
      --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '0px' ?>;
      --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '0px' ?>;
      --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '0px' ?>;
      --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '0px' ?>;
      --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '0px' ?>;
      --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '0px' ?>;
      --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '0px' ?>;
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;">
        <div class="container">



            <div class="form-tabs__tabs" data-tabs>
                <!-- btns -->
                <header class="tabs_header">
                    <?php if (get_field('title')) : ?>
                    <h2 class="form-tabs__title"><?= get_field('title') ?></h2>
                    <?php endif; ?>
                </header>
                <div class="form-tabs__triggers" data-triggers>



                    <?php if( have_rows('tabs') ): ?>
                    <?php while( have_rows('tabs') ): the_row(); ?>

                    <?php if (get_sub_field('tab_title')) : ?>
                    <a class="form-tabs__trigger"
                        href="#form_tab_<?php echo get_row_index(); ?>"><?= get_sub_field('tab_title') ?></a>
                    <?php endif; ?>

                    <?php endwhile; ?>
                    <?php endif; ?>

                </div>

                <div class="form-tabs__body" data-body>

                    <?php if( have_rows('tabs') ): ?>
                    <?php while( have_rows('tabs') ): the_row(); ?>

                    <div class="form-tabs__inner" data-id="#form_tab_<?php echo get_row_index(); ?>">
                        <header class="form_header">
                            <h2 class="title"><?php echo get_sub_field('header_title'); ?></h2>
                            <p><?php echo get_sub_field('header_text'); ?></p>
                        </header>
                        <?php if( get_sub_field('form_shortcode') ): ?>
                        <div class="form_content">
                            <?php echo get_sub_field('form_shortcode'); ?>
                        </div>
                        <?php endif; ?>
                        <?php if( get_sub_field('column_content') ): ?>
                        <div class="columns">
                            <div class="column_content">
                                <?php echo get_sub_field('column_content'); ?>
                            </div>
                            <div class="column_image">
                                <img src="<?php echo get_sub_field('column_image'); ?>" alt="">
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php if( get_sub_field('points_title') ): ?>
                        <div class="points_title">
                            <h3><?php echo get_sub_field('points_title'); ?></h3>
                        </div>
                        <?php endif; ?>

                        <div class="point_columns columns_<?php echo get_sub_field('bullet_points'); ?>">

                                <div class="column">
                                    
                                <?php if( get_sub_field('small_title_1') ): ?>
                                <div class="small_title">
                                    <?php echo get_sub_field('small_title_1'); ?>
                                </div>
                                <?php endif; ?>

                            <?php if( have_rows('points') ): ?>
                                
                            <div class="points">
                                <?php while( have_rows('points') ): the_row(); ?>

                                <div class="point">
                                    <img src="<?php echo get_sub_field('icon'); ?>" alt="">
                                    <span><?php echo get_sub_field('content'); ?></span>
                                </div>

                                <?php endwhile; ?>
                            </div>
                            <?php endif; ?>

                                </div>

                                <div class="column">
                                <?php if( get_sub_field('small_title_2') ): ?>
                                <div class="small_title">
                                    <?php echo get_sub_field('small_title_2'); ?>
                                </div>
                                <?php endif; ?>
                            <?php if( have_rows('points_column_2') ): ?>

                                
                            <div class="points">
                                <?php while( have_rows('points_column_2') ): the_row(); ?>

                                <div class="point">
                                    <img src="<?php echo get_sub_field('icon'); ?>" alt="">
                                    <span><?php echo get_sub_field('content'); ?></span>
                                </div>

                                <?php endwhile; ?>
                            </div>
                            <?php endif; ?>

                                </div>
                        </div>

                        <div class="bottom_content">
                            <?php echo get_sub_field('bottom_content'); ?>
                        </div>


                    </div>

                    <?php endwhile; ?>
                    <?php endif; ?>



                </div>


            </div>
            <div class="hashtag">#ContigoEnLínea</div>
        </div>
    </div>
</section>

<script>
new class Tabs {

    constructor() {
        this.$wrapper;
        this.$triggers;
        this.$body;
        this.init();
    }

    init() {
        document.querySelectorAll('[data-tabs]').forEach((wrapper) => {
            this.$wrapper = wrapper;
            this.$triggers = [...wrapper.querySelector('[data-triggers]').children];
            this.$body = [...wrapper.querySelector('[data-body]').children];
            this.$triggers[0].classList.add('active');
            this.$body[0].classList.add('active');
            this.update();
            this.addListenerClick();
            this.addListenerHash();
        });
    }

    update(event) {
        const trigger = this.$wrapper.querySelector(`a[href="${window.location.hash}"]`);
        const content = this.$wrapper.querySelector(`[data-id="${window.location.hash}"]`);

        if (window.location.hash && trigger && content) {

            this.$triggers.forEach((trigger) => {
                trigger.classList.remove('active');
            });

            this.$body.forEach((content) => {
                content.classList.remove('active');
            });

            trigger.classList.add('active');
            content.classList.add('active');
        }

        sessionStorage.setItem("last-url", event?.oldURL);
    }

    addListenerClick() {
        this.$triggers.forEach(trigger => {
            trigger.addEventListener('click', this.changeTab.bind(this));
        });
    }

    addListenerHash() {
        window.addEventListener('hashchange', this.update.bind(this));
    }

    changeTab(event) {
        event.preventDefault();

        const trigger = event.target.closest('a[href^="#"]');
        const content = this.$wrapper.querySelector(`[data-id="${trigger.hash}"]`);

        this.$triggers.forEach(trigger => {
            trigger.classList.remove('active');
        });

        this.$body.forEach(content => {
            content.classList.remove('active');
        });

        trigger.classList.add('active');
        content.classList.add('active');

        history.replaceState(undefined, undefined, trigger.hash)
    }
};
</script>