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
  <div class="features" style="
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
      <?php if ($attributes['features']) : ?>
        <div class="features__inner">
          <?php foreach ($attributes['features'] as $feature) : ?>
            <div class="features__item" style="
                --widths-title: <?= ($feature['widths']['title']) ? $feature['widths']['title'] : '300px' ?>;
                --widths-title--mobile: <?= ($feature['widths']['mTitle']) ? $feature['widths']['mTitle'] : '100%' ?>;
                --widths-text: <?= ($feature['widths']['text']) ? $feature['widths']['text'] : '300px' ?>;
                --widths-text--mobile: <?= ($feature['widths']['mText']) ? $feature['widths']['mText'] : '100%' ?>;
								">
              <?php if ($feature['image']['url']) : ?>
                <div class="features__item-image">
                  <?php if ($feature['image']['url'] == 'check.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="image" />
                  <?php elseif ($feature['image']['url']) : ?>
                    <img src="<?= $feature['image']['url'] ?>" alt="image" />
                  <?php endif; ?>
                </div>
              <?php endif; ?>
              <?php if ($feature['title'] || $feature['text']) : ?>
                <div class="features__item-content">
                  <?php if ($feature['title'] || $feature['mTitle']) : ?>
                    <h3 class="features__item-title">
                      <?php if ($feature['title']) : ?>
                        <span class="<?= ($feature['mTitle']) ? 'only-desktop' : '' ?>"><?= $feature['title'] ?></span>
                      <?php endif; ?>
                      <?php if ($feature['title'] && $feature['mTitle']) : ?>
                        <span class="only-mobile"><?= $feature['mTitle'] ?></span>
                      <?php endif; ?>
                    </h3>
                  <?php endif; ?>
                  <?php if ($feature['text'] || $feature['mText']) : ?>
                    <div class="features__item-text">
                      <?php if ($feature['text']) : ?>
                        <span class="<?= ($feature['mText']) ? 'only-desktop' : '' ?>"><?= $feature['text'] ?></span>
                      <?php endif; ?>
                      <?php if ($feature['text'] && $feature['mText']) : ?>
                        <span class="only-mobile"><?= $feature['mText'] ?></span>
                      <?php endif; ?>
                    </div>
                  <?php endif; ?>
                </div>
              <?php endif; ?>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>