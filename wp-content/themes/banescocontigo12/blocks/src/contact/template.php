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
  <div class="contact" style="
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
      <h2 class="contact__title"><?= $attributes['title'] ?></h2>
      <?php if ($attributes['contacts']) : ?>
        <div class="contact__inner">
          <?php foreach ($attributes['contacts'] as $contact) : ?>
            <div class="contact__item">
              <?php if ($contact['image']['url']) : ?>
                <div class="contact__item-image">
                  <?php if ($contact['image']['url'] == 'tel.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/tel.svg" alt="icon" />
                  <?php elseif ($contact['image']['url'] == 'mail.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/mail.svg" alt="icon" />
                  <?php elseif ($contact['image']['url'] == 'marker.svg') : ?>
                    <img src="<?php the_block_url(__DIR__); ?>/assets/marker.svg" alt="icon" />
                  <?php elseif ($contact['image']['url']) : ?>
                    <img src="<?= $contact['image']['url'] ?>" alt="icon" />
                  <?php endif; ?>
                </div>
              <?php endif; ?>
              <div class="contact-form__item-text">
                <h3 class="contact-form__item-title"><?= $contact['title'] ?></h3>
                <div class="contact-form__item-content">
                  <a class="contact-form__item-line" href="<?= $contact['link'] ?>">
                    <?= $contact['description'] ?>
                  </a>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>