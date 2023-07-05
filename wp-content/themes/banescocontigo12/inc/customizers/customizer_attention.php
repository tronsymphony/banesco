<?php

/**
 * Attention customizer register.
 */

function attention_customizer($wp_customize)
{
  $wp_customize->add_section(
    'attention_customizer',
    [
      'title' => 'Attention Section',
      'priority' => 112,
    ]
  );
  $wp_customize->add_setting('help_image', ['default' => get_theme_url() . '/assets/images/attention.svg']);
  $wp_customize->add_setting('help_title', ['default' => '¿Necesitas ayuda?']);
  $wp_customize->add_setting('help_description', ['default' => 'Estamos a tu disposición en todos los canales.']);
  $wp_customize->add_setting('help_button_title', ['default' => 'Conversemos']);
  $wp_customize->add_setting('help_button_link', ['default' => '/']);
  $wp_customize->add_control(new WP_Customize_Image_Control(
    $wp_customize,
    'help_image',
    [
      'label'    => 'Image',
      'section'  => 'attention_customizer',
    ]
  ));
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'help_title',
    [
      'label' => 'Title',
      'section' => 'attention_customizer'
    ]
  ));
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'help_description',
    [
      'label' => 'Description',
      'section' => 'attention_customizer'
    ]
  ));
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'help_button_title',
    [
      'label' => 'Primary Button',
      'section' => 'attention_customizer'
    ]
  ));
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'help_button_link',
    [
      'section' => 'attention_customizer'
    ]
  ));
};

add_action('customize_register', 'attention_customizer');
