<?php
/**
 * 
 * Default archive.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<script>
	const pageSettings = { page: 'archive', slug: '<?= get_archive_post_type() ?>' }
</script>

<?php get_footer(); ?>