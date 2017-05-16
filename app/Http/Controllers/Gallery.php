<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Gallery extends Controller {
	/**
	 * Exemple of Gallery 1.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function gallery1() {
		return view ( "gallery.gallery1" );
	}
	
	public function gallery2() {
		return view ( "gallery.gallery2" );
	}
	
	public function gallery3() {
		return view ( "gallery.gallery3" );
	}
}
