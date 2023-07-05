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
  <div class="text-banner" style="
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
      <div class="text-banner__inner" data-reverse="<?= ($attributes['reverseDirection']) ? 'true' : 'false' ?>">
        <div class="text-banner__content">
          <?php if ($attributes['text']) : ?>
            <div class="text-banner__text" data-crop="<?= ($attributes['crop']) ? 'true' : 'false' ?>"><?= $attributes['text'] ?></div>
          <?php endif; ?>
          <?php if ($attributes['crop']) : ?>
            <div class="text-banner__open">
              <button class="text-banner__button link-button">Ver todos los detalles</button>
            </div>
          <?php endif; ?>
        </div>
        <?php if ($attributes['background']['url']) : ?>
          <div class="text-banner__background">
            <?php if ($attributes['background']['url'] == 'background.jpg') : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/background.jpg" alt="image" />
            <?php elseif ($attributes['background']['url']) : ?>
              <img class="<?= ($attributes['mBackground']['url']) ? 'only-desktop' : '' ?>" src="<?= $attributes['background']['url'] ?>" alt="image" />
            <?php endif; ?>
            <?php if ($attributes['mBackground']['url']) : ?>
              <?php if ($attributes['mBackground']['url'] == 'background-mobile.jpg') : ?>
                <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/background-mobile.jpg" alt="image" />
              <?php elseif ($attributes['mBackground']['url']) : ?>
                <img class="only-mobile" src="<?= $attributes['mBackground']['url'] ?>" alt="image" />
              <?php endif; ?>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
      <?php if ($attributes['extra']) : ?>
        <div class="text-banner__extra">
          <div class="text-banner__extra-text"><?= $attributes['extra'] ?></div>
          <?php if ($attributes['button']) : ?>
            <a class="text-banner__extra-link link-button" href="<?= $attributes['target'] ?>">
              <?= $attributes['button'] ?>
            </a>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.text-banner').forEach(function(accordion) {
    const triger = accordion.querySelector('.text-banner__open')
    const content = accordion.querySelector('.text-banner__text')
    triger.addEventListener('click', function() {
      content.classList.toggle('active')
      triger.classList.toggle('active')
    })
  })
</script>