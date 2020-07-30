<?php
/**
 * 
 * Default index.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: 'index', id: '<?= get_the_ID() ?>' }
</script>

<?php get_footer(); ?>