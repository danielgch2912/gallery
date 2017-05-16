<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
    	<title>Gallery 1</title>
    	
		<script type="text/javascript" src="{{ asset('js/gallery1.js') }}"></script>
		<link rel="stylesheet" type="text/css" href="{{ asset('css/gallery.css') }}"/>
		<link rel="stylesheet" type="text/css" href="{{ asset('css/gallery1.css') }}"/>
	</head>
	
	<body>		
		
		<div class="gallery1">
			<div class="gallery1-list">
				<img src="{{ asset('img/1.jpg') }}"/>
			</div>
			
			<div class="gallery1-carousel"><div class="gallery-arrow gallery1-left"><span class="gallery-icons gallery-icons-left"></span></div><div class="gallery1-imagelist"><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div><div class="gallery1-carousel-image"></div></div><div class="gallery-arrow gallery1-right"><span class="gallery-icons gallery-icons-right"></span></div></div>
		</div>
	</body>

</html>