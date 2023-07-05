<section class="attention">
  <div class="container">
    <div class="attention__inner">
      <div class="attention__content">
        <?php if (get_theme_field('help_image', true)) : ?>
          <div class="attention__icon">
            <img src="<?php the_theme_field('help_image', get_theme_url() . '/assets/images/attention.svg'); ?>" alt="attention" />
          </div>
        <?php endif; ?>
        <?php if (get_theme_field('help_title', true)) : ?>
          <h2 class="attention__title"><?php the_theme_field('help_title', '¿Necesitas ayuda?'); ?></h2>
        <?php endif; ?>
        <?php if (get_theme_field('help_description', true)) : ?>
          <h3 class="attention__description"><?php the_theme_field('help_description', 'Estamos a tu disposición en todos los canales.'); ?></h3>
        <?php endif; ?>
        <?php if (get_theme_field('help_button_title', true)) : ?>
          <div class="attention__buttons">
            <div class="attention__button">
              <a class="primary-button" href="<?php the_theme_field('help_button_link', '/'); ?>">
                <?php the_theme_field('help_button_title', 'Conversemos'); ?>
              </a>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>