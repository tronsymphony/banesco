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
  <div class="other-cards" style="
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
      <?php if ($attributes['title']) : ?>
        <h2 class="other-cards__title"><?= $attributes['title'] ?></h2>
      <?php endif; ?>
      <?php if ($attributes['cards']) : ?>
        <div class="other-cards__inner">
          <?php foreach ($attributes['cards'] as $card) : ?>
            <div class="other-cards__item">
              <?php if ($card['image']['url']) : ?>
                <div class="other-cards__item-image">
                  <?php if ($card['image']['url'] == 'image-1.jpg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/image-1.jpg" alt="image" />
                  <?php elseif ($card['image']['url'] == 'image-2.jpg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/image-2.jpg" alt="image" />
                  <?php elseif ($card['image']['url'] == 'image-3.jpg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/image-3.jpg" alt="image" />
                  <?php elseif ($card['image']['url']) : ?>
                    <img src="<?= $card['image']['url'] ?>" alt="image" />
                  <?php endif; ?>
                </div>
              <?php endif; ?>
              <?php if ($card['title'] || $card['text']) : ?>
                <div class="other-cards__item-content">
                  <?php if ($card['title']) : ?>
                    <h3 class="other-cards__item-title"><?= $card['title'] ?></h3>
                  <?php endif; ?>
                  <?php if ($card['title']) : ?>
                    <div class="other-cards__item-text"><?= $card['text'] ?></div>
                  <?php endif; ?>
                </div>
              <?php endif; ?>
              <?php if ($card['link'] || $card['button']) : ?>
                <div class="other-cards__item-buttons">
                  <?php if ($card['link']) : ?>
                    <a href="<?= $card['linkTarget'] ?>" class="other-cards__item-button link-button">
                      <?= $card['link'] ?>
                    </a>
                  <?php endif; ?>
                  <?php if ($card['button']) : ?>
                    <a href="<?= $card['buttonTarget'] ?>" class="other-cards__item-button primary-button">
                      <?= $card['button'] ?>
                    </a>
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