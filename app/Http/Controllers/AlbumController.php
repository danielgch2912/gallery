<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
	public function listAlbums()
	{
		$album = \App\Album::all();
		
		return response()->json($album);
	}
	
	/**
	 * List the resources of a specific album
	 * 
	 * @param unknown $album
	 * @return unknown
	 */
	public function listAlbum($album)
	{
		$result = \App\Album::getByUrlCode($album);
		 
		if ($result != null) {
			return response()->json($result);
		} else {
			return response()->json('Album not found', 404);
		}
	}
    
    

}
