<?php 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

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


function main_menu_handler() {
    $output = [];
    $menu = wp_get_nav_menu_items(get_nav_menu_locations()['main_menu'], null);

    foreach ($menu as $key => $item) {
        $output[] = [
            "ID"        => $item->ID,
            "title"     => $item->title,
            "url"       => $item->url,
            "page_id"   => $item->object_id,
            "parent"    => $item->post_parent,
            "classes"   => $item->classes
        ];
    }

    return $output;
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'navigation', '/main_menu', array(
        array(
            'methods'               => WP_REST_Server::READABLE,
            'callback'              => 'main_menu_handler',
            'permission_callback'   => '__return_true',          
        )
    ) );
});

?>