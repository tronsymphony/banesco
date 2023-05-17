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
  <div class="three-cards" style="
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
    <div class="container">
      <?php if ($attributes['title']) : ?>
        <h2 class="three-cards__title"><?= $attributes['title'] ?></h2>
      <?php endif; ?>
      <?php if ($attributes['items']) : ?>
        <div class="three-cards__inner">
          <?php foreach ($attributes['items'] as $item) : ?>
            <div class="three-cards__item" data-active="<?= ($item['active']) ? "true" : "false" ?>" style="<?= ($item['active']) ? "background:".$item['gradient'] : "" ?>">
              <?php if ($item['title'] || $item['text']) : ?>
                <div class="three-cards__item-content">
                  <?php if ($item['title']) : ?>
                    <h3 class="three-cards__item-title"><?= $item['title'] ?></h3>
                  <?php endif; ?>
                  <?php if ($item['text']) : ?>
                    <div class="three-cards__item-text"><?= $item['text'] ?></div>
                  <?php endif; ?>
                  <?php if ($item['button']) : ?>
                    <div class="three-cards__item-buttons">
                      <a class="three-cards__item-button link-button" href="<?= $item['target'] ?>"><?= $item['button'] ?></a>
                    </div>
                  <?php endif; ?>
                </div>
              <?php endif; ?>
              <?php if ($item['image']['url']) : ?>
                <div class="three-cards__item-image">
                  <?php if ($item['image']['url']) : ?>
                    <?php if ($item['image']['url'] == 'image-1.png') : ?>
                      <img src="<?php the_block_url(__DIR__); ?>/assets/image-1.png" alt="image" />
                    <?php elseif ($item['image']['url'] == 'image-2.png') : ?>
                      <img src="<?php the_block_url(__DIR__); ?>/assets/image-2.png" alt="image" />
                    <?php elseif ($item['image']['url'] == 'image-3.png') : ?>
                      <img src="<?php the_block_url(__DIR__); ?>/assets/image-3.png" alt="image" />
                    <?php elseif ($item['image']['url']) : ?>
                      <img src="<?= $item['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
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