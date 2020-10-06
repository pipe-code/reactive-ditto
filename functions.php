<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

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
 * Theme Includes
 */
$madison_users_includes = array(
  '/wordpress_settings.php',      // Wordpress config.
  '/navigation.php',              // Register navigation menues and endpoints.
);
foreach ( $madison_users_includes as $file ) {
  require_once __DIR__ . '/inc' . $file;
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

/**
 * Get Search Results API
 */
function getSearchResults( $data ) {
  $args = array(  
    'post_type'       => ['page'],
    'post_status'     => 'publish',
    's'               =>  urldecode($data['query']),
    'posts_per_page'  => -1,
    'order'           => 'DESC',
  );
	$query = new WP_Query($args);
  if ($query->have_posts()):
    $posts['haveposts'] = true;
		while ( $query->have_posts() ):
			$query->the_post();
			$posts['posts'][] = (object) array(
				'id' 		=> get_the_ID(),
        'title' => get_the_title()
			);
		endwhile;
		wp_reset_postdata();
    print_r(json_encode($posts));
    return null;
	else:
    print_r(json_encode(array("haveposts" => false)));
    return null;
  endif;
}
add_action( 'rest_api_init', function () { register_rest_route( 'search', '/(?P<query>\S+)', array( 'methods' => 'GET', 'callback' => 'getSearchResults' )); });