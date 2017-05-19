<?php

/*
 * |--------------------------------------------------------------------------
 * | Web Routes
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you can register web routes for your application. These
 * | routes are loaded by the RouteServiceProvider within a group which
 * | contains the "web" middleware group. Now create something great!
 * |
 */
Route::get ( '/', function () {
	return view ( 'welcome' );
} );

Route::get ( 'album/list', 'AlbumController@listAlbums' );
Route::get ( 'album/{album}', 'AlbumController@listAlbum' );

// Gallery 1
Route::get ( 'gallery1', 'Gallery@gallery1' );
Route::get ( 'gallery2', 'Gallery@gallery2' );
Route::get ( 'gallery3', 'Gallery@gallery3' );
Route::get ( 'gallery4', 'Gallery@gallery4' );

