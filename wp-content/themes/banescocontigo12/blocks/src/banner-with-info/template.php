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
  <div class="banner-with-info" style="
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
      <h2 class="banner-with-info__title"><?= $attributes['title'] ?></h2>
      <div class="banner-with-info__inner">
        <div class="banner-with-info__content">
          <div class="banner-with-info__content-top">
            <div class="banner-with-info__content-icon">
              <?php if ($attributes['bannerIcon']['url'] == 'icon.svg') : ?>
                <img src="<?php the_block_url(__DIR__); ?>/assets/icon.svg" alt="icon" />
              <?php elseif ($attributes['bannerIcon']['url']) : ?>
                <img src="<?= $attributes['bannerIcon']['url'] ?>" alt="icon" />
              <?php endif; ?>
            </div>
            <div class="banner-with-info__content-titles">
              <div class="banner-with-info__content-title"><?= $attributes['bannerTitle'] ?></div>
              <div class="banner-with-info__content-subtitle"><?= $attributes['bannerSubtitle'] ?></div>
            </div>
          </div>
          <div class="banner-with-info__content-body"><?= $attributes['bannerContent'] ?></div>
          <div class="banner-with-info__content-footer">
            <a class="banner-with-info__content-button primary-button" href="<?= $attributes['target'] ?>">
              <?= $attributes['button'] ?>
            </a>
          </div>
        </div>
        <?php if ($attributes['background']['url']) : ?>
          <div class="banner-with-info__background">
            <?php if ($attributes['background']['url'] == 'background.jpg') : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop': ''; ?>" src="<?php the_block_url(__DIR__); ?>/assets/background.jpg" alt="background" />
            <?php elseif ($attributes['background']['url']) : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop': ''; ?>" src="<?= $attributes['background']['url'] ?>" alt="background" />
            <?php endif; ?>
            <?php if ($attributes['mBackground']['url'] == 'background-mobile.jpg') : ?>
              <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/background-mobile.jpg" alt="background" />
            <?php elseif ($attributes['mBackground']['url']) : ?>
              <img class="only-mobile" src="<?= $attributes['mBackground']['url'] ?>" alt="background" />
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
      <?php if ($attributes['items'] && count($attributes['items']) > 1) : ?>
        <div class="banner-with-info__items">
          <?php foreach ($attributes['items'] as $item) : ?>
            <div class="banner-with-info__item">
              <div class="banner-with-info__item-image">
                <?php if ($item['image']['url'] == 'pin.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/pin.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == 'mail.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/mail.svg" alt="icon" />
                <?php elseif ($item['image']['url'] == 'tel.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/tel.svg" alt="icon" />
                <?php elseif ($item['image']['url']) : ?>
                  <img src="<?= $item['image']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
              <div class="banner-with-info__item-content">
                <h3 class="banner-with-info__item-title"><?= $item['title'] ?></h3>
                <a class="features__item-link link-button" href="<?= $item['target'] ?>"><?= $item['link'] ?></a>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>