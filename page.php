<?php
/**
 * 
 * Default page.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: 'page', id: '<?= get_the_ID() ?>' }
</script>

<?php get_footer(); ?>