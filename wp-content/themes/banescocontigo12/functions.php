<?php

/**
 * Banesco Contigo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package banescocontigo
 */

if (!defined('_S_VERSION')) {
	define('_S_VERSION', '1.0.3');
}

function banescocontigo_setup()
{
	/*
	 * Add basic for Block Styles.
	 */
	add_theme_support('wp-block-styles');
	add_theme_support('post-thumbnails');
	add_theme_support('editor-styles');

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		]
	);

	/*
	 * Enqueue editor styles.
	 */
	add_editor_style('style-editor.css');

	/*
	 * This theme uses wp_nav_menu() in one location.
	 */
	register_nav_menus(
		[
			'primary_menu' => esc_html__('Primary menu', 'banescocontigo'),
			'primary_sub_menu_left' => esc_html__('Primary sub-menu left', 'banescocontigo'),
			'primary_sub_menu_center' => esc_html__('Primary sub-menu center', 'banescocontigo'),
			'primary_sub_menu_right' => esc_html__('Primary sub-menu right', 'banescocontigo'),
			'footer_menu' => esc_html__('Footer menu', 'banescocontigo'),
		]
	);
}
add_action('after_setup_theme', 'banescocontigo_setup');

/**
 * Register widget area.
 */
function banescocontigo_widgets_init()
{
	register_sidebar([
		'name'        => 'Footer',
		'id'          => 'sidebar-1',
		'description' => 'Widgets in this area will be displayed in the footer.',
		'before_title'  => '',
		'after_title'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
	]);
}

add_action('widgets_init', 'banescocontigo_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function banescocontigo_scripts()
{
	wp_enqueue_style('banescocontigo-swiper-style', '//cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.4/swiper-bundle.min.css', [], _S_VERSION);
	wp_enqueue_style('banescocontigo-slider-style', '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.css', [], _S_VERSION);
	wp_enqueue_style('banescocontigo-style', get_stylesheet_uri(), [], _S_VERSION);

	wp_enqueue_script('banescocontigo-swiper-script', '//cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.4/swiper-bundle.min.js', [], _S_VERSION, true);
	wp_enqueue_script('banescocontigo-wnumb-script', '//cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js', [], _S_VERSION, true);
	wp_enqueue_script('banescocontigo-slider-script', '//cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.js', [], _S_VERSION, true);
	wp_enqueue_script('banescocontigo-script', get_template_directory_uri() . '/assets/scripts/main.js', [], _S_VERSION, true);
	// wp_enqueue_script('banescocontigo-jquery', get_template_directory_uri() . '/assets/scripts/jquery.js', ['jquery'], _S_VERSION, true);

	wp_enqueue_script('jquery');

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'banescocontigo_scripts');

function my_acf_init()
{
	acf_update_setting('google_api_key', 'AIzaSyChFZr2e_SWPcpR5IbJa9nUWZpL1gg1OxA');
}
add_action('acf/init', 'my_acf_init');

/**
 * Gutenberg folders setup.
 */
function gutenberg_blocks_init()
{
	$blocks = glob(get_template_directory() . '/blocks/src/*', GLOB_ONLYDIR);

	foreach ($blocks as $block) {
		require $block . '/index.php';
	}
}
add_action('init', 'gutenberg_blocks_init');

add_action('wp_ajax_promotions', 'promotions_ajax');
add_action('wp_ajax_nopriv_promotions', 'promotions_ajax');

function promotions_ajax()
{
	$cat_id = $_POST['cat'];
	if ($_POST['cat'] != 'all') {
		$args = array(
			'post_type' => 'promociones',
			'posts_per_page' => -1,
			'tax_query' => array(
				array(
					'taxonomy' => 'categories',
					'field' => 'slug',
					'terms' => array($cat_id) //excluding the term you dont want.
				)
			)
		);
	} else {
		$args = array(
			'post_type' => 'promociones',
			'posts_per_page' => -1
		);
	}
	
	global $post;
	$posts = get_posts($args);
	ob_start();
	foreach ($posts as $post) {
		setup_postdata($post);
?>
		<?php $post_id = get_the_ID();  ?>
		<?php $post_categories = get_the_terms($post_id, 'categories'); ?>
		<div class="promotions__post">
			<a class="promotions__post-image" href="<?php the_permalink(); ?>">
				<?php the_post_thumbnail(); ?>
			</a>
			<div class="promotions__post-content">
				<a class="promotions__post-title" href="<?php the_permalink(); ?>"><?php the_title() ?></a>
				<a class="promotions__post-excerpt" href="<?php the_permalink(); ?>">
					<?php the_excerpt() ?>
				</a>
				<div class="promotions__post-categories">
					<?php foreach ($post_categories as $category) :  ?>
						<a class="promotions__post-category" href="?category=<?php echo $category->slug; ?>"><?php echo $category->name; ?></a>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
<?php }
	wp_reset_postdata();
	$response = ob_get_contents();
	ob_end_clean();
	echo $response;
	die(1);
}

/**
 * Use Gutenberg for single posts.
 */
add_filter('use_block_editor_for_post_type', function ($use, $post_type) {
	return in_array($post_type, ['page']);
}, 100, 2);

/**
 * Utilities.
 */
require get_template_directory() . '/inc/utils/post_views.php';
require get_template_directory() . '/inc/utils/custom_pagination.php';
require get_template_directory() . '/inc/utils/custom_post_types.php';

/** 
 * Helpers.
 */
require get_template_directory() . '/inc/helpers/get_block_url.php';
require get_template_directory() . '/inc/helpers/get_slug.php';
require get_template_directory() . '/inc/helpers/get_theme_field.php';
require get_template_directory() . '/inc/helpers/get_theme_url.php';

/**
 * Customizers additions.
 */
require get_template_directory() . '/inc/customizers/customizer_header.php';
require get_template_directory() . '/inc/customizers/customizer_footer.php';
require get_template_directory() . '/inc/customizers/customizer_404.php';
require get_template_directory() . '/inc/customizers/customizer_attention.php';
require get_template_directory() . '/inc/customizers/customizer_chat.php';
require get_template_directory() . '/inc/customizers/customizer_terms.php';
require get_template_directory() . '/inc/customizers/customizer_currency.php';
require get_template_directory() . '/inc/customizers/customizer_banner.php';

			if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_63d3b01f3c386',
	'title' => 'Card options',
	'fields' => array(
		array(
			'key' => 'field_63d3b01fb8977',
			'label' => 'Internacional',
			'name' => 'internacional',
			'aria-label' => '',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
			'ui' => 1,
		),
		array(
			'key' => 'field_63d3b098b8978',
			'label' => 'Chip',
			'name' => 'chip',
			'aria-label' => '',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
			'ui' => 1,
		),
		array(
			'key' => 'field_63d3b0a9b8979',
			'label' => 'Multicredito Banesco',
			'name' => 'multicredito_banesco',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'Hasta 1.5 veces el límite de tu tarjeta',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_63d3b0d6b897a',
			'label' => 'Puntos Verdes',
			'name' => 'puntos_verdes',
			'aria-label' => '',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
			'ui' => 1,
		),
		array(
			'key' => 'field_63d3b124b897b',
			'label' => 'Proteccion y Seguros',
			'name' => 'proteccion_y_seguros',
			'aria-label' => '',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
			'ui' => 1,
		),
		array(
			'key' => 'field_63d3b132b897c',
			'label' => 'Asistencia',
			'name' => 'asistencia',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '24/7',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_63d3b140b897d',
			'label' => 'Más detalles',
			'name' => 'mas_detalles',
			'aria-label' => '',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '3 o 4 líneas acerca de detalles específicos de esta tarjeta de crédito en particular. Pueden ser beneficios, promociones o intereses.',
			'maxlength' => '',
			'rows' => '',
			'placeholder' => '',
			'new_lines' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'cards',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));

acf_add_local_field_group(array(
	'key' => 'group_63d9344e0bc5f',
	'title' => 'Locations',
	'fields' => array(
		array(
			'key' => 'field_63d9344e0ebcb',
			'label' => 'Position on the map',
			'name' => 'position',
			'aria-label' => '',
			'type' => 'google_map',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'center_lat' => '18.470991',
			'center_lng' => '-69.929213',
			'zoom' => 13,
			'height' => 500,
		),
		array(
			'key' => 'field_63d944eb599e9',
			'label' => 'Address',
			'name' => 'address',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_63d94518599ea',
			'label' => 'Phone',
			'name' => 'phone',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_63d94533599eb',
			'label' => 'Time Schedule',
			'name' => 'time',
			'aria-label' => '',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'maxlength' => '',
			'rows' => '',
			'placeholder' => '',
			'new_lines' => 'br',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'type-locations',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));

acf_add_local_field_group(array(
	'key' => 'group_6400fc95727f2',
	'title' => 'Promotion',
	'fields' => array(
		array(
			'key' => 'field_6400fc956e591',
			'label' => 'Enable promotion form',
			'name' => 'promotion_form_enable',
			'aria-label' => '',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 1,
			'ui_on_text' => '',
			'ui_off_text' => '',
			'ui' => 1,
		),
		array(
			'key' => 'field_640110c0387e8',
			'label' => 'Promotion form',
			'name' => 'promotion_form',
			'aria-label' => '',
			'type' => 'forms',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => array(
				array(
					array(
						'field' => 'field_6400fc956e591',
						'operator' => '==',
						'value' => '1',
					),
				),
			),
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'id',
			'allow_null' => 1,
			'multiple' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'promociones',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));

acf_add_local_field_group(array(
	'key' => 'group_6400d9c69ea09',
	'title' => 'Promotions',
	'fields' => array(
		array(
			'key' => 'field_6400d9c72b6a9',
			'label' => 'Promotions title',
			'name' => 'promotions_title',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'Promociones y descuentos',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_6400da0a2b6aa',
			'label' => 'Promotions description',
			'name' => 'promotions_description',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tristique quam. Sed eget metus est. Mauris vel orci quis mi convallis lacinia in sed magna.',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_6400da562b6ab',
			'label' => 'Promotions background',
			'name' => 'promotions_background',
			'aria-label' => '',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'array',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'preview_size' => 'medium',
		),
		array(
			'key' => 'field_6400da7a2b6ac',
			'label' => 'Promotions background (mobile)',
			'name' => 'promotions_background_mobile',
			'aria-label' => '',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'array',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'preview_size' => 'medium',
		),
		array(
			'key' => 'field_6400da882b6ad',
			'label' => 'Promotions "View All" button',
			'name' => 'promotions_view_all_button',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'Ver todo',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
		array(
			'key' => 'field_6400dab02b6ae',
			'label' => 'Promotions posts not found',
			'name' => 'promotions_posts_not_found',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'No se han encontrado publicaciones',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page',
				'operator' => '==',
				'value' => '522',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));

endif;		


require_once( get_template_directory() . '/inc/utils/pacific_gutenberg.php' );
require_once( get_template_directory() . '/inc/utils/pacific_theme_setup.php' );
require_once( get_template_directory() . '/inc/helpers/pacific_helper.php' );
$theme_setup = new Pacific_theme_setup;


// App style
if ( file_exists( get_template_directory() . '/dist/css/app.min.css' ) ) :
    $csstime = filemtime( get_template_directory() . '/dist/css/app.min.css' );
    wp_enqueue_style( 'app', get_template_directory_uri() . '/dist/css/app.min.css', array(), $csstime );
  endif;

  add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  ?><style>
	html .acf-input  .button,
  html .editor-styles-wrapper .acf-actions .button {
	display: block;
    border-radius: 2px;
    border: 1px solid #757575;
    background: #007cba;
    padding: inherit;
    width: auto;
    height: auto;
    color: #fff;
    padding: 0.2rem 0.8rem;
    min-width: 0;
    display: inline-flex;
}
  </style>
  <?php
}