<?php
if ( function_exists('register_sidebar') )
register_sidebar();


if ( function_exists('register_nav_menus') )
register_nav_menus(
	array(
		'main_menu'	=> __('Menu principal')
	)
);
