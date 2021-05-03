<?php
/**
 * Register endpoints
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'rest_api_init', function () {
    // Page
    register_rest_route( 'page', '/(?P<id>\d+)', array(
        array(
            'methods'               => WP_REST_Server::READABLE,
            'callback'              => 'page_handler',
            'permission_callback'   => '__return_true',          
        )
    ));
    // Main Menu
    register_rest_route( 'navigation', '/main_menu', array(
        array(
            'methods'               => WP_REST_Server::READABLE,
            'callback'              => 'main_menu_handler',
            'permission_callback'   => '__return_true',          
        )
    ) );
    // Router
    register_rest_route( 'router', '/pages', array(
        array(
            'methods'               => WP_REST_Server::READABLE,
            'callback'              => 'router_pages_handler',
            'permission_callback'   => '__return_true',          
        )
    ) );
});

function main_menu_handler() {
    $output = [];
    $menu = wp_get_nav_menu_items(get_nav_menu_locations()['main_menu'], null);

    $frontpage_id = get_option( 'page_on_front' );
    $output["has_logo"] = has_custom_logo();

    if($output["has_logo"]) {
        $output["logo"] = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ) , 'full' )[0];
    } else {
        $output["logo"] = get_bloginfo( 'name' );
    }

    if($menu) {
        foreach ($menu as $key => $item) {
            $path = ($frontpage_id == $item->object_id) ? '/' : '/'.get_post_field( 'post_name', $item->object_id );
            $output["menu"][] = [
                "ID"        => $item->ID,
                "title"     => $item->title,
                "url"       => $item->url,
                "slug"      => get_post_field( 'post_name', $item->object_id ),
                "path"      => $path,
                "page_id"   => $item->object_id,
                "parent"    => $item->post_parent,
                "classes"   => $item->classes
            ];
        }
    }

    return $output;
}

function page_handler( $request ) {
    $params = $request->get_params();

    $page = get_posts([
        'p'                 => $params['id'],
        'post_type'         => 'page',
        'post_status'       => 'publish',
    ]);

    if ($page):
        $output = [
            'have_post' => true,
            'title'     => get_the_title($page[0]->ID),
            'content'   => get_the_content($page[0]->ID)
        ];
    else:
        $output = [
            'have_post' => false,
            'title'     => null,
            'content'   => null
        ];
    endif;

    return $output;
}

function router_pages_handler() {
    $posts = get_posts([
        "posts_per_page" => -1,
        "post_status" => "publish",
        "post_type" => ["page"]
    ]);
    $frontpage_id = get_option( 'page_on_front' );

    $formatedPosts[] = [
        "ID"            => (int)$frontpage_id,
        "post_name"     => '/',
        "post_parent"   => '',
        "post_title"    => get_bloginfo('name'),
        "post_type"     => get_post_type($frontpage_id)
    ];

    if($posts) {
        foreach ($posts as $key => $item) {
            if($item->ID != $frontpage_id) {
                $post_type = get_post_type($item->ID);
                $post_type_path = ($post_type != "page") ? "/{$post_type}/" : "/";
                $formatedPosts[] = [
                    "ID"            => $item->ID,
                    "post_name"     => $post_type_path . $item->post_name,
                    "post_parent"   => get_post_field( 'post_name', $item->post_parent ),
                    "post_title"    => get_the_title($item->ID) . ' | ' . get_bloginfo('name'),
                    "post_type"     => $post_type
                ];
            }
        }
    }

    return [
        "basename"  => site_url( '', 'relative') . '/',
        "items"     => $formatedPosts
    ];
}