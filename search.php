<?php
/**
 * 
 * Default search page.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: 'search', query: '<?= get_search_query() ?>' }
</script>

<?php get_footer(); ?>