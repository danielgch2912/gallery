<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
	/**
	 * The table associated with the model
	 * 
	 * @var string
	 */
	protected $table = 'album';
	
	public static function getByUrlCode($code) {
		if (empty($code)) {
			return null;
		}
		
		return \App\Album::where('url_code', $code)->get();
	}
}
