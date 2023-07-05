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
  <div class="banner-with-buttons" style="
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
      <h2 class="banner-with-buttons__title"><?= $attributes['title'] ?></h2>
      <div class="banner-with-buttons__inner">
        <?php if ($attributes['items'] && count($attributes['items']) > 1) : ?>
          <div class="banner-with-buttons__items">
            <?php foreach ($attributes['items'] as $item) : ?>
              <div class="banner-with-buttons__item">
                <div class="banner-with-buttons__item-image">
                  <?php if ($item['image']['url'] == 'card.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/card.svg" alt="icon" />
                  <?php elseif ($item['image']['url'] == 'pdf.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/pdf.svg" alt="icon" />
                  <?php elseif ($item['image']['url'] == 'page.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/page.svg" alt="icon" />
                  <?php elseif ($item['image']['url']) : ?>
                    <img src="<?= $item['image']['url'] ?>" alt="icon" />
                  <?php endif; ?>
                </div>
                <div class="banner-with-buttons__item-content">
                  <h3 class="banner-with-buttons__item-title"><?= $item['title'] ?></h3>
                  <div class="banner-with-buttons__item-description"><?= $item['description'] ?></div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
      <div class="banner-with-buttons__buttons">
        <a class="banner-with-buttons__button outlined-button" href="<?= $attributes['outlinedButtonTarget'] ?>">
          <?= $attributes['outlinedButton'] ?>
        </a>
        <a class="banner-with-buttons__button primary-button" href="<?= $attributes['primaryButtonTarget'] ?>">
          <?= $attributes['primaryButton'] ?>
        </a>
      </div>
    </div>
  </div>
</section>