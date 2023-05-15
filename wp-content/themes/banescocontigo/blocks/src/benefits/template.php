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
      --paddings-top: <?= ($attributes['paddings']['desktop']['top']) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?= ($attributes['paddings']['mobile']['top']) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?= ($attributes['paddings']['desktop']['bottom']) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?= ($attributes['paddings']['mobile']['bottom']) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?= ($attributes['margins']['desktop']['top']) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?= ($attributes['margins']['mobile']['top']) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?= ($attributes['margins']['desktop']['bottom']) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?= ($attributes['margins']['mobile']['bottom']) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?= ($attributes['gradient']) ? $attributes['gradient'] : '#fff' ?>;
    ">
    <?php if ($attributes['items']) : ?>
      <div class="benefits__inner">
        <?php foreach ($attributes['items'] as $item) : ?>
          <a class="benefits__item" href="<?= $item['target'] ?>" style="--color: <?= ($item['color']) ? $item['color'] : '#000000' ?>;">
            <?php if ($item['image']['url']) : ?>
              <div class="benefits__item-image">
                <?php if ($item['image']['url'] == '1.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/1.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '2.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/2.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '3.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/3.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '4.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/4.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '5.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/5.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '6.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/6.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '7.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/7.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '8.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/8.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '9.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/9.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == '10.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/10.svg" alt="icon" />
                <?php elseif ($item['image']['url']) : ?>
                  <img src="<?= $item['image']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <?php if ($item['title']) : ?>
              <h3 class="benefits__item-title"><?= $item['title'] ?></h3>
            <?php endif; ?>
          </a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>