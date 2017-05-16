var totalcolumns = 3;

Q = gQuery;

document.addEventListener("DOMContentLoaded", function(event) {
	pageReady();
	window.addEventListener("resize", pageReady);
});


function pageReady() {
	var container = Q(".gallery2")[0];
	var images = Q(".gallery2-image");

	var width = container.clientWidth;
	var widthPerColumn = width / 3;
	
	var offsetLeft = 0;
	var columHeight = [];
	
	for (var i = 0; i < totalcolumns; i++) {
		columHeight[i] = 0;
	}
	
	for (var i = 0; i < images.length; i++) {
		var img = images[i].querySelector("img");
		var width = img.dataset.w;
		var height = img.dataset.h;
		var hpw = height / width;
		
		var column = 0;
		var minColumnHeight = columHeight[0];
		for (var c = 0; c < totalcolumns; c++) {
			var actualColumnHeight = columHeight[c];

			if (actualColumnHeight < minColumnHeight) {
				minColumnHeight = columHeight[i];
				column = c;
			}
		}
		
				
		images[i].style["width"] = (widthPerColumn) + "px";
		images[i].style["margin-left"] = (widthPerColumn * column)  + "px";
		images[i].style["margin-top"] = (columHeight[column])  + "px";

		columHeight[column] += widthPerColumn * hpw;
	}
}
