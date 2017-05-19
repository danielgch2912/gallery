<?php 
//https://pixabay.com/
//http://jeremycowart.com/portfolio/world/
?>

<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
    	<title>Gallery 3</title>
    	
		<script type="text/javascript" src="{{ asset('js/query.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/gallery3.js') }}"></script>
		
		<link rel="stylesheet" type="text/css" href="{{ asset('css/gallery.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ asset('css/gallery3.css') }}"/>
	</head>
	
	<body>		
		
		<div class="gallery3">
			<div class="gallery3-image"><img data-w="4211" data-h="2807" src="{{ asset('img/3.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="3264" data-h="2448" src="{{ asset('img/1.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="2272" data-h="1704" src="{{ asset('img/2.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="800" data-h="1200" src="{{ asset('img/4.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="960" data-h="1200" src="{{ asset('img/5.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="800" data-h="1200" src="{{ asset('img/7.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="1200" data-h="800" src="{{ asset('img/6.jpg') }}"/></div>
			<div class="gallery3-image"><img data-w="1200" data-h="857" src="{{ asset('img/8.jpg') }}"/></div>
		</div>
	</body>

</html>