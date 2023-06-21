<?php
/**
 * Plugin Name:       Testblock
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Asmita Neupane
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       testblock
 *
 * @package           test-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function test_block_testblock_block_init() {
	register_block_type( __DIR__ . '/build/blocks/paragraph' );
    register_block_type( __DIR__ . '/build/blocks/buttons' );
}
add_action( 'init', 'test_block_testblock_block_init' );


function register_layout_category( $categories ) {
	
	$categories[] = array(
		'slug'  => 'custom-layout-category',
		'title' => 'Test Blocks'
	);

	return $categories;
}

if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
	add_filter( 'block_categories_all', 'register_layout_category' );
} else {
	add_filter( 'block_categories', 'register_layout_category' );
}