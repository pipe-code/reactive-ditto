<?php 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Theme Scripts
 * https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 */
$appVersion = '1.0.0';
function ditto_scripts() {
  wp_enqueue_style( 'core', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'app-styles', get_template_directory_uri() . '/dist/app.bundle.css', array(), $appVersion );
  wp_enqueue_script( 'app-scripts', get_template_directory_uri() . '/dist/app.bundle.js', array(), $appVersion, true );
}
add_action( 'wp_enqueue_scripts', 'ditto_scripts');

/**
 * Theme support
 * https://developer.wordpress.org/reference/functions/add_theme_support/
 */
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );

/**
 * Register Navigation Menus
 * https://developer.wordpress.org/reference/functions/register_nav_menus/
 */
function ditto_navigation_menus() {
  $locations = array(
    'main_menu' => __( 'Main Menu', 'text_domain' )
  );
  register_nav_menus( $locations );
}
add_action( 'init', 'ditto_navigation_menus' );

/**
 * Login Styles
 */
function ditto_login_styles() { ?>
  <style type="text/css">
    body {
      background-color: #222 !important;
    }
    #login h1 a, .login h1 a {
      display: none;
    }
    #login h1 img {
      width: 100%;
      max-width: 240px;
      max-height: 180px;
    }
  </style>
  <script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) { 
      let loginImg = document.createElement("img");
        loginImg.src = "<?= get_template_directory_uri() ?>/src/assets/pipe-code-logo.svg";
        loginImg.alt = "WordPress login image";
        document.querySelector('#login h1').appendChild(loginImg);
    });
  </script>
<?php }
add_action( 'login_enqueue_scripts', 'ditto_login_styles' );

/**
 * Disable Gutenberg
 */
add_filter('use_block_editor_for_post', '__return_false', 10);
add_filter('use_block_editor_for_post_type', '__return_false', 10);

/**
 * Allow big images
 */
add_filter( 'big_image_size_threshold', '__return_false' );

/**
 * Register ACF Custom Menu
 * https://www.advancedcustomfields.com/resources/acf_add_options_page/
 */
function fairfax_menu_settings() {
  if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
      'page_title'    => 'Theme Settings',
      'menu_title'    => 'Theme Settings',
      'menu_slug'     => 'theme-settings',
      'capability'    => 'edit_posts',
      'redirect'      =>  true
    ));
    
    acf_add_options_sub_page(array(
      'page_title' 	=> '404 Error',
      'menu_title' 	=> '404 Error',
      'parent_slug'   => 'theme-settings',
    ));
  }
}
add_action('init', 'fairfax_menu_settings');


?>