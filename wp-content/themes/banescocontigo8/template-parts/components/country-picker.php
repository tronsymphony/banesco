<div class="country-picker" tabindex="-1">
  <input type="text" value="Venezuela" hidden>
  <button class="country-picker__inner" type="button">
    <img class="country-picker__image" src="<?php the_theme_url(); ?>/assets/images/flags/panama.png">
    <div class="country-picker__title">Banesco Panamá</div>
    <svg class="country-picker__icon">
      <use xlink:href="<?php the_theme_url(); ?>/assets/images/icons/sprite.svg#arrow-down" />
    </svg>
  </button>
  <div class="country-picker__dropdown">
    <ul>
      <li class="active">
        <img src="<?php the_theme_url(); ?>/assets/images/flags/panama.png">
        <span>Panamá</span>
      </li>
      <li>
        <img src="<?php the_theme_url(); ?>/assets/images/flags/venezuela.png">
        <span>Venezuela</span>
      </li>
      <li>
        <img src="<?php the_theme_url(); ?>/assets/images/flags/usa.png">
        <span>USA</span>
      </li>
      <li>
        <img src="<?php the_theme_url(); ?>/assets/images/flags/dominicana.png">
        <span>República Dominicana</span>
      </li>
    </ul>
  </div>
</div>
