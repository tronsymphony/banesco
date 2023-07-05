<?php

/**
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 *
 * @package banescocontigo
 */

?>

<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
  <div class="benefits" style="
      --paddings-top: <?= (isset($attributes['paddings']['desktop']['top'])) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?= (isset($attributes['paddings']['mobile']['top'])) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?= (isset($attributes['paddings']['desktop']['bottom'])) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?= (isset($attributes['paddings']['mobile']['bottom'])) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?= (isset($attributes['margins']['desktop']['top'])) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?= (isset($attributes['margins']['mobile']['top'])) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?= (isset($attributes['margins']['desktop']['bottom'])) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?= (isset($attributes['margins']['mobile']['bottom'])) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?= (isset($attributes['gradient'])) ? $attributes['gradient'] : '#fff' ?>;
    ">
    <?php if ($attributes['benefits']) : ?>
      <div class="benefits__inner">
        <?php foreach ($attributes['benefits'] as $benefit) : ?>
          <a class="benefits__item" href="<?= $benefit['target'] ?>">
            <?php if ($benefit['image']['url']) : ?>
              <div class="benefits__item-image">
                <?php if ($benefit['image']['url'] == '1.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/1.svg" alt="icon" />
                <?php elseif ($benefit['image']['url'] == '2.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/2.svg" alt="icon" />
                <?php elseif ($benefit['image']['url'] == '3.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/3.svg" alt="icon" />
                <?php elseif ($benefit['image']['url'] == '4.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/4.svg" alt="icon" />
                <?php elseif ($benefit['image']['url'] == '5.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/5.svg" alt="icon" />
                <?php elseif ($benefit['image']['url'] == '6.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/6.svg" alt="icon" />
                <?php elseif ($benefit['image']['url']) : ?>
                  <img src="<?= $benefit['image']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <h3 class="benefits__item-title"><?= $benefit['title'] ?></h3>
          </a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>