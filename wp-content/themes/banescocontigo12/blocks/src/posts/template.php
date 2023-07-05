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
  <div class="posts" style="
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
        <h2 class="posts__title"><?= $attributes['title'] ?></h2>
      <?php endif; ?>
      <div class="posts__inner">
        <?php if ($attributes['posts1']) : ?>
          <div class="posts__left">
            <?php foreach ($attributes['posts1'] as $post1) : ?>
              <div class="posts__item" data-size="<?= ($post1['big']) ? 'big' : 'small' ?>" data-color="<?= ($post1['whiteText']) ? 'white' : 'default' ?>" data-mhidden="<?= ($post1['mHide']) ? 'true' : 'false' ?>">
                <?php if ($post1['image']['url']) : ?>
                  <div class="posts__item-image">
                    <?php if ($post1['image']['url'] == '1.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/1.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '2.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/2.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '3.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/3.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '4.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/4.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '5.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/5.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '6.jpg') : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/6.jpg" alt="image" />
                    <?php elseif ($post1['image']['url'] == '7.jpg') : ?>
                      <img class="<?= ($post['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/7.jpg" alt="image" />
                    <?php elseif ($post1['image']['url']) : ?>
                      <img class="<?= ($post1['mImage']) ? 'only-desktop' : '' ?>" src="<?= $post1['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <?php if ($post1['mImage']['url']) : ?>
                  <div class="posts__item-image">
                    <?php if ($post1['mImage']['url'] == 'm-1.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-1.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-2.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-2.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-3.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-3.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-4.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-4.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-5.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-5.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-6.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-6.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url'] == 'm-7.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-7.jpg" alt="image" />
                    <?php elseif ($post1['mImage']['url']) : ?>
                      <img class="only-mobile" src="<?= $post1['mImage']['url'] ?>" alt="image" />
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="posts__item-content">
                  <h3 class="posts__item-title"><?= $post1['title'] ?></h3>
                  <h4 class="posts__item-description"><?= $post1['description'] ?>
                </div>
                <div class="posts__item-buttons">
                  <div class="posts__item-link-button">
                    <a class="link-button" href="<?= $post1['target'] ?>">
                      <?= $post1['button'] ?>
                    </a>
                  </div>
                  <div class="posts__item-primary-button">
                    <a class="primary-button" href="<?= $post1['primaryTarget'] ?>">
                      <?= $post1['primaryButton'] ?>
                    </a>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
        <?php if ($attributes['posts2']) : ?>
          <div class="posts__right">
            <?php foreach ($attributes['posts2'] as $post2) : ?>
              <div class="posts__item" data-size="<?= ($post2['big']) ? 'big' : 'small' ?>" data-color="<?= ($post2['whiteText']) ? 'white' : 'default' ?>" data-mhidden="<?= ($post2['mHide']) ? 'true' : 'false' ?>">
                <?php if ($post2['image']['url']) : ?>
                  <div class="posts__item-image">
                    <?php if ($post2['image']['url'] == '1.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/1.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '2.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/2.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '3.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/3.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '4.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/4.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '5.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/5.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '6.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/6.jpg" alt="image" />
                    <?php elseif ($post2['image']['url'] == '7.jpg') : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?php the_block_url(__DIR__); ?>/assets/7.jpg" alt="image" />
                    <?php elseif ($post2['image']['url']) : ?>
                      <img class="<?= ($post2['mImage']) ? 'only-desktop' : '' ?>" src="<?= $post2['image']['url'] ?>" alt="image" />
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <?php if ($post2['mImage']['url']) : ?>
                  <div class="posts__item-image">
                    <?php if ($post2['mImage']['url'] == 'm-1.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-1.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-2.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-2.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-3.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-3.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-4.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-4.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-5.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-5.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-6.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-6.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url'] == 'm-7.jpg') : ?>
                      <img class="only-mobile" src="<?php the_block_url(__DIR__); ?>/assets/m-7.jpg" alt="image" />
                    <?php elseif ($post2['mImage']['url']) : ?>
                      <img class="only-mobile" src="<?= $post2['mImage']['url'] ?>" alt="image" />
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="posts__item-content">
                  <h3 class="posts__item-title"><?= $post2['title'] ?></h3>
                  <h4 class="posts__item-description"><?= $post2['description'] ?>
                </div>
                <div class="posts__item-buttons">
                  <div class="posts__item-link-button">
                    <a class="link-button" href="<?= $post2['target'] ?>">
                      <?= $post2['button'] ?>
                    </a>
                  </div>
                  <div class="posts__item-primary-button">
                    <a class="primary-button" href="<?= $post2['primaryTarget'] ?>">
                      <?= $post2['primaryButton'] ?>
                    </a>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>