<?php
/**
 * 
 * Header.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php wp_title('|', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
  <?php wp_head(); ?>
  <script>
    const _dittoURI_    = "<?= get_template_directory_uri() ?>",
          _dittoURL_    = "<?= get_site_url() ?>",
          generalData = {
            header: {
              hasCustomLogo: <?= has_custom_logo() ? 1 : 0 ?>,
              blogName: "<?php bloginfo( 'name' ) ?>",
              customLogo: "<?= wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ) , 'full' )[0] ?>",
              mainMenu: <?= json_encode(wp_get_nav_menu_items(get_nav_menu_locations()['main_menu'], null)) ?>
            }
          }
  </script>
</head>

<body <?php body_class(); ?>>


