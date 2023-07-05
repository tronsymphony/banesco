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
  <div class="directors" style="
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
    <div class="container">
      <div class="directors__inner">
        <?php if ($attributes['title']) : ?>
          <h2 class="directors__title"><?= $attributes['title'] ?></h2>
        <?php endif; ?>
        <?php if ($attributes['directors']) : ?>
          <div class="directors__list">
            <?php foreach ($attributes['directors'] as $director) : ?>
              <div class="directors__item">
                <?php if ($director['image']['url']) : ?>
                  <div class="directors__item-image">
                    <?php if ($director['image']['url'] == 'avatar.png') : ?>
                      <img src="<?php the_block_url(__DIR__); ?>/assets/avatar.png" alt="avatar" />
                    <?php elseif ($director['image']['url']) : ?>
                      <img src="<?= $director['image']['url'] ?>" alt="avatar" />
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <?php if ($director['title']) : ?>
                  <h3 class="directors__item-title"><?= $director['title'] ?></h3>
                <?php endif; ?>
                <?php if ($director['text']) : ?>
                  <h4 class="directors__item-text"><?= $director['text'] ?></h4>
                <?php endif; ?>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>