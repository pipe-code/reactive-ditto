<?php
/**
 * 
 * Default single.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: 'single', id: '<?= get_the_ID() ?>', parentSlug: '' }
</script>

<?php get_footer(); ?>