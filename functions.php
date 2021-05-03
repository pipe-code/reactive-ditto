<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Theme Includes
 */
$madison_users_includes = array(
  '/wordpress_settings.php',      // Wordpress config.
  '/post-types.php',              // Register post types.
  '/taxonomies.php',              // Register taxonomies.
  '/endpoints.php',               // Register endpoints.
);
foreach ( $madison_users_includes as $file ) {
  require_once __DIR__ . '/inc' . $file;
}

