<?php
/**
 * 
 * Default 404.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: '404' }
</script>

<?php get_footer(); ?>