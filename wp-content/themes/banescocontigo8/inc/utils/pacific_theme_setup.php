<?php

/**
 * Sets up the base functionality for our base theme.
 */

class Pacific_theme_setup {
  public function __construct() {
		add_action( 'after_setup_theme', [$this, 'image_sizes'] );
		add_filter( 'acf/load_field/name=form', [$this, 'acf_populate_gf_forms_ids'] );

    // Theme Options
		$this->options_page();
  }

  /**
	 * Adds Theme Settings option page
	 */
	public function options_page() {
		if( function_exists('acf_add_options_page') ) {
			$theme_options = acf_add_options_page( array(
				'page_title' => __('Theme Settings', 'pacific'),
				'menu_title' => __('Theme Settings', 'pacific'),
				'menu_slug'	 => 'theme-settings',
				'capability' => 'edit_posts',
				'redirect'   => false
			));
		}
	}

	public function acf_populate_gf_forms_ids( $field ) {
		if ( class_exists( 'GFFormsModel' ) ) {
			$choices = [];
			foreach ( \GFFormsModel::get_forms() as $form ) {
				$choices[ $form->id ] = $form->title;
			}
			$field['choices'] = $choices;
		}

		return $field;
	}

	public function image_sizes() {
		add_image_size( 'latest-posts', 271, 271, true );
		add_image_size( 'video-thumbnail', 464, 259, true );
		add_image_size( 'full-width', 1220, 762, true );
		add_image_size( 'mobile-width', 360, 267 );
		add_image_size( 'card', 120, 78 );
		add_image_size( 'presidents', 200, 200, true );
		add_image_size( 'portal', 587, 587, true );
		add_image_size( 'pdf', 75, 87, true );
		add_image_size( 'ratings', 196, 52, true );
		add_image_size( 'connect2', 677, 408, true );
	}

	public static function setPostViews( $postID ) {
		$count_key = 'post_views_count';
		$count = get_post_meta($postID, $count_key, true);

		if ( $count=='' ) :
				$count = 0;
				delete_post_meta($postID, $count_key);
				add_post_meta($postID, $count_key, '0');
		else :
				$count++;
				update_post_meta($postID, $count_key, $count);
		endif;
	}
}