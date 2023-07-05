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
  <div class="text-image-reverse" style="
      --paddings-top: <?= (isset($attributes['paddings']['desktop']['top'])) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?= (isset($attributes['paddings']['mobile']['top'])) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?= (isset($attributes['paddings']['desktop']['bottom'])) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?= (isset($attributes['paddings']['mobile']['bottom'])) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?= (isset($attributes['margins']['desktop']['top'])) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?= (isset($attributes['margins']['mobile']['top'])) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?= (isset($attributes['margins']['desktop']['bottom'])) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?= (isset($attributes['margins']['mobile']['bottom'])) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?= (isset($attributes['gradient'])) ? $attributes['gradient'] : '#fff' ?>;
    " data-reverse="<?= ($attributes['reverse']) ? 'true' : 'false' ?>">
    <div class="container">
      <div class="text-image-reverse__inner">
        <?php if ($attributes['title'] || $attributes['content']) : ?>
          <div class="text-image-reverse__text">
            <?php if ($attributes['title']) : ?>
              <h2 class="text-image-reverse__title"><?= $attributes['title'] ?></h2>
            <?php endif; ?>
            <?php if ($attributes['content']) : ?>
              <div class="text-image-reverse__content text"><?= $attributes['content'] ?></div>
            <?php endif; ?>
            <?php if ($attributes['reverse']) : ?>
            <div class="text-image-reverse__open">
              <button class="text-image-reverse__button link-button">Ver todos los detalles</button>
            </div>
          <?php endif; ?>
          </div>
        <?php endif; ?>
        <?php if ($attributes['image']['url']) : ?>
          <div class="text-image-reverse__image">
            <?php if ($attributes['image']['url'] == 'image.png') : ?>
              <img class="<?= ($attributes['mImage']['url']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/image.png" alt="image" />
            <?php elseif ($attributes['image']['url']) : ?>
              <img class="<?= ($attributes['mImage']['url']) ? 'only-desktop' : '' ?>" src="<?= $attributes['image']['url'] ?>" alt="image" />
            <?php endif; ?>
            <?php if ($attributes['mImage']['url']) : ?>
              <?php if ($attributes['mImage']['url'] == 'image.png') : ?>
                <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/image.png" alt="image" />
              <?php elseif ($attributes['mImage']['url']) : ?>
                <img class="only-mobile" src="<?= $attributes['mImage']['url'] ?>" alt="image" />
              <?php endif; ?>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.text-image-reverse').forEach(function(accordion) {
    const triger = accordion.querySelector('.text-image-reverse__open')
    const content = accordion.querySelector('.text-image-reverse__content')
    triger.addEventListener('click', function() {
      content.classList.toggle('active')
      triger.classList.toggle('active')
    })
  })
</script>