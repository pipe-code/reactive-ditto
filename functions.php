<?php
/**
 * Register Theme Scripts
 * https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 */
function ditto_scripts() {
  wp_enqueue_style( 'core', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'app-styles', get_template_directory_uri() . '/dist/app.bundle.css' );
  wp_enqueue_script( 'app-scripts', get_template_directory_uri() . '/dist/app.bundle.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'ditto_scripts');

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
 * Theme support
 * https://developer.wordpress.org/reference/functions/add_theme_support/
 */
add_theme_support( 'custom-logo' );

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
 * Install latest jQuery version 3.5.1
 */
if (!is_admin()) {
	wp_deregister_script('jquery');
	wp_register_script('jquery', ("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"), false);
	wp_enqueue_script('jquery');
}

/**
 * Get Page API
 */
function getPage( $data ) {
  $args = array(  
    'post_type'       => 'page',
    'post_status'     => 'publish',
    'posts_per_page'  => -1,
    'order'           => 'DESC',
  );
	if ($data['id'] && $data['id'] != 0) {
	  $args['p'] = $data['id'];
	}
	$query = new WP_Query($args);
	if ($query->have_posts()):
		while ( $query->have_posts() ):
			$query->the_post();
			$pages[] = (object) array(
        "haveposts" => true,
				'id' 		    => get_the_ID(),
        'title' 	  => get_the_title(),
        'content'   => get_the_content()
			);
		endwhile;
		wp_reset_postdata();
    print_r(json_encode($pages));
    return null;
	else:
    print_r(json_encode(array("haveposts" => false)));
    return null;
  endif;
}
add_action( 'rest_api_init', function () { register_rest_route( 'page', '/(?P<id>\d+)', array( 'methods' => 'GET', 'callback' => 'getPage' )); });