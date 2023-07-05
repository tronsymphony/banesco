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
  <div class="posts-latest" style="
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
      <?php if ($attributes['title']) : ?>
        <h2 class="posts-latest__title"><?= $attributes['title'] ?></h2>
      <?php endif; ?>
      <?php if ($attributes['posts']) : ?>
        <div class="posts-latest__inner">
          <div class="posts-latest__left">
            <?php if ($attributes['posts'][0]) : ?>
              <div class="posts-latest__item">
                <?php if ($attributes['posts'][0]['image']['url']) : ?>
                  <div class="posts-latest__item-image">
                    <?php if ($attributes['posts'][0]['image']['url'] == '1.jpg') : ?>
                      <img class="<?= ($attributes['posts'][0]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/1.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][0]['image']['url'] == '2.jpg') : ?>
                      <img class="<?= ($attributes['posts'][0]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/2.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][0]['image']['url'] == '3.jpg') : ?>
                      <img class="<?= ($attributes['posts'][0]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/3.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][0]['image']['url']) : ?>
                      <img class="<?= ($attributes['posts'][0]['mImage']) ? 'only-desktop' : '' ?>" src="<?= $attributes['posts'][0]['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
                    <?php if ($attributes['posts'][0]['mImage']['url']) : ?>
                      <?php if ($attributes['posts'][0]['mImage']['url'] == 'm-1.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-1.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][0]['mImage']['url'] == 'm-2.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-2.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][0]['mImage']['url'] == 'm-3.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-3.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][0]['mImage']['url']) : ?>
                        <img class="only-mobile" src="<?= $attributes['posts'][0]['mImage']['url'] ?>" alt="image" />
                      <?php endif; ?>
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="posts-latest__item-content">
                  <?php if ($attributes['posts'][0]['title']) : ?>
                    <h3 class="posts-latest__item-title"><?= $attributes['posts'][0]['title'] ?></h3>
                  <?php endif; ?>
                  <?php if ($attributes['posts'][0]['description']) : ?>
                    <h4 class="posts-latest__item-description"><?= $attributes['posts'][0]['description'] ?></h4>
                  <?php endif; ?>
                  <div class="posts-latest__item-buttons">
                    <?php if ($attributes['posts'][0]['button']) : ?>
                      <div class="posts-latest__item-link-button">
                        <a class="link-button" href="<?= $attributes['posts'][0]['target'] ?>">
                          <?= $attributes['posts'][0]['button'] ?>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            <?php endif; ?>
          </div>
          <div class="posts-latest__right">
            <?php if ($attributes['posts'][1]) : ?>
              <div class="posts-latest__item">
                <?php if ($attributes['posts'][1]['image']['url']) : ?>
                  <div class="posts-latest__item-image">
                    <?php if ($attributes['posts'][1]['image']['url'] == '1.jpg') : ?>
                      <img class="<?= ($attributes['posts'][1]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/1.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][1]['image']['url'] == '2.jpg') : ?>
                      <img class="<?= ($attributes['posts'][1]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/2.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][1]['image']['url'] == '3.jpg') : ?>
                      <img class="<?= ($attributes['posts'][1]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/3.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][1]['image']['url']) : ?>
                      <img class="<?= ($attributes['posts'][1]['mImage']) ? 'only-desktop' : '' ?>" src="<?= $attributes['posts'][1]['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
                    <?php if ($attributes['posts'][1]['mImage']['url']) : ?>
                      <?php if ($attributes['posts'][1]['mImage']['url'] == 'm-1.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-1.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][1]['mImage']['url'] == 'm-2.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-2.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][1]['mImage']['url'] == 'm-3.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-3.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][1]['mImage']['url']) : ?>
                        <img class="only-mobile" src="<?= $attributes['posts'][1]['mImage']['url'] ?>" alt="image" />
                      <?php endif; ?>
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="posts-latest__item-content">
                  <?php if ($attributes['posts'][1]['title']) : ?>
                    <h3 class="posts-latest__item-title"><?= $attributes['posts'][1]['title'] ?></h3>
                  <?php endif; ?>
                  <?php if ($attributes['posts'][1]['description']) : ?>
                    <h4 class="posts-latest__item-description"><?= $attributes['posts'][1]['description'] ?></h4>
                  <?php endif; ?>
                  <div class="posts-latest__item-buttons">
                    <?php if ($attributes['posts'][1]['button']) : ?>
                      <div class="posts-latest__item-link-button">
                        <a class="link-button" href="<?= $attributes['posts'][1]['target'] ?>">
                          <?= $attributes['posts'][1]['button'] ?>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            <?php endif; ?>
            <?php if ($attributes['posts'][2]) : ?>
              <div class="posts-latest__item">
                <?php if ($attributes['posts'][2]['image']['url']) : ?>
                  <div class="posts-latest__item-image">
                    <?php if ($attributes['posts'][2]['image']['url'] == '1.jpg') : ?>
                      <img class="<?= ($attributes['posts'][2]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/1.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][2]['image']['url'] == '2.jpg') : ?>
                      <img class="<?= ($attributes['posts'][2]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/2.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][2]['image']['url'] == '3.jpg') : ?>
                      <img class="<?= ($attributes['posts'][2]['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/3.jpg" alt="image" />
                    <?php elseif ($attributes['posts'][2]['image']['url']) : ?>
                      <img class="<?= ($attributes['posts'][2]['mImage']) ? 'only-desktop' : '' ?>" src="<?= $attributes['posts'][2]['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
                    <?php if ($attributes['posts'][2]['mImage']['url']) : ?>
                      <?php if ($attributes['posts'][2]['mImage']['url'] == 'm-1.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-1.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][2]['mImage']['url'] == 'm-2.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-2.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][2]['mImage']['url'] == 'm-3.jpg') : ?>
                        <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-3.jpg" alt="image" />
                      <?php elseif ($attributes['posts'][2]['mImage']['url']) : ?>
                        <img class="only-mobile" src="<?= $attributes['posts'][2]['mImage']['url'] ?>" alt="image" />
                      <?php endif; ?>
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="posts-latest__item-content">
                  <?php if ($attributes['posts'][2]['title']) : ?>
                    <h3 class="posts-latest__item-title"><?= $attributes['posts'][2]['title'] ?></h3>
                  <?php endif; ?>
                  <?php if ($attributes['posts'][2]['description']) : ?>
                    <h4 class="posts-latest__item-description"><?= $attributes['posts'][2]['description'] ?></h4>
                  <?php endif; ?>
                  <div class="posts-latest__item-buttons">
                    <?php if ($attributes['posts'][2]['button']) : ?>
                      <div class="posts-latest__item-link-button">
                        <a class="link-button" href="<?= $attributes['posts'][2]['target'] ?>">
                          <?= $attributes['posts'][2]['button'] ?>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            <?php endif; ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>