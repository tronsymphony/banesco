<?php

/**
 * @param string|WP_Block_Type $block_type Block type name including namespace, or alternatively
 *                                         a path to the JSON file with metadata definition for the block,
 *                                         or a path to the folder where the `block.json` file is located,
 *                                         or a complete WP_Block_Type instance.
 *                                         In case a WP_Block_Type is provided, the $args parameter will be ignored.
 * @param array                $args       Optional. Array of block type arguments. Accepts any public property
 *                                         of `WP_Block_Type`. See WP_Block_Type::__construct() for information
 *                                         on accepted arguments. Default empty array.
 *
 * @return WP_Block_Type|false The registered block type on success, or false on failure.
 */

register_block_type(__DIR__, [
  'render_callback' => function ($attributes, $content, $block_instance) {
    ob_start();
    require 'template.php';
    return ob_get_clean();
  }
]);

wp_enqueue_style('banescocontigo-slider-style', '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.css', [], _S_VERSION);
wp_enqueue_script('banescocontigo-slider-script', '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.js', [], _S_VERSION, true);
wp_enqueue_script('banescocontigo-script-slider', get_template_directory_uri() . '/blocks/src/slider/script.js', ['jquery'], _S_VERSION, true);