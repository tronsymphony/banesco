<?php

/**
 * Product Grid Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'product-grid-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block product-grid-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assign defaults.
$products = get_field('products', 'options');
$block_styling= get_field('block_styling');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"style="
  --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '0px' ?>;
  --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '0px' ?>;
  --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '0px' ?>;
  --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '0px' ?>;
  --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '0px' ?>;
  --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '0px' ?>;
  --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '0px' ?>;
  --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '0px' ?>;
  --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
  ">
  <div class="container">
    <?php if ( $products ) : ?>
      <div class="product-grid-new__product-wrapper">
        <?php foreach ( $products as $product ) : ?>
          <?php
            $product_icon = Pacific_Helper::generate_image( array(
              'image' => $product['product_icon'],
              'class' => 'product-grid-new__product-icon',
              'image_size' => 'icon',
              'attributes' => array(
                'title' => $product['product_icon'] ? $product['product_icon']['title'] : null,
                'alt' => $product['product_icon'] ? $product['product_icon']['title'] : null,
              )
            ));

            $product_title = Pacific_Helper::generate_header(array(
              'text' => $product['product_title']['title'],
              'tag' => $product['product_title']['tag'],
              'class' => 'product-grid-new__product-title'
            ));
          ?>
          <div class="product-grid-new__product-item">
            <?php echo $product_icon; ?>
            <?php echo $product_title; ?>
            <?php if ( $product['product_links'] ) : ?>
              <div class="product-grid-new__link-wrapper">
                <?php foreach ( $product['product_links'] as $link ) : ?>
                  <?php
                    $product_link = Pacific_Helper::generate_acf_link(array(
                      'link' => $link['product_link'],
                      'class' => 'product-grid-new__link link-button',
                      'link_attributes' => array(
                        'title' => $link['product_link'] ? $link['product_link']['title'] : null,
                        'target' => $link['product_link']['target'] ?? null
                      )
                    ));

                    echo $product_link;
                  ?>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>