<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
	/**
	 * The table associated with the model
	 *
	 * @var string
	 */
	protected $table = 'picture';
	
	public static function getByAlbumId($albumId) {
		if (empty($albumId)) {
			return null;
		}
		
		return \App\Picture::where('album_id', $albumId)->get();
	}
}
