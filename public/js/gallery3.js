var totalcolumns = 3;

Q = gQuery;

document.addEventListener("DOMContentLoaded", function(event) {
	pageReady();
	window.addEventListener("resize", pageReady);
});


function pageReady() {
	var container = Q(".gallery3")[0];
	var images = Q(".gallery3-image");

	var width = container.clientWidth;
	var height = width / 3;
	var offsetWidth = 0;
	var additionalWidth = 0;
	
	var imagesPerColumn = 0;
	var columnStart = 0;
	for (var i = 0; i <= images.length; i++) {
		
		if (i < images.length) {
			var img = images[i].querySelector("img");
			var w = img.dataset.w;
			var h = img.dataset.h;
			var hpw = h / w;
			var imgWidthi = height / hpw;
	
			offsetWidth += imgWidthi;
		} else {
			imgWidthi = 0;
		}
		
		if (offsetWidth > width || i == images.length) {
			console.log(columnStart+"+"+(i-1));
			var line = Q.slice(images, columnStart, i - 1); 
			
			additionalWidth = (width + imgWidthi - offsetWidth) / imagesPerColumn;
			
			if (i < images.length) {
				images[i].style["clear"] = "left";
			}
						
			processLine(line, width, height, additionalWidth);
			
			offsetWidth = imgWidthi;
			avgHeight = 
			imagesPerColumn = 0;
			columnStart = i;
		}

		imagesPerColumn++;
	}

}

function processLine(images, width, height, additionalWidth) {

	var totalWidth = 0;
	for (var i = 0; i < images.length; i++) {
		var img = images[i].querySelector("img");
		var w = img.dataset.w;
		var h = img.dataset.h;
		var hpw = h / w;
		
		var imgWidth = additionalWidth + (height / hpw);
		var roundWidth = Math.round(imgWidth);
		
		totalWidth += roundWidth;
		
		if (totalWidth >= width -1) {
			roundWidth = roundWidth - totalWidth + width - 1;
		}
		
		images[i].style["height"] = Math.round(height) + "px";
		images[i].style["width"] = roundWidth + "px";

		var divHeight = height;
		var imgHeight = imgWidth * hpw;
		
		
		var centerHeight = (divHeight - imgHeight) / 2;
		var centerWidth = -(centerHeight / hpw) / 2;
		
		if (centerHeight <= 0) {
			img.style["margin-top"] = Math.round(centerHeight) + "px";
			img.style["width"] = "100%";
		} else {
			img.style["margin-left"] = Math.round(centerWidth) + "px";
			img.style["height"] = "100%";
		}
	}
}