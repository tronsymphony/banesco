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
  <div class="attention" style="
      --paddings-top: <?= (isset($attributes['paddings']['desktop']['top'])) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?= (isset($attributes['paddings']['mobile']['top'])) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?= (isset($attributes['paddings']['desktop']['bottom'])) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?= (isset($attributes['paddings']['mobile']['bottom'])) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?= (isset($attributes['margins']['desktop']['top'])) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?= (isset($attributes['margins']['mobile']['top'])) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?= (isset($attributes['margins']['desktop']['bottom'])) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?= (isset($attributes['margins']['mobile']['bottom'])) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?= (isset($attributes['gradient'])) ? $attributes['gradient'] : '#fff' ?>;
    " data-open-chat="<?= ($attributes['openChat']) ? "true" : 'false' ?>">
    <div class="container">
      <div class="attention__inner">
        <div class="attention__content">
          <?php if ($attributes['icon']['url']) : ?>
            <div class="attention__icon">
              <?php if ($attributes['icon']['url'] == 'icon.svg') : ?>
                <img src="<?php the_block_url(__DIR__); ?>/assets/icon.svg" alt="icon" />
              <?php elseif ($attributes['icon']['url']) : ?>
                <img src="<?= $attributes['icon']['url'] ?>" alt="icon" />
              <?php endif; ?>
            </div>
          <?php endif; ?>
          <h2 class="attention__title"><?= $attributes['title'] ?></h2>
          <h3 class="attention__description"><?= $attributes['description'] ?></h3>
          <div class="attention__buttons">
            <a class="attention__button primary-button" href="<?= $attributes['target'] ?>">
              <?= $attributes['button'] ?>
            </a>
          </div>
        </div>
      </div>
    </div>
    <?php if ($attributes['background']['url']) : ?>
      <div class="attention__background">
        <?php if ($attributes['background']['url'] == 'background-1.jpg') : ?>
          <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?php the_block_url(__DIR__); ?>/assets/background-1.jpg" alt="background" />
        <?php elseif ($attributes['background']['url'] == 'background-2.jpg') : ?>
          <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?php the_block_url(__DIR__); ?>/assets/background-2.jpg" alt="background" />
        <?php elseif ($attributes['background']['url'] == 'background-3.jpg') : ?>
          <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?php the_block_url(__DIR__); ?>/assets/background-3.jpg" alt="background" />
        <?php elseif ($attributes['background']['url']) : ?>
          <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : ''; ?>" src="<?= $attributes['background']['url'] ?>" alt="background" />
        <?php endif; ?>
        <?php if ($attributes['mBackground']['url'] == 'background-1-mobile.jpg') : ?>
          <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/background-1-mobile.jpg" alt="background" />
        <?php elseif ($attributes['mBackground']['url'] == 'background-2-mobile.jpg') : ?>
          <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/background-2-mobile.jpg" alt="background" />
        <?php elseif ($attributes['mBackground']['url']) : ?>
          <img class="only-mobile" src="<?= $attributes['mBackground']['url'] ?>" alt="background" />
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<script>
  document.querySelectorAll('.attention[data-open-chat="true"]').forEach(function(contact) {
    contact.querySelector('.attention__button').addEventListener('click', function(e) {
      e.preventDefault()
      const helper = document.querySelector('.helper')
      const overlay = document.querySelector('.overlay')
      helper && helper.classList.add('active')
      overlay && overlay.classList.add('active')
      document.body.classList.add('overflow-hidden')
    })
  })
</script>