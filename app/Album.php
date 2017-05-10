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
				
		$albums = \App\Album::where('url_code', $code)->get();
		
		foreach ($albums as $album) {
			$album->pictures = \App\Picture::getByAlbumId($album->id);
		}
		
		return $albums;
	}
}
