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
  <div class="calculator-form" style="
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
    <div class="calculator-form__title"><?= $attributes['title'] ?></div>
    <div class="calculator-form__inner">
      <div class="calculator-form__subtitle">Calcula tus puntos</div>
      <label class="calculator-form__input-wrapper">
        <span class="calculator-form__input-label">Cantidad de puntos</span>
        <input type="text" class="calculator-form__input input" placeholder="Introduce un número">
      </label>
      <div class="calculator-form__text text">
        <h3>Términos y condiciones:</h3>
        <p>
          Para canjear tus Puntos Banesco en efectivo (Mínimo de 2000 puntos) o millas, puedes llenar la solicitud en el <a href="/">formulario</a>. Igualmente, canjea tus puntos o realiza consultas a través de <a href="/">WhatsApp</a>.
        </p>
      </div>
      <div class="calculator-form__buttons">
        <a href="/" class="calculator-form__button primary-button button1">Calcular</a>
        <a href="/" class="calculator-form__button outlined-button">Reiniciar campos</a>
      </div>
      <div class="calculator-form__hidden">
        <div class="calculator-form__block">
          <div class="calculator-form__block-line">En efectivo: <b>U$D 1000</b></div>
          <div class="calculator-form__block-line">Millas: <b>100000 Millas</b></div>
          <div class="calculator-form__block-line">Compras: <b>U$D 100000</b></div>
        </div>
        <div class="calculator-form__hidden-title">
          Algunos tips para utilizar tus puntos:
        </div>
        <div class="calculator-form__hidden-items">
          <div class="calculator-form__hidden-item">
            <div class="calculator-form__hidden-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/1.svg" alt="">
            </div>
            <div class="calculator-form__hidden-item-title">Canje por Efectivo</div>
            <div class="calculator-form__hidden-item-text text">Abona a tu tarjeta de crédito. Puedes canjear tus puntos desde tu Banca en Línea.</div>
          </div>
          <div class="calculator-form__hidden-item">
            <div class="calculator-form__hidden-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/2.svg" alt="">
            </div>
            <div class="calculator-form__hidden-item-title">Compras con tus puntos</div>
            <div class="calculator-form__hidden-item-text text">Ve de shopping y paga con tus Puntos Banesco</div>
            <a class="calculator-form__hidden-item-link link-button" href="/">Ver comercios afiliados</a>
          </div>
          <div class="calculator-form__hidden-item">
            <div class="calculator-form__hidden-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/3.svg" alt="">
            </div>
            <div class="calculator-form__hidden-item-title">Canje por Millas</div>
            <div class="calculator-form__hidden-item-text text">Canjea por millas ConnectMiles o LifeMiles para tus vacaciones.</div>
            <a class="calculator-form__hidden-item-link link-button" href="/">Haz canje de tus puntos aquí</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.calculator-form').forEach(function(calculator) {
    const currencyBtn = calculator.querySelector('.button1')

    currencyBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.calculator-form__hidden').classList.toggle('active')
    })
  })
</script>