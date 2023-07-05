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
  <div class="banner-image" style="
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
      <div class="banner-image__inner">
        <div class="banner-image__content">
          <h2 class="banner-image__title"><?= $attributes['title'] ?></h2>
          <div class="banner-image__description"><?= $attributes['description'] ?></div>
          <div class="banner-image__buttons">
            <a class="banner-image__button link-button" href="<?= $attributes['target'] ?>">
              <?= $attributes['button'] ?>
            </a>
            <a class="banner-image__button primary-button" href="<?= $attributes['primaryButtonTarget'] ?>">
              <?= $attributes['primaryButton'] ?>
            </a>
          </div>
        </div>
        <?php if ($attributes['background']['url']) : ?>
          <div class="banner-image__background">
            <?php if ($attributes['background']['url'] == 'background.jpg') : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?php the_block_url(__DIR__); ?>/assets/background.jpg" alt="background" />
            <?php elseif ($attributes['background']['url']) : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?= $attributes['background']['url'] ?>" alt="background" />
            <?php endif; ?>
            <?php if ($attributes['mBackground']['url'] == 'background-mobile.jpg') : ?>
              <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/background-mobile.jpg" alt="background" />
            <?php elseif ($attributes['mBackground']['url']) : ?>
              <img class="only-mobile" src="<?= $attributes['mBackground']['url'] ?>" alt="background" />
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>