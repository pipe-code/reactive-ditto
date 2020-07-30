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

global $pageBuilder;
$pageBuilder = get_field('shippan_components');
?>

<main id="ditto-page">
	<?php get_template_part('page_builder'); ?>
</main>

<?php get_footer(); ?>