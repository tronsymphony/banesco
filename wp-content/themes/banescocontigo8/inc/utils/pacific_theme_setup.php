<?php

/**
 * Sets up the base functionality for our base theme.
 */

 class Pacific_theme_setup {
  public function __construct() {
    // Theme Options
		$this->options_page();
  }

  /**
	 * Adds Theme Settings option page
	 */
	public function options_page()
	{
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
 }