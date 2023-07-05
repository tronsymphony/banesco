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
  <div class="slider" style="
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
      <div class="slider__inner">
        <?php if ($attributes['title']) : ?>
          <h2 class="slider__title">
            <?php if ($attributes['title']['desktop'] || $attributes['title']['mobile']) : ?>
              <span class="<?= ($attributes['title']['mobile']) ? 'only-desktop' : '' ?>"><?= $attributes['title']['desktop'] ?></span>
            <?php endif; ?>
            <?php if ($attributes['title']['mobile']) : ?>
              <span class="only-mobile"><?= $attributes['title']['mobile'] ?></span>
            <?php endif; ?>
          </h2>
        <?php endif; ?>
        <div class="slider__calculator">
          <div class="slider__calculator-item">
            <div class="slider__slider">
              <h3 class="slider__slider-title">Monto a solicitar</h3>
              <div class="slider__slider-inner">
                <button class="slider__slider-label min">min</button>
                <div class="slider__slider-slider">
                  <div id="slider2"></div>
                </div>
                <button class="slider__slider-label max">max</button>
              </div>
            </div>
          </div>
          <div class="slider__calculator-item">
            <div class="slider__counter">
              <h3 class="slider__counter-title">Monto a solicitar</h3>
              <div class="slider__counter-inner">
                <button class="slider__counter-label minus disabled"></button>
                <div class="slider__counter-content content">
                  1
                </div>
                <button class="slider__counter-label plus"></button>
              </div>
            </div>
          </div>
          <div class="slider__calculator-item">
            <div class="slider__buttons">
              <a class="slider__button primary-button" href="/">
                Simular préstamo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.slider__counter').forEach(function(counter) {
    let i = 1;
    const minus = counter.querySelector('.minus')
    const plus = counter.querySelector('.plus')
    const content = counter.querySelector('.content')

    minus.addEventListener('click', function() {
      if (i == 1) return;
      i--;
      content.innerHTML = i;
      if (i == 1) {
        minus.classList.add('disabled')
      }
      if (i > 1) {
        minus.classList.remove('disabled')
      }
    })
    plus.addEventListener('click', function() {
      i++;
      content.innerHTML = i;
      if (i == 1) {
        minus.classList.add('disabled')
      }
      if (i > 1) {
        minus.classList.remove('disabled')
      }
    })
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('slider2')) {
      var slider = document.getElementById('slider2')
      noUiSlider.create(slider, {
        start: 50000,
        connect: [true, false],
        range: {
          min: 0,
          max: 150000,
        },
        step: 1000,
        tooltips: wNumb({
          decimals: 3,
          thousand: '.',
          prefix: 'RD$ ',
        }),
      })

      document.querySelectorAll('.slider__slider').forEach(function(slider1) {
        const min = slider1.querySelector('.min')
        const max = slider1.querySelector('.max')

        min.addEventListener('click', function() {
          slider.noUiSlider.set(0)
        })

        max.addEventListener('click', function() {
          slider.noUiSlider.set(150000)
        })
      })
    }
  })
</script>