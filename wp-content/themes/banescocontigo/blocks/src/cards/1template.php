<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
  <div class="cards" style="
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
    <div class="cards__hero">
      <div class="container">
        <div class="cards__hero-inner">
          <div class="cards__hero-text">Conoce todas nuestras tarjetas</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="cards__content">
        <div class="cards__filters">
          <div class="cards__filters-title">Me gustaría:</div>
          <div class="cards__filters-content">
            <div class="cards__filter cards__filter--checkboxes" tabindex="-1">
              <div class="cards__filter-header">
                <span><?= $attributes['filter1'] ?></span>
              </div>
              <div class="cards__filter-dropdown">
                <label class="cards__filter-dropdown-line checkbox">
                  Compras internacionales
                </label>
                <label class="cards__filter-dropdown-line checkbox">
                  Compras diarias
                </label>
                <label class="cards__filter-dropdown-line checkbox">
                  Beneficios en Aerolíneas
                </label>
                <label class="cards__filter-dropdown-line checkbox">
                  Puntos Banesco
                </label>
              </div>
            </div>
            <div class="cards__filter cards__filter--checkboxes" tabindex="-1">
              <div class="cards__filter-header">
                <span><?= $attributes['filter2'] ?></span>
              </div>
              <div class="cards__filter-dropdown">
                <label class="cards__filter-dropdown-line checkbox">
                  Crédito
                </label>
                <label class="cards__filter-dropdown-line checkbox">
                  Débito
                </label>
                <label class="cards__filter-dropdown-line checkbox">
                  Cashback
                </label>
              </div>
            </div>
            <div class="cards__filter cards__filter--slider" tabindex="-1">
              <div class="cards__filter-header">
                <span><?= $attributes['filter3'] ?></span>
              </div>
              <div class="cards__filter-dropdown">
                <div class="slider">
                  <div class="slider__dragline" id="slider"></div>
                  <div class="slider__min">0</div>
                  <div class="slider__max">max</div>
                </div>
              </div>
            </div>
            <button class="cards__filters-content-button primary-button">
              Recomiéndame
            </button>
          </div>
          <button class="cards__filters-cancel">Borrar filtros</button>
        </div>
        <div class="cards__top cards__posts-item" data-slug="mastercard-debito-baneskin">
          <div class="cards__top-inner">
            <div class="cards__top-img cards__posts-item-image">
              <img src="https://banesco.pa.pacific54.com/wp-content/uploads/2023/04/image-16.png" alt="">
            </div>
            <div class="cards__top-content">
              <div class="cards__top-content-suptitle">Nuestra recomendación para ti</div>
              <div class="cards__top-content-title">Mastercard Débito Baneskin</div>
              <div class="cards__top-content-descr">Bajo el programa CRECE te acompañamos a dar tus primeros pasos en el mundo financiero, fomentando el hábito del ahorro el cual te traerá grandes resultados en el futuro.</div>
              <div class="cards__top-content-list">
                <div class="cards__top-content-list-item">
                  <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                  Tarjeta doble saldo
                </div>
                <div class="cards__top-content-list-item">
                  <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                  Multicrédito Banesco
                </div>
                <div class="cards__top-content-list-item">
                  <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                  Protección de compras
                </div>
              </div>
              <div class="cards__top-content-bottom">
                <button class="cards__top-content-label cards__posts-item-label">
                  <img src="<?php the_block_url(__DIR__); ?>/assets/vektor.svg" />
                  Comparar
                </button>
                <button class="cards__top-content-button primary-button">
                  Me interesa
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cards__posts">
          <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
          $the_query = new WP_Query(array(
            'post_type'   => 'cards',
            'post_status' => 'publish',
            'posts_per_page' => 12,
            'paged' => $paged,
          )); ?>
          <?php if ($the_query->have_posts()) : ?>
            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
              <div class="cards__posts-item" data-slug="<?php echo get_post(get_the_ID())->post_name; ?>">
                <div class="cards__posts-item-top">
                  <div class="cards__posts-item-image">
                    <img src=<?php echo get_the_post_thumbnail_url() ?> alt="" />
                  </div>
                  <h3 class="cards__posts-item-title"><?php the_title(); ?></h3>
                </div>
                <div class="cards__posts-item-body">
                  <div class="cards__posts-item-text"><?php the_excerpt(); ?></div>
                  <div class="cards__posts-item-label">
                    <img src="<?php the_block_url(__DIR__); ?>/assets/vektor.svg" />
                    Comparar
                  </div>
                </div>
              </div>
            <?php endwhile; ?>
          <?php endif;
          wp_reset_postdata(); ?>
        </div>
        <div class="cards__pagination">
          <?php custom_pagination($the_query) ?>
        </div>
      </div>
    </div>
    <div class="cards__popup">
      <div class="container">
        <div class="cards__popup-inner-close"></div>
        <div class="cards__popup-inner">
          <div class="cards__popup-item">
            <div class="cards__popup-item-close">
              <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
            </div>
            <div class="cards__popup-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
            </div>
          </div>
          <div class="cards__popup-item">
            <div class="cards__popup-item-close">
              <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
            </div>
            <div class="cards__popup-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
            </div>
          </div>
          <div class="cards__popup-item">
            <div class="cards__popup-item-close">
              <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
            </div>
            <div class="cards__popup-item-image">
              <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
            </div>
          </div>
          <div class="cards__popup-button">
            <button class="cards__popup-btn primary-button">Comparar Tarjetas</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script type='text/javascript'>
  var javascript_array = [
    <?php
    $query = new WP_Query(array(
      'post_type'   => 'cards',
      'post_status' => 'publish',
      'posts_per_page' => 1000,
    )); ?>
    <?php if ($query->have_posts()) : ?>
      <?php while ($query->have_posts()) : $query->the_post();
        global $post; ?> {
          id: '<?php echo $post->post_name ?>',
          image: '<?php echo get_the_post_thumbnail_url() ?>'
        },
      <?php endwhile; ?>
    <?php endif;
    wp_reset_postdata(); ?>
  ]
</script>

<script>
  document.querySelectorAll('.cards__filters-cancel').forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelectorAll('.cards__filter-dropdown-line').forEach(function(filter) {
        filter.classList.remove('active')
      })
      slider.noUiSlider.set(0)
    })
  })

  document.querySelectorAll('.cards').forEach(function(accordion) {
    const triger = accordion.querySelector('.cards__filters-content-button')
    const content = accordion.querySelector('.cards__top')
    triger.addEventListener('click', function() {
      content.classList.toggle('active')
    })
  })

  document.querySelectorAll('.cards__filter').forEach(function(picker) {
    picker.querySelector('.cards__filter-header span').addEventListener('click', function() {
      if (!picker.classList.contains('blured')) {
        this.parentNode.parentNode.classList.toggle('active')
        this.parentNode.parentNode.focus()
      }
    })
    picker.addEventListener('blur', function(e) {
      this.classList.remove('active')
      this.classList.add('blured')
      setTimeout(() => {
        this.classList.remove('blured')
      }, 200)
    })
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('slider')) {
      var slider = document.getElementById('slider')
      noUiSlider.create(slider, {
        start: 10000,
        connect: [true, false],
        range: {
          min: 0,
          max: 50000,
        },
        step: 1000,
        tooltips: wNumb({
          decimals: 3,
          thousand: '.',
          prefix: '$',
        }),
      })
    }
    document.querySelectorAll('.noUi-handle').forEach(function(handle) {
      handle.removeAttribute('tabindex')
    })
  })

  document.querySelectorAll('.cards__popup-inner-close').forEach(function(item) {
    item.addEventListener('click', function(label) {
      document.querySelector('.cards__popup').classList.toggle('collapsed')
    })
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    console.log(javascript_array);
    const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
    if (cards.length > 0) {
      document.querySelector('.cards__popup').classList.add('active')
      document.querySelectorAll('.cards__popup-inner .cards__popup-item').forEach((item2, i) => {
        if (i == 0) {
          if (cards[0]) {
            item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[0]).image;
            item2.dataset.slug = cards[0]
            item2.classList.add('active')
            if (document
              .querySelector('.cards__posts-item[data-slug=' + cards[0] + '] .cards__posts-item-label')) {
              document
                .querySelector('.cards__posts-item[data-slug=' + cards[0] + '] .cards__posts-item-label')
                .classList.add('active')
            }

          }
        }
        if (i == 1) {
          if (cards[1]) {
            item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[1]).image;
            item2.dataset.slug = cards[1]
            item2.classList.add('active')
            if (document
              .querySelector('.cards__posts-item[data-slug=' + cards[1] + '] .cards__posts-item-label')) {
              document
                .querySelector('.cards__posts-item[data-slug=' + cards[1] + '] .cards__posts-item-label')
                .classList.add('active')
            }
          }
        }
        if (i == 2) {
          if (cards[2]) {
            item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[2]).image;
            item2.dataset.slug = cards[2]
            item2.classList.add('active')
            if (document
              .querySelector('.cards__posts-item[data-slug=' + cards[2] + '] .cards__posts-item-label')) {
              document
                .querySelector('.cards__posts-item[data-slug=' + cards[2] + '] .cards__posts-item-label')
                .classList.add('active')
            }
          }
        }
      })
    }
  })

  document.querySelectorAll('.cards__posts-item').forEach(function(item) {
    item.addEventListener('click', function(label) {
      const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
      if (!cards.find((find) => find == item.dataset.slug)) {
        if (item.dataset.slug == 'mastercard-debito-baneskin') {
        	document
        		.querySelectorAll('.cards__posts-item[data-slug=mastercard-debito-baneskin] .cards__posts-item-label')
        		.forEach((i) => {
        			i.classList.add('active')
        		})
        }
        document.querySelector('.cards__popup').classList.add('active')
        document.querySelector('.cards__popup').classList.remove('collapsed')
        localStorage.setItem('cards', JSON.stringify([...cards, item.dataset.slug]))
        let render
        document.querySelectorAll('.cards__popup-inner .cards__popup-item').forEach((item2) => {
          if (item2.querySelector('.cards__popup-item-image img').src.includes('none.png')) {
            if (!render) {
              render = item2
            }
          }
        })
        render.querySelector('.cards__popup-item-image img').src = document.querySelector(
          '.cards__posts-item[data-slug=' + item.dataset.slug + '] .cards__posts-item-image img',
        ).src
        render.dataset.slug = item.dataset.slug
        render.classList.add('active')
        item.querySelector('.cards__posts-item-label').classList.add('active')
      }
      if (cards.find((find) => find == item.dataset.slug)) {
        localStorage.setItem('cards', JSON.stringify(cards.filter((find) => find != item.dataset.slug)))
        document
          .querySelectorAll('.cards__popup-inner .cards__popup-item[data-slug=' + item.dataset.slug + ']')
          .forEach((item2) => {
            item2.querySelector('.cards__popup-item-image img').src =
              '<?php the_block_url(__DIR__); ?>/assets/none.png'
            item2.classList.remove('active')
            item2.dataset.slug = ''
          })
        item.querySelector('.cards__posts-item-label').classList.remove('active')
        if (item.dataset.slug == 'mastercard-debito-baneskin') {
        	document
        		.querySelectorAll('.cards__posts-item[data-slug=mastercard-debito-baneskin] .cards__posts-item-label')
        		.forEach((i) => {
        			i.classList.remove('active')
        		})
        }
        if (cards.filter((find) => find != item.dataset.slug).length < 1) {
          document.querySelector('.cards__popup').classList.remove('active')
          document.querySelector('.cards__popup').classList.remove('collapsed')
        }
      }
    })
  })

  document.querySelectorAll('.cards__popup-btn').forEach(function(item) {
    item.addEventListener('click', function(label) {
      const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
      window.location.href = '/tarjetas-main/tarjetas-comparar/?query=' + cards.join(',')
    })
  })

  document.querySelectorAll('.cards__popup-item').forEach(function(item) {
    item.querySelector('.cards__popup-item-close').addEventListener('click', function(e) {
      const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
      if (cards.find((find) => find == item.dataset.slug)) {
        localStorage.setItem('cards', JSON.stringify(cards.filter((find) => find != item.dataset.slug)))
        item.querySelector('.cards__popup-item-image img').src =
          '<?php the_block_url(__DIR__); ?>/assets/none.png'
        document
          .querySelector('.cards__posts-item[data-slug=' + item.dataset.slug + '] .cards__posts-item-label')
          .classList.remove('active')
        item.dataset.slug = ''
        item.classList.remove('active')
        // if (item.dataset.slug == 'mastercard-black') {
        // 	document
        // 		.querySelectorAll('.cards__posts-item[data-slug=mastercard-black] .cards__posts-item-label')
        // 		.forEach((i) => {
        // 			i.classList.remove('active')
        // 		})
        // }
        if (cards.length == 1) {
          document.querySelector('.cards__popup').classList.remove('active')
          document.querySelector('.cards__popup').classList.remove('collapsed')
        }
      }
    })
  })
</script> 