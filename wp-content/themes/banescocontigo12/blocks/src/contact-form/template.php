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
  <div class="contact-form" style="
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
      <div class="contact-form__inner">
        <div class="contact-form__text">
          <div class="contact-form__item">
            <?php if ($attributes['telephone']['url']) : ?>
              <div class="contact-form__item-image">
                <?php if ($attributes['telephone']['url'] == 'tel.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/tel.svg" alt="icon" />
                <?php elseif ($attributes['telephone']['url']) : ?>
                  <img src="<?= $attributes['telephone']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <div class="contact-form__item-text">
              <h3 class="contact-form__item-title"><?= $attributes['telephoneTitle'] ?></h3>
              <div class="contact-form__item-content">
                <a class="contact-form__item-line link-button only-desktop" href="<?= $attributes['telephoneItem1Link'] ?>">
                  <?= $attributes['telephoneItem1'] ?>
                </a>
                <a class="contact-form__item-line link-button only-mobile" href="<?= $attributes['telephoneItem1Link'] ?>">
                  <?= $attributes['telephoneItem1Mobile'] ?>
                </a>
                <a class="contact-form__item-line link-button" href="<?= $attributes['telephoneItem2Link'] ?>">
                  <?= $attributes['telephoneItem2'] ?>
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form__item">
            <?php if ($attributes['mail']['url']) : ?>
              <div class="contact-form__item-image">
                <?php if ($attributes['mail']['url'] == 'mail.svg') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/mail.svg" alt="icon" />
                <?php elseif ($attributes['mail']['url']) : ?>
                  <img src="<?= $attributes['mail']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <div class="contact-form__item-text">
              <h3 class="contact-form__item-title"><?= $attributes['mailTitle'] ?></h3>
              <div class="contact-form__item-content">
                <a class="contact-form__item-line link-button" href="<?= $attributes['mailItemLink'] ?>">
                  <?= $attributes['mailItem'] ?>
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form__item">
            <?php if ($attributes['whatsapp']['url']) : ?>
              <div class="contact-form__item-image">
                <?php if ($attributes['whatsapp']['url'] == 'whatsapp.png') : ?>
                  <img src="<?php the_block_url(__DIR__); ?>/assets/whatsapp.png" alt="icon" />
                <?php elseif ($attributes['whatsapp']['url']) : ?>
                  <img src="<?= $attributes['whatsapp']['url'] ?>" alt="icon" />
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <div class="contact-form__item-text">
              <h3 class="contact-form__item-title"><?= $attributes['whatsappTitle'] ?></h3>
              <div class="contact-form__item-content">
                <a class="contact-form__item-line link-button" href="<?= $attributes['whatsappItemLink'] ?>">
                  <?= $attributes['whatsappItem'] ?>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form__content">
          <div><?php echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]'); ?></div>
        </div>
      </div>
    </div>
  </div>
</section>