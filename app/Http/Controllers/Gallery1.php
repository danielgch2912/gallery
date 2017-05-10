<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Gallery1 extends Controller {
	/**
	 * Exemple of Gallery 1.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function gallery1() {
		return view ( "gallery1.gallery1" );
	}
}
